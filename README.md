# React 19 + TypeScript + Vite Template

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-%20-764ABC?logo=redux&logoColor=white&style=for-the-badge)
![i18next](https://img.shields.io/badge/i18next-🌍-26A69A?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

A base template for quickly starting a new project with **React 19**, **TypeScript**, and **Vite**.  
The template already includes routing, state management, localization, and ready-to-use UI components.  

---

## Tech Stack
- **React 19**
- **Vite 6**
- **TypeScript 5**
- **Redux Toolkit**
- **i18next** (localization)
- **React Router DOM**
- **React Hot Toast** (notifications)
- **SCSS modules**
- **ESLint + TS ESLint + plugins**

<p>
  <a href="README_ESLINT.md">
    <img src="https://img.shields.io/badge/ESLint_Config-Documentation-blue?style=for-the-badge&logo=eslint" alt="ESLint Config Documentation"/>
  </a>
</p>

---

## Ready-to-use Components
- DropDownMenu  
- Tooltip  
- Modal

---

## Architecture
### The project is built using the **Feature-Sliced Design (FSD)** methodology with an adapted structure:

**`app/`** — entry point, application initialization (routing, store, providers, configs).

**`pages/`** — pages (routes), assemble the UI from `widgets`, `features`, and `entities`.

**`widgets/`** — large UI blocks, composite interface elements (e.g., `Navbar`, `Sidebar`).

**`features/`** — user scenarios, complete features with logic and UI (e.g., login).

**`entities/`** — business entities: data, slice, types, simple UI (e.g., `User`, `Product`, `Question`).

**`shared/`** — reusable resources: UI components, utilities, styles, constants, types, hooks.

### Node.js - `v22+`

<img width="1666" height="1361" alt="image" src="https://github.com/user-attachments/assets/ecd40f7c-f767-4cb2-9b5e-138227fcc6a5" />

---
# RU Version

Базовый шаблон для быстрого старта нового проекта на **React 19** с поддержкой **TypeScript** и **Vite**.  
Шаблон уже включает роутинг, стейт-менеджмент, локализацию и готовые UI-компоненты.  

---

## Стек технологий
- **React 19**
- **Vite 6**
- **TypeScript 5**
- **Redux Toolkit**
- **i18next** (локализация)
- **React Router DOM**
- **React Hot Toast** (уведомления)
- **SCSS-модули**
- **ESLint + TS ESLint + плагины**

---

## Готовые компоненты
### SmartIcon
Универсальный компонент для рендеринга SVG-иконок из определенной директории (`/src/shared/assets/icons`)

! Перед использованием необходимо сгенерировать коллекцию иконок в директории,
для этого выполнить команду `npm run gen:icons`;

---

## Архитектура
### Проект построен по методологии Feature-Sliced Design (FSD) с адаптированной структурой:

**`app/`** — точка входа, инициализация приложения (роутинг, стор, провайдеры, конфиги).

**`pages/`** — страницы (роуты), собирают интерфейс из `widgets`, `features`, `entities`.

**`widgets/`** — крупные UI-блоки, составные элементы интерфейса (например, `Navbar`, `Sidebar`).

**`features/`** — пользовательские сценарии, завершённые функции с логикой и UI (например логин).

**`entities/`** — бизнес-сущности: данные, slice, типы, простой UI (например, `User`, `Product`, `Question`).

**`shared/`** — переиспользуемые ресурсы: UI-компоненты, утилиты, стили, константы, типы, хуки.

---

### Node.js - `v22+`

<img width="1666" height="1362" alt="image" src="https://github.com/user-attachments/assets/58f9f1b8-1001-4ecf-bafa-53d4fc0cd90b" />
