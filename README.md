# Шаблон проекта на React typescript

Стек:
- React v 19.0.0
- React Router Dom v7.5.1
- Redux Toolkit v9.2.0
- I18Next v25.0.1
- React Hot Toast v2.5.2
- Eslint React

## Архитектура
### Проект построен по методологии Feature-Sliced Design (FSD) с адаптированной структурой:

**`app/`** — точка входа, инициализация приложения (роутинг, стор, провайдеры, конфиги).

**`pages/`** — страницы (роуты), собирают интерфейс из `widgets`, `features`, `entities`.

**`widgets/`** — крупные UI-блоки, составные элементы интерфейса (например, `Navbar`, `Sidebar`).

**`features/`** — пользовательские сценарии, завершённые функции с логикой и UI (например логин).

**`entities/`** — бизнес-сущности: данные, slice, типы, простой UI (например, `User`, `Product`, `Question`).

**`shared/`** — переиспользуемые ресурсы: UI-компоненты, утилиты, стили, константы, типы, хуки.

---

### Node.js - `v22.XX.X`

<img width="1697" height="1361" alt="image" src="https://github.com/user-attachments/assets/23593fef-c245-4b8a-a78d-39c12f0be57e" />
