# Recept_zina backend

Бэкенд проекта Recept_zina: подбирает рецепты по продуктам из холодильника и шкафа. Рецепты берёт из TheMealDB, у продуктов учитываются аллергии.

## Запуск

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Документация API: http://127.0.0.1:8000/docs

## Адреса API

- `GET /api/health` — проверка, что сервер жив
- `GET /api/ingredients?furnitureType=refrigerator` — каталог продуктов (ещё есть wardrobe и oven; без параметра — все продукты)
- `GET /api/ingredients?search=мо` — подсказки при вводе (сначала совпадения с начала слова, потом по алфавиту)
- `POST /api/recipes/search` — поиск рецептов
- `POST /api/auth/register`, `POST /api/auth/login` — вход по email и паролю (пароль от 8 символов), в ответе `access_token`
- `GET /api/auth/me` — данные пользователя по заголовку `Authorization: Bearer <токен>`

## Пример поиска

```json
POST /api/recipes/search
{ "ingredients": ["chicken-breast", "garlic"], "avoid": ["milk"] }
```

Ответ:

```json
{ "recipes": [ { "id": "...", "title": "...", "imageUrl": "...", "ingredients": [{ "name": "...", "amount": "..." }], "steps": ["..."] } ], "count": 1, "message": "ok" }
```

## Тесты

```bash
python -m pytest
```

## Перед публикацией

- задать свой `AUTH_SECRET` в `.env` (шаблон — `.env.example`)
- в `app/main.py` заменить `allow_origins=["*"]` на адрес фронтенда
