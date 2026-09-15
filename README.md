# Aakar

### Production-ready React applications, from the first command.

**Aakar (आकार)** is a production-ready application foundation for
building scalable React applications.

Aakar establishes the architecture, tooling, conventions, and
engineering practices that a modern application needs from day one.
Instead of spending the beginning of every project assembling the same
foundation, developers can start with a structured application that is
ready to evolve into a real product.

> **Shape your application. Build your product.**

<p align="center">
  <img src="./assets/aakar.png" alt="Aakar — The Frontend Foundation" width="720">
</p>


------------------------------------------------------------------------

## Why Aakar?

Starting a production application involves much more than choosing React
and creating a few components.

Teams need to establish:

-   A maintainable application architecture
-   Clear feature boundaries
-   State management
-   API integration
-   Form handling and validation
-   Component development and documentation
-   Unit and end-to-end testing
-   Type safety
-   Code quality and formatting
-   Git quality gates
-   Environment configuration
-   A consistent developer experience

Aakar brings these foundations together and configures them as part of
the application from the beginning.

### The goal

``` text
                    Aakar
                      │
          Production-ready foundation
                      │
       ┌──────────────┼──────────────┐
       │              │              │
 Architecture     Tooling       Engineering
       │              │              │
       └──────────────┼──────────────┘
                      │
                      ▼
             Your application
                      │
                      ▼
               Build features
```

Aakar is designed to reduce repetitive setup while giving developers a
foundation that can continue to support the application as it grows.

------------------------------------------------------------------------

## What "Production-Ready" Means

Aakar's production-ready foundation means that the generated application
starts with the engineering infrastructure expected in a serious
application.

This includes:

-   Structured and scalable architecture
-   TypeScript with strict configuration
-   API integration
-   State management
-   Form handling and validation
-   Component development with Storybook
-   Unit and component testing
-   End-to-end testing
-   Linting and formatting
-   Git pre-commit quality checks
-   Environment configuration
-   Framework configuration
-   Documentation and conventions

Aakar does **not** generate your business requirements or automatically
make an application ready to deploy without project-specific
configuration.

Instead, it gives the application a production-level **engineering
foundation** so the team can build the product on top of it.

------------------------------------------------------------------------

# Core Capabilities

## Application Architecture

Aakar supports two application structures so the foundation can match
the size and complexity of the product.

### Flat Architecture

Suitable for smaller applications where a simple structure is enough.

``` text
src/
├── components/
├── hooks/
├── stores/
├── lib/
├── config/
└── types/
```

### Modular Architecture

Designed for larger applications, multiple business domains, and teams.

``` text
src/
├── components/
│   ├── ui/
│   └── layout/
│
├── modules/
│   ├── auth/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── config/
│   │   ├── lib/
│   │   └── index.ts
│   │
│   ├── profile/
│   ├── dashboard/
│   └── documents/
│
├── stores/
├── lib/
├── config/
├── hooks/
└── types/
```

Modules keep business-specific components, state, hooks, types,
configuration, and services together.

This makes the application easier to understand, maintain, test, and
extend as it grows.

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Core Frameworks
- **Next.js 16.3.4** - Full-stack React framework with App Router
- **Vite 8.2.2** - Lightning-fast SPA bundler
- **React 19.2.8** - Modern UI library with server components

### Language & Type Safety
- **TypeScript 7.0.2** - Strict mode, 0 `any` types
- **ESLint + Prettier** - Code quality & formatting

### State Management
- **Zustand 5.0.15** - Lightweight, intuitive global state
- **Immer 11.1.18** - Immutable state updates
- **React Query 5.102.8** - Server state management with automatic caching

### Forms & Validation
- **react-hook-form 7.87.0** - Performant form state management
- **Zod 4.5.4** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration layer

### API & HTTP
- **Axios 1.20.0** - HTTP client with interceptors
- **JWT Token Management** - Automatic localStorage token injection
- **401 Redirect** - Automatic login redirect on auth failure

### UI & Styling
- **Tailwind CSS 4.3.3** - Utility-first CSS framework
- **shadcn/ui** - 18+ pre-built accessible components
- **Storybook 10.6.0** - Component documentation & visual regression

### Testing
- **Vitest** - Unit & component testing
- **Playwright** - End-to-end testing
- **@testing-library/react** - Testing utilities

### Developer Experience
- **Husky** - Git pre-commit hooks
- **lint-staged** - Run linters on staged files
- **pnpm 9.0.0+** - Fast, space-efficient package manager

---

⚠️ **Version Note:** The versions listed in the Tech Stack section above are **reference versions used by Client-Generator**. When generating a project:
- **Framework versions** (Next.js, Vite) will be the **latest available** at generation time since we use `create-next-app@latest` and `create-vite@latest`
- **Other package versions** follow the specifications in `scripts/dependencies.config.ts`
- **Check your generated project's `package.json`** to see actual installed versions

**Why?** Using `@latest` ensures:
- ✅ Latest security patches are always included
- ✅ Latest bug fixes are available
- ✅ Projects are built on current, stable versions
- ⚠️ Your versions may differ slightly from documentation (this is expected and healthy)

