## React Starter Template

Production-ready React + TypeScript starter powered by Vite, Mantine, React Router, Redux Toolkit, RTK Query, TailwindCSS, and i18next.

### Tech Stack
- **Build tooling**: Vite 5, TypeScript
- **UI**: React 18, Mantine 7
- **Routing**: React Router v6
- **State**: Redux Toolkit, RTK Query
- **Styling**: TailwindCSS, PostCSS, Mantine theme
- **i18n**: i18next, react-i18next, http-backend

### Features
- **Modular routing with layouts** (e.g., `dashboard`, `portal`)
- **Auth context** with easy extension for real APIs
- **Redux Toolkit store** and **RTK Query** setup (`authApi` example)
- **Internationalization** with lazy-loaded translations (`en`, `ar` out of the box)
- **Mantine theme** pre-configured and ready to extend
- **TailwindCSS** configured alongside Mantine

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Starts Vite dev server. Open the printed local URL in your browser.

### Lint
```bash
npm run lint
```

### Build
```bash
npm run build
```
Outputs production assets to `dist/`.

### Preview (serve production build)
```bash
npm run preview
```

---

## Project Structure
```
src/
  @core/
    i18n/                  # i18next setup and helpers
      index.ts             # i18n initialization
      useLocalizeDocumentAttributes.ts
    router/                # Routing providers and helpers
      index.tsx            # re-exports
      RoutesProvider.tsx   # Router + route mapping
      SetCurrentLayout.tsx # Layout switcher
  auth/
    AuthContext.tsx        # Authentication context/provider
  components/              # Reusable components
  configs/
    apiConfig.ts           # API base config
    navigationLinks.ts     # Sidebar/topbar links
    routes.tsx             # Route definitions
  layout/
    Dashboard/
      index.tsx            # Dashboard layout
    Portal/
      index.tsx            # Portal layout
    index.tsx              # Layout registry/switch
  pages/
    dashboard/
      home/
        index.tsx          # Example page component
  store/
    api/
      auth/
        authApi.ts         # RTK Query example API slice
    app/
      index.ts
      navigationSlice.ts
    index.ts               # Configure store
    rootReducer.ts
  theme/
    index.ts               # Mantine theme config
    styles/
      buttonStyles.ts
  utils/
    index.ts
    utils.ts
  App.tsx                  # App root: providers (i18n, store, theme, routes)
  main.tsx                 # App bootstrap

public/
  locales/
    en/translation.json
    ar/translation.json
```

---

## Routing
- Routes are defined in `src/configs/routes.tsx` as an array of route configs with:
  - `path`: string
  - `layout`: one of the registered layouts (e.g., `dashboard`)
  - `component`: React element (commonly `lazy(...)` loaded)
  - `permissions`: string[] (reserved for auth/ACL integration)

Example:
```tsx
// src/configs/routes.tsx
import { lazy } from "react";
import { RouteType } from "@/types/navigation";

const Home = lazy(() => import("@/pages/dashboard/home"));

const routes: RouteType[] = [
  { path: "/", layout: "dashboard", component: <Home />, permissions: [] },
];

export default routes;
```

Layouts live under `src/layout/`. `RoutesProvider` applies the correct layout per route.

---

## State Management
- Global store configured in `src/store/index.ts` using **Redux Toolkit**.
- Example RTK Query slice at `src/store/api/auth/authApi.ts`.
- Access via `react-redux` hooks (`useDispatch`, `useSelector`).

---

## Authentication
- `src/auth/AuthContext.tsx` exposes an Auth provider and context.
- Replace stubs and integrate with your API (e.g., via `authApi` and cookies/JWT).

---

## Internationalization (i18n)
- i18next initialized in `src/@core/i18n/index.ts` with `react-i18next`.
- Translations are loaded via `i18next-http-backend` from `public/locales/{lng}/translation.json`.
- `useLocalizeDocumentAttributes` syncs `<html lang dir>` with the current locale.
- Default language is `en`; supported languages are `en` and `ar`. Extend via:
  1. Add `public/locales/<lng>/translation.json`.
  2. Add the language label in `supportedLngs` inside `src/@core/i18n/index.ts`.

Switch language using `i18next.changeLanguage("ar")` (e.g., from a language switcher component).

---

## Theming and Styling
- Mantine theme configured in `src/theme/index.ts`. Wraps the app via `MantineProvider` in `App.tsx`.
- TailwindCSS is enabled (see `tailwind.config.js`, `postcss.config.js`). Use utility classes alongside Mantine.

---

## Environment Configuration
If you need environment variables, create a `.env` file at project root using Vite prefixes:

```env
VITE_API_BASE_URL=https://api.example.com
```

Read with `import.meta.env.VITE_API_BASE_URL`.

---

## Deployment
1. Build: `npm run build`
2. Serve the `dist/` directory on any static host (Netlify, Vercel, Nginx, S3+CloudFront, etc.).

