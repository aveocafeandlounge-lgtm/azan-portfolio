# CSS Fix Guide - Tailwind CSS Configuration

## Problem

When using Tailwind CSS v4 with Vite, you may encounter this error:

```
[postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. 
The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with 
PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

## Root Cause

Tailwind CSS v4 has a different architecture and requires the separate `@tailwindcss/postcss` package for PostCSS integration. The old configuration files (`tailwind.config.js`, `postcss.config.js`) are not compatible with v4's new approach.

## Solution: Revert to Tailwind CSS v3

The most stable solution is to use Tailwind CSS v3, which is fully compatible with the existing Vite setup.

### Step 1: Update package.json

Move `tailwindcss` from dependencies to devDependencies and add required packages:

```json
{
  "dependencies": {
    // ... other dependencies
  },
  "devDependencies": {
    "autoprefixer": "^10.6.2",
    "postcss": "^8.5.32",
    "tailwindcss": "^3.4.17",
    // ... other devDependencies
  }
}
```

### Step 2: Install Dependencies

Run the following command:

```bash
npm install --legacy-peer-deps
```

The `--legacy-peer-deps` flag is needed to bypass TypeScript version conflicts.

### Step 3: Create/Restore tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101B32',
          light: '#1A2B4A',
        },
        gold: {
          DEFAULT: '#C6A45C',
          light: '#D4B870',
          dark: '#A88A45',
        },
        blue: {
          DEFAULT: '#5477A8',
          light: '#6B8FB8',
          dark: '#435E85',
        },
        grey: {
          soft: '#F4F6FA',
          medium: '#E2E8F0',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Step 4: Create/Restore postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Step 5: Fix CSS Import Order in src/index.css

**Important:** PostCSS requires `@import` statements to come before `@tailwind` directives.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    border-color: theme('colors.gray.200');
  }
  
  body {
    @apply bg-white text-gray-900 antialiased;
  }
  
  .dark body {
    @apply bg-navy text-gray-100;
  }
}
```

### Step 6: Verify the Build

Run the build command to ensure everything works:

```bash
npm run build
```

If successful, you should see output like:

```
✓ 2494 modules transformed.
dist/index.html                   2.13 kB │ gzip:   0.67 kB
dist/assets/index-BnojuQ6b.css   18.92 kB │ gzip:   4.14 kB
dist/assets/index-wMt2a9BF.js   462.0 kB │ gzip:  145.2 kB
✓ built in 5.19s
```

### Step 7: Start Dev Server

```bash
npm run dev
```

## Alternative: Using Tailwind CSS v4

If you prefer to use Tailwind CSS v4, follow these steps:

1. Install the PostCSS plugin:
   ```bash
   npm install -D @tailwindcss/postcss
   ```

2. Update `postcss.config.js`:
   ```javascript
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
       autoprefixer: {},
     },
   }
   ```

3. Update `src/index.css` to use v4 syntax:
   ```css
   @import "tailwindcss";
   
   @theme {
     --color-navy: #101B32;
     --color-navy-light: #1A2B4A;
     --color-gold: #C6A45C;
     --color-gold-light: #D4B870;
     --color-gold-dark: #A88A45;
     --color-blue: #5477A8;
     --color-blue-light: #6B8FB8;
     --color-blue-dark: #435E85;
     --color-grey-soft: #F4F6FA;
     --color-grey-medium: #E2E8F0;
     
     --font-display: 'Playfair Display', serif;
     --font-sans: 'Inter', sans-serif;
   }
   
   @layer base {
     body {
       @apply bg-white text-gray-900 antialiased;
     }
     
     .dark body {
       @apply bg-navy text-gray-100;
     }
   }
   ```

4. Delete `tailwind.config.js` (v4 uses CSS-based configuration)

**Note:** v4 is still in active development and may have compatibility issues with some tools. v3 is recommended for production use.

## Troubleshooting

### TypeScript Peer Dependency Warnings

You may see warnings about TypeScript version conflicts. These can be safely ignored if using `--legacy-peer-deps` flag.

### CSS Not Applying

1. Check that `src/index.css` is imported in `src/main.tsx`
2. Verify the CSS import order (imports before @tailwind directives)
3. Ensure `tailwind.config.js` content paths are correct
4. Restart the dev server after making changes

### Build Errors

If you encounter build errors:

1. Clear the cache: `rm -rf node_modules/.vite`
2. Reinstall dependencies: `npm install --legacy-peer-deps`
3. Check that all configuration files are in the project root

## Summary

For most projects, **Tailwind CSS v3** is the recommended choice due to:
- Better stability and compatibility
- Wider ecosystem support
- Familiar configuration approach
- Fewer breaking changes

The v4 approach is promising for future projects but may require additional setup and troubleshooting for existing codebases.