## Next.js

Next.js provides a full application framework with the App Router and
support for server-side rendering and other application-level
capabilities.

Aakar configures the surrounding application architecture and
development tooling around Next.js.

``` text
Next.js
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
└── src/
    ├── components/
    ├── modules/
    ├── stores/
    ├── hooks/
    ├── lib/
    ├── config/
    └── types/
```

## Vite

Vite provides a lightweight React application foundation for
SPA-oriented applications.

``` text
Vite
├── index.html
│
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    ├── modules/
    ├── stores/
    ├── hooks/
    ├── lib/
    ├── config/
    └── types/
```

The selected framework determines the application entry point and
framework-specific configuration. The Aakar engineering foundation
remains consistent.

------------------------------------------------------------------------

# UI and Styling

Aakar provides a modern UI foundation using:

-   Tailwind CSS
-   shadcn/ui
-   Reusable component organization
-   Storybook integration

Components can be kept close to the feature that owns them or placed in
shared component areas when they are used across the application.

Example:

``` text
src/components/
├── ui/
└── layout/

src/modules/projects/
└── components/
```

------------------------------------------------------------------------

# State Management

Aakar supports client-side state management with **Zustand** and
**Immer**.

The generated structure supports both global and feature-specific state.

### Global state

Application-wide concerns can live in:

``` text
src/stores/globalStore.ts
```

Examples include:

-   Theme
-   Sidebar state
-   Notifications
-   Current user

### Module state

Feature-specific state can live inside the module that owns it:

``` text
src/modules/auth/stores/authStore.ts
```

This keeps feature state isolated instead of turning one global store
into a central dependency for the entire application.

------------------------------------------------------------------------

# Server State and Data Fetching

Aakar supports:

-   TanStack Query
-   SWR
-   Axios

The selected data-fetching approach can be used alongside the configured
API client.

This separates backend/server state from application-only client state
and provides a foundation for caching, synchronization, and asynchronous
data handling.

------------------------------------------------------------------------

# API Integration

Aakar provides a pre-configured Axios API client.

The generated API layer supports:

-   Centralized API configuration
-   JWT token injection
-   Request/response interceptors
-   Timeout handling
-   Automatic redirect to `/login` for HTTP 401 responses

Example:

``` typescript
import { apiClient } from '@/lib/api-client'

const { data } = await apiClient.get('/api/users')

await apiClient.post('/api/auth/login', {
  email,
  password,
})
```

The API base URL is configured through the application's environment
configuration.

Aakar is not tied to a particular backend technology. The generated
client communicates with HTTP APIs and can be used with the backend
stack chosen for the application.

------------------------------------------------------------------------

# Forms and Validation

Aakar uses:

-   React Hook Form
-   Zod
-   `@hookform/resolvers`

This provides a type-safe foundation for application forms and schema
validation.

Example:

``` typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const form = useForm({
  resolver: zodResolver(schema),
})
```

------------------------------------------------------------------------

# Feature Gates

The modular architecture includes a feature-gating foundation.

Feature definitions can be maintained through the generated feature
configuration:

``` text
src/config/features.config.ts
```

Modules and features can use these definitions to control whether
functionality is enabled.

This provides a foundation for applications that need controlled feature
availability without scattering feature checks throughout the codebase.

------------------------------------------------------------------------

# Component Development with Storybook

Aakar can configure Storybook as part of the application foundation.

Components can keep their stories next to the component:

``` text
components/
└── shared/
    └── Header/
        ├── index.tsx
        └── Header.stories.tsx
```

Run Storybook with:

``` bash
pnpm storybook
```

Storybook provides an isolated environment for developing, documenting,
and reviewing UI components.

------------------------------------------------------------------------

# Testing

Aakar V1 supports multiple levels of automated testing.

## Unit and Component Testing

Vitest and React Testing Library provide the foundation for testing
application logic and React components.

``` bash
pnpm test
```

## End-to-End Testing

Playwright provides end-to-end testing for complete application
workflows.

``` bash
pnpm exec playwright test
```

Testing infrastructure is established as part of the application
foundation instead of requiring a separate setup later.

------------------------------------------------------------------------

# Type Safety

Aakar uses TypeScript as a first-class part of the application.

The generated projects are configured for strict type checking and are
structured so types can live at the appropriate level:

``` text
src/types/
```

for shared application types, or:

``` text
src/modules/<feature>/types/
```

for feature-specific contracts.

------------------------------------------------------------------------

# Code Quality

Aakar integrates:

-   ESLint
-   Prettier
-   Husky
-   lint-staged

The goal is to catch common issues before code reaches the shared
repository.

The Git workflow can run quality checks on staged files before a commit
is created.

------------------------------------------------------------------------

# Environment Configuration

Aakar creates environment templates for application configuration.

Typical configuration includes the backend API URL:

### Next.js

