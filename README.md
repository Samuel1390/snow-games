# Snow Games

## Descripción

Es una tienda de videojuegos desarrollada con Next.js, TypeScript y Tailwind CSS.
Este fue un proyecto en el que aprendí mucho del manejo del estado en react, arquitectura de software, optimización del rendimiento y a administrar grandes cantidades de datos, en este caso juegos digitales, clasificados por plataforma y ordenados alfabeticamente.

### Propósito

El propósito de este proyecto es mostrar mis habilidades en el desarrollo de software, presentado este proyecto en mi portfolio a posibles clientes o empleadores.

### Arquitectura ./app

```
app
├── [platform]
│   └── [letter]
│       ├── [id]
│       │   ├── page.css
│       │   └── page.tsx   --Página para un juego en particular
│       └── page.tsx  --Página con juegos que pertenecen a una plataforma y una letra en particular
├── admin                        -- Páginas de admin(solo estéticas)
│   ├── login
│   │   ├── components
│   │   │   ├── Buttons.jsx
│   │   │   └── Form.tsx
│   │   ├── login-styles.css
│   │   └── page.tsx
│   └── register
│       ├── components
│       │   ├── Form.tsx
│       │   ├── FormCard.tsx
│       │   ├── SubmitBtn.tsx
│       │   ├── TextField.tsx
│       │   ├── hooks
│       │   │   └── useValidation.tsx
│       │   └── types.ts
│       ├── page.css
│       └── page.tsx
├── components
│   ├── AboutDev.tsx
│   ├── Controls.tsx
│   ├── GameCard.tsx
│   ├── GamesGrid.tsx
│   ├── Header.tsx
│   ├── Icons.jsx
│   ├── PageRangeControl.tsx
│   ├── Sidebar.tsx
│   ├── context
│   │   ├── CartProvider.tsx
│   │   ├── FilterProvider.tsx
│   │   ├── cartContext.tsx
│   │   └── filterContext.tsx
│   ├── hooks
│   │   ├── types.ts
│   │   ├── useCartReducer.ts
│   │   ├── useFetchGames.ts
│   │   ├── useFilters.ts
│   │   └── useStates.ts
│   └── styles
│       ├── layout.css
│       └── slider.css
├── favicon.ico
├── fonts.js
├── globals.css
├── layout.tsx
├── my-cart
│   ├── page.tsx
│   └── styles.module.css
└── page.tsx      --Página principal
```
