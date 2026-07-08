# Currency Converter

A responsive currency converter built with React, Vite, Tailwind CSS, and Chart.js. The app lets you switch currencies, compare exchange-rate history, view favorites, inspect logs, and browse recent market movement in a sliding ticker.

## What I learned while building this app

- How to structure a React app with context providers for shared currency and view state.
- How to keep currency selection reusable by splitting UI into smaller components.
- How to use Tailwind CSS for responsive layouts and typography.
- How to render charts and rate data with Chart.js.
- How to manage dropdowns, filters, and recently used items in a clean user flow.
- Why accessibility matters for interactive UI elements like tabs, buttons, and dropdown menus.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build locally.
- `npm run lint` checks the project with ESLint.

## Project structure

- `src/Components` contains the main UI pieces.
- `src/contextApi` contains shared app state.
- `public/flags` contains currency flag assets.
- `src/App.css` contains the global styling and font setup.