``` env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Vite

``` env
VITE_API_URL=http://localhost:5000
```

Environment-specific values should be supplied by the application
environment rather than hard-coded into source code.

------------------------------------------------------------------------

# Project Generation

Aakar guides developers through the major foundation decisions during
project creation.

The current V1 setup includes choices for:

1.  Application framework
2.  Project description
3.  Architecture
4.  Modules
5.  Styling
6.  State management
7.  Data fetching
8.  Storybook
9.  Testing
10. Git hooks
11. Backend API URL
12. Git initialization
13. Dependency installation

The generator then creates the selected application foundation.

### Generation flow

``` text
Project requirements
        ↓
Framework selection
        ↓
Architecture selection
        ↓
Engineering capabilities
        ↓
Project generation
        ↓
Dependency installation
        ↓
Configuration
        ↓
Production-ready foundation
```

------------------------------------------------------------------------

# CLI

The current V1 CLI provides:

### Create an application

``` bash
aakar <app-name>
```

Example:

``` bash
aakar tax-management-app
```

### Use default options

``` bash
aakar <app-name> --defaults
```

### Skip dependency installation

``` bash
aakar <app-name> --no-install
```

### Skip Git initialization

``` bash
aakar <app-name> --no-git
```

### Show help

``` bash
aakar --help
```

### Show version

``` bash
aakar --version
```

------------------------------------------------------------------------

# Generated Application

A generated project includes the selected foundation and configuration.

Typical generated files include:

``` text
my-app/
├── app/ or src/
├── public/
├── src/
│   ├── components/
│   ├── modules/
│   ├── stores/
│   ├── hooks/
│   ├── lib/
│   ├── config/
│   └── types/
│
├── .storybook/
├── .husky/
├── .github/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── eslint.config.mjs
├── .prettierrc
└── README.md
```

The exact structure depends on the selected framework and architecture.

------------------------------------------------------------------------

# Development Commands

After generating an application, use the commands provided by the
selected application foundation.

``` bash
# Start development
pnpm dev

# Run Storybook
pnpm storybook

# Run tests
pnpm test

# Build the application
pnpm build

# Run linting
pnpm lint

# Format code
pnpm format
```

------------------------------------------------------------------------

# Technology Foundation

Aakar V1 is built around the following technologies.

| Area | Technology |
|------|-----------|
| Application | Next.js / Vite |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Client State | Zustand + Immer |
| Server State | TanStack Query / SWR |
| HTTP | Axios |
| Forms | React Hook Form |
| Validation | Zod |
| Component Development | Storybook |
| Unit / Component Testing | Vitest + React Testing Library |
| E2E Testing | Playwright |
| Code Quality | ESLint + Prettier |
| Git Quality | Husky + lint-staged |
| Package Manager | pnpm |

Framework versions are resolved by the generator and the generated
project's dependency configuration. Always use the generated project's
`package.json` as the source of truth for installed versions.

------------------------------------------------------------------------

# Requirements

Aakar V1 requires:

-   Node.js `>=18.17.0`
-   pnpm `>=9.0.0`

The generated application may have additional requirements based on the
selected framework and tooling.

------------------------------------------------------------------------

# When Aakar Makes Sense

Aakar is designed for applications that are expected to become real,
maintainable products.

It is especially useful when:

-   Starting a new production application
-   Building enterprise or business applications
-   Working with multiple frontend developers
-   Maintaining multiple applications with common engineering standards
-   Wanting testing and quality practices from the beginning
-   Wanting a consistent feature-oriented architecture
-   Wanting to reduce repetitive project setup

For a throwaway experiment, a minimal React starter may be enough.

For an application expected to evolve, Aakar provides a stronger
starting point.

------------------------------------------------------------------------

# Aakar's Principles

### Production readiness from the foundation

Engineering practices should exist before the application becomes
difficult to maintain.

### Architecture should scale with the product

The structure should remain understandable as features, developers, and
codebases grow.

### Features should own their code

Business-specific components, state, hooks, types, and services should
stay close to the feature they belong to.

### Quality should be part of development

Testing, type checking, linting, formatting, and Git quality checks
should be part of normal development.

### Developers should build the product

The foundation should remove repetitive setup without preventing
developers from owning the application.

------------------------------------------------------------------------

# V1 Scope

Aakar V1 focuses on establishing the production-ready frontend
foundation.

It currently provides:

-   Application generation
-   Next.js and Vite support
-   Flat and modular architectures
-   Configurable state management
-   Data-fetching options
-   API client foundation
-   Form and validation foundation
-   Storybook
-   Unit/component testing
-   End-to-end testing
-   TypeScript
-   Code quality tooling
-   Git hooks
-   Environment configuration
-   Feature-gating foundation

Future versions may expand Aakar beyond project creation into a broader
application development platform.

------------------------------------------------------------------------

# Contributing

Contributions and feedback are welcome.

If you want to work on Aakar itself, see:

-   `DEVELOPMENT.md`
-   `CONTRIBUTING.md`

For implementation details, see:

-   `IMPLEMENTATION_SUMMARY.md`

------------------------------------------------------------------------

# License

MIT License

Copyright © Ajith Kumar

------------------------------------------------------------------------

## Aakar

**आकार --- form, shape, foundation.**

**Build from a foundation designed for production.**
