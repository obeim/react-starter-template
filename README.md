# React Modern Starter Template

A modern, opinionated React starter template featuring Vite, TypeScript, Mantine UI, Tailwind CSS, Redux Toolkit, authentication, and internationalization (i18n). This template is designed for rapid development of scalable, production-ready web applications.

## Features

- ⚡ **Vite** for fast development and builds
- ⚛️ **React 18** with **TypeScript**
- 🎨 **Mantine UI** with custom theming
- 💨 **Tailwind CSS** utility-first styling
- 🗂️ **Redux Toolkit** for state management (with **RTK Query** for data fetching)
- 🔒 **Authentication** context with protected routes
- 🌍 **i18n** (i18next) with English & Arabic, runtime language switching
- 🧩 **Component-based** architecture
- 🛣️ **React Router DOM** with layout and permission support
- ✅ **ESLint** and **Prettier** for code quality
- 🧪 Ready for extension with new pages, layouts, and features

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Project Structure

```
├── src/
│   ├── @core/           # Core utilities (router, i18n, etc.)
│   ├── auth/            # Authentication context and logic
│   ├── components/      # Reusable UI components
│   ├── configs/         # App configuration (routes, etc.)
│   ├── layout/          # Layout components
│   ├── pages/           # Application pages (dashboard, auth, etc.)
│   ├── store/           # Redux store, RTK Query API, and slices
│   ├── theme/           # Mantine theme customization
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component (providers, theming)
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.ts       # Vite config
└── package.json         # Project metadata and scripts
```

## Authentication & Routing

- Uses React Context for authentication state
- Protected routes redirect unauthenticated users to `/login`
- Route permissions supported (extendable)
- Layout support for different route groups

## Internationalization (i18n)

- Powered by i18next and react-i18next
- English and Arabic supported out of the box
- Language switcher included on the home page
- RTL/LTR direction handled automatically

## Theming & Styling

- Mantine UI with custom theme (`src/theme`)
- Tailwind CSS for utility classes
- Easily extendable for custom components and styles

## Extending the Template

- Add new pages in `src/pages` and register them in `src/configs/routes.tsx`
- Add new Redux slices in `src/store`
- Customize theme in `src/theme`
- Add new languages in `src/@core/i18n`
