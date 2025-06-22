### `entities/` — **Базовые бизнес-сущности**

🔹 **Что содержит:**

- Модели предметной области
	например: `User`, `Product`, `Order`
    
- Простая логика, работа с данными сущности
    
- `model/` — store, типы, api
    
- `ui/` — UI-компоненты, привязанные к сущности
    

🔹 **Зависит от**: `shared`  
🔹 **Зависимы от него**: `features`, `widgets`, `pages`

## Рекомендуемая структура на примере сущности User

user/

    ├── model/
    │   ├── types.ts           // Типы сущности
    │   ├── selectors.ts       // Селекторы
    │   ├── slice.ts           // Redux slice или store-модель
    │   └── services.ts        // API-запросы (RTK Query, fetch)
    ├── ui/
    │   └── UserAvatar.tsx     // UI-компоненты, связанные с сущностью
    └── index.ts               // Barrel-экспорт