"""Тесты модуля recipe_normalizer (backend-2): фильтр аллергенов через каталог."""

from app.schemas import RecipeSearchRequest
from app.services import recipe_normalizer

CATALOG = {"cheese": {"mealDbName": "cheddar cheese"}}


def _meal(ingredient: str) -> dict:
    return {
        "idMeal": "1", "strMeal": "Test Pasta", "strMealThumb": "u",
        "strInstructions": "Boil water.",
        "strIngredient1": ingredient, "strMeasure1": "100g",
    }


def test_allergen_recipe_is_excluded():
    # avoid=cheese -> переводится в cheddar cheese -> находит Cheddar
    req = RecipeSearchRequest(ingredients=["pasta"], avoid=["cheese"])
    assert recipe_normalizer.normalize_recipe(_meal("Cheddar"), req, CATALOG) is None


def test_recipe_without_allergen_is_returned():
    req = RecipeSearchRequest(ingredients=["pasta"], avoid=["milk"])
    result = recipe_normalizer.normalize_recipe(_meal("Cheddar"), req, CATALOG)
    assert result is not None
    assert result["title"] == "Test Pasta"
    assert set(result) == {"id", "title", "imageUrl", "ingredients", "steps"}
