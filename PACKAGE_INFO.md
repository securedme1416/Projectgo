# Package.json - Complete Configuration

This document provides complete information about the project dependencies and configuration.

## Complete Package.json

```json
{
  "name": "lendigo-loan-service",
  "version": "1.0.0",
  "private": true,
  "description": "Moni Africa - Professional Loan Service Platform",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.12",
    "@radix-ui/react-alert-dialog": "1.1.15",
    "@radix-ui/react-aspect-ratio": "1.1.8",
    "@radix-ui/react-avatar": "1.1.11",
    "@radix-ui/react-checkbox": "1.3.3",
    "@radix-ui/react-collapsible": "1.1.12",
    "@radix-ui/react-context-menu": "2.2.16",
    "@radix-ui/react-dialog": "1.1.15",
    "@radix-ui/react-dropdown-menu": "2.1.16",
    "@radix-ui/react-hover-card": "1.1.15",
    "@radix-ui/react-label": "2.1.8",
    "@radix-ui/react-menubar": "1.1.16",
    "@radix-ui/react-navigation-menu": "1.2.14",
    "@radix-ui/react-popover": "1.1.15",
    "@radix-ui/react-progress": "1.1.8",
    "@radix-ui/react-radio-group": "1.3.8",
    "@radix-ui/react-scroll-area": "1.2.10",
    "@radix-ui/react-select": "2.2.6",
    "@radix-ui/react-separator": "1.1.8",
    "@radix-ui/react-slider": "1.3.6",
    "@radix-ui/react-slot": "1.2.4",
    "@radix-ui/react-switch": "1.2.6",
    "@radix-ui/react-tabs": "1.1.13",
    "@radix-ui/react-toast": "1.2.15",
    "@radix-ui/react-toggle": "1.1.10",
    "@radix-ui/react-toggle-group": "1.1.11",
    "@radix-ui/react-tooltip": "1.2.8",
    "@vercel/analytics": "1.6.1",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "lucide-react": "^0.564.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-day-picker": "9.13.2",
    "react-dom": "19.2.4",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^3.3.1",
    "vaul": "^1.1.2",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.2.0",
    "@types/node": "^22",
    "@types/react": "19.2.14",
    "@types/react-dom": "19.2.3",
    "postcss": "^8.5",
    "tailwindcss": "^4.2.0",
    "tw-animate-css": "1.3.3",
    "typescript": "5.7.3"
  }
}
```

## Key Dependencies Explained

### Core Framework
- **next@16.1.6** - React framework for production
- **react@19.2.4** - UI library
- **react-dom@19.2.4** - React DOM rendering

### UI Components & Utilities
- **lucide-react** - Icon library (used for hamburger menu)
- **@radix-ui/** - Unstyled, accessible component library
- **class-variance-authority** - CSS-in-JS solution
- **clsx** - Utility for conditionally joining classNames
- **tailwind-merge** - Merge Tailwind CSS classes

### Form Handling
- **react-hook-form** - Flexible form library
- **@hookform/resolvers** - Validation resolvers
- **zod** - TypeScript-first schema validation

### Styling
- **tailwindcss@4.2.0** - Utility-first CSS framework
- **autoprefixer** - PostCSS plugin for vendor prefixes
- **postcss** - CSS transformation tool

### Additional Features
- **@vercel/analytics** - Analytics integration
- **next-themes** - Theme provider for dark mode
- **sonner** - Toast notifications
- **recharts** - Charts and graphs
- **react-resizable-panels** - Resizable panel layouts
- **embla-carousel-react** - Carousel component
- **date-fns** - Date manipulation library
- **input-otp** - OTP input component
- **vaul** - Drawer component library
- **cmdk** - Command palette component
- **react-day-picker** - Date picker

### Development Tools
- **typescript@5.7.3** - Type checking
- **@types/node** - Node.js type definitions
- **@types/react** - React type definitions
- **@types/react-dom** - React DOM type definitions
- **tw-animate-css** - Tailwind animation utilities
- **@tailwindcss/postcss** - PostCSS support

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

This will install all the packages listed above. The installation will take a few minutes.

### Step 2: Verify Installation
Check that dependencies are installed:
```bash
npm list
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Scripts Available

### Development
```bash
npm run dev
```
Starts the Next.js development server with hot reload.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `.next` directory.

### Start Production Server
```bash
npm run start
```
Runs the production server (requires `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality.

## Version Information

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.1.6 | Framework |
| React | 19.2.4 | UI Library |
| React DOM | 19.2.4 | DOM Rendering |
| TypeScript | 5.7.3 | Type Safety |
| Tailwind CSS | 4.2.0 | Styling |
| Lucide React | 0.564.0 | Icons |

## Why These Dependencies?

### Essential for the Project:
- **Next.js 16** - Modern React framework with server-side rendering
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety for all code
- **Tailwind CSS 4** - Utility-first CSS for styling
- **Lucide React** - Beautiful icons for UI

### Optional but Included:
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript schema validation
- **Sonner** - Toast notifications
- **Next Themes** - Dark mode support ready
- **Recharts** - Charts and graphs ready

## Minimal Installation

If you want a lighter installation with just the essentials:

```json
{
  "name": "moni-africa-loan-service",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "lucide-react": "^0.564.0"
  },
  "devDependencies": {
    "typescript": "5.7.3",
    "tailwindcss": "^4.2.0",
    "@types/react": "19.2.14",
    "@types/react-dom": "19.2.3",
    "@types/node": "^22"
  }
}
```

However, the full package.json is recommended for future scalability.

## Updating Dependencies

To update all dependencies:
```bash
npm update
```

To update a specific package:
```bash
npm install package-name@latest
```

## Troubleshooting

### Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
npm run build
```
Check the error message for specific issues.

## Node Version Requirements

- **Minimum**: Node.js 18.x
- **Recommended**: Node.js 20.x or later
- **LTS**: Node.js 22.x

Check your Node version:
```bash
node --version
```

## NPM vs PNPM

Both work equally well:

```bash
# Using npm (default)
npm install
npm run dev

# Using pnpm (faster)
pnpm install
pnpm dev

# Using yarn
yarn install
yarn dev
```

## Production Deployment

When deploying to production (Vercel, etc.):

1. Dependencies are installed automatically
2. Build command runs: `npm run build`
3. Start command runs: `npm run start`

No additional configuration needed!

## License

All dependencies are under their respective licenses. This project itself is:
©2024 Drance Nigeria Limited - All Rights Reserved

---

**Questions?** Check the README.md or SETUP.md for more information.
