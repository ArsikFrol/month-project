# YouTube Clone

Клон YouTube на Next.js (App Router) с авторизацией через NextAuth и бэкендом на FastAPI.

## Требования

- Node.js 18+ (рекомендуется 20)
- npm / bun / pnpm
- Запущенный бэкенд (FastAPI) — см. отдельный README в папке `backend/`

## Установка

```bash
# 1. Клонировать репозиторий
git clone https://github.com/ArsikFrol/two-weeks-project.git
cd two-weeks-project/frontend

# 2. Установить зависимости
npm install
# или
bun install
```

## Переменные окружения

Создайте файл `.env.local` в корне `frontend/`:

```env
# URL бэкенда (FastAPI)
NEXT_PUBLIC_API_URL=http://localhost:8000

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=сгенерируйте_случайную_строку

# OAuth (если используете)
GOOGLE_CLIENT_ID=ваш_google_client_id
GOOGLE_CLIENT_SECRET=ваш_google_client_secret
GITHUB_CLIENT_ID=ваш_github_client_id
GITHUB_CLIENT_SECRET=ваш_github_client_secret
```

`NEXTAUTH_SECRET` можно сгенерировать командой:
```bash
openssl rand -base64 32
```

## Запуск бэкенда

Бэкенд должен быть запущен **до** фронтенда. В отдельном терминале:

Бэкенд будет доступен на `http://localhost:8000`. Проверьте, что `NEXT_PUBLIC_API_URL` указывает на него.

## Запуск фронтенда

```bash
npm run dev
# или
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
frontend/
├── app/                  # App Router: страницы и layout'ы
│   ├── (haveHeader)/     # Группа страниц с хедером
│   ├── api/auth/         # NextAuth route handlers
│   └── ...
├── components/           # Переиспользуемые компоненты
├── hooks/                # Кастомные хуки (useGetVideos и т.д.)
├── services/             # Запросы к бэкенду (axios)
├── store/                # Zustand-сторы
├── types/                # TypeScript-типы
└── public/               # Статика (картинки, иконки)
```
