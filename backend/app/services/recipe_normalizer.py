"""Подготовка рецептов из TheMealDB (модуль backend-2).

Нормализация одного рецепта: маппинг ингредиентов из плоской структуры
strIngredient1..20, проверка аллергенов через каталог (перевод slug
в mealDbName) и разбивка инструкции на шаги.

Рецепт, в котором найден аллерген из avoid, возвращается как None —
роутер пропускает его и не показывает пользователю.
"""

from typing import Dict, List, Optional

from app.schemas import RecipeSearchRequest


def normalize_name(name: str) -> str:
    return " ".join(name.lower().replace('-', ' ').replace('_', ' ').split())


def names_match(a: str, b: str) -> bool:
    na, nb = normalize_name(a), normalize_name(b)
    return na in nb or nb in na


def split_instructions(text: str) -> List[str]:
    if not text:
        return []
    steps = []
    for line in text.split('\r\n'):
        line = line.strip()
        if not line:
            continue
        if '. ' in line:
            parts = [p.strip() for p in line.split('. ') if p.strip()]
            steps.extend(parts)
        else:
            steps.append(line)
    return steps


def resolve_allergens(avoid: List[str], catalog: Dict[str, Dict[str, str]]) -> List[str]:
    """Переводит slug'ов аллергенов в реальные названия из TheMealDB.

    Использует каталог, а при отсутствии перевода оставляет исходный
    slug для сравнения через names_match.
    """
    resolved = []
    for slug in avoid:
        norm_slug = normalize_name(slug)

        entry = None
        for key, value in catalog.items():
            if normalize_name(key) == norm_slug:
                entry = value
                break

        if entry and entry.get("mealDbName"):
            resolved.append(entry["mealDbName"].lower())
        else:
            resolved.append(slug.lower())

    return resolved


def normalize_recipe(recipe_data: dict, req: RecipeSearchRequest, catalog: Dict[str, Dict[str, str]]) -> dict | None:
    raw_ings = []
    for i in range(1, 21):
        name_key = f'strIngredient{i}'
        measure_key = f'strMeasure{i}'
        name = recipe_data.get(name_key)

        if name and name.strip().lower() != 'null':
            raw_ings.append({
                "name": name.strip(),
                "amount": (recipe_data.get(measure_key) or "").strip() or "Количество не указано",
            })

    if req.avoid:
        resolved_avoid = resolve_allergens(req.avoid, catalog)

        for ing in raw_ings:
            ing_name = ing['name']

            if any(names_match(ing_name.lower(), allergen_name) for allergen_name in resolved_avoid):
                return None

    steps = split_instructions(recipe_data.get('strInstructions', ''))

    return {
        "id": recipe_data.get("idMeal"),
        "title": recipe_data.get("strMeal"),
        "imageUrl": recipe_data.get("strMealThumb"),
        "ingredients": raw_ings,
        "steps": steps,
    }
