
from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app import config
from app.schemas import ErrorResponse, RecipeSearchRequest, RecipeSearchResponse
from app.services import mealdb, recipe_logic, recipe_normalizer

router = APIRouter()

responses = {
    400: {"model": ErrorResponse, "description": "Неизвестный продукт"},
    503: {"model": ErrorResponse, "description": "TheMealDB недоступен"},
}


def empty_result() -> dict:
    return {"recipes": [], "count": 0, "message": "Подходящие рецепты не найдены"}


@router.post(
    "/recipes/search",
    response_model=RecipeSearchResponse,
    responses=responses,
)
def search_recipes(request: RecipeSearchRequest):
    """Подбор рецептов по выбранным продуктам с исключением аллергенов"""
    catalog = {item["slug"]: item for item in recipe_logic.load_ingredients()}

    unknown = [
        slug for slug in request.ingredients + request.avoid if slug not in catalog
    ]
    if unknown:
        return JSONResponse(
            status_code=400,
            content={
                "message": "Неизвестные продукты: "
                + ", ".join(unknown)
                + ". Полный список смотрите в GET /api/ingredients."
            },
        )

    selected_names = [catalog[slug]["mealDbName"] for slug in request.ingredients]

    try:
        found = {}
        for name in selected_names:
            for meal in mealdb.get_meals_by_ingredient(name):
                meal_id = meal.get("idMeal")
                if meal_id:
                    found[meal_id] = meal

        if not found:
            return empty_result()

        scored = []
        for meal_id in list(found)[: recipe_logic.MAX_CANDIDATES]:
            meal = mealdb.get_meal_details(meal_id)
            if not meal:
                continue

            # Подготовка рецепта силами модуля recipe_normalizer (backend-2):
            # маппинг ингредиентов, шаги и проверка аллергенов.
            # Рецепт с аллергеном вернётся как None — пропускаем его.
            normalized = recipe_normalizer.normalize_recipe(meal, request, catalog)
            if normalized is None:
                continue

            recipe_names = [
                ing["name"] for ing in normalized["ingredients"]
            ]
            matched = recipe_logic.matched_ingredients_count(
                selected_names, recipe_names
            )
            scored.append((matched, normalized))

        scored.sort(key=lambda pair: pair[0], reverse=True)
        recipes = [recipe for _, recipe in scored[: config.MAX_RESULTS]]

    except mealdb.MealDbUnavailable:
        return JSONResponse(
            status_code=503,
            content={"message": "Сервис рецептов временно недоступен, попробуйте позже"},
        )

    if not recipes:
        return empty_result()

    return {"recipes": recipes, "count": len(recipes), "message": "ok"}
