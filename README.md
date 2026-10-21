# Shilla Bakery

A modern, responsive bakery website built with React, TypeScript, Vite, and Tailwind CSS.

Shilla Bakery is a production-style front-end project focused on responsive design, reusable component architecture, menu discovery, store information, accessibility, automated testing, and continuous integration.

---

## Live Demo

**Live Demo:** [View Shilla Bakery]((https://shilla-bakery.vercel.app/))

**Repository:** [GitHub - Shilla Bakery](https://github.com/dongyunkim96/Shilla-Bakery)

---

## Overview

Shilla Bakery is a responsive multi-page bakery website designed to provide customers with a modern way to:

- Browse breads, desserts, and drinks
- Search and filter menu items
- View individual product details
- Learn about the bakery
- Find store locations
- Access Google Maps directions
- Contact stores by phone or email
- Explore Instagram content and bakery updates

The application was built with a component-based React architecture and includes automated unit, component, integration, and end-to-end testing.

The project is optimized for both desktop and mobile environments.

---

## Features

### Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive layouts are implemented with Tailwind CSS and verified using automated Playwright browser tests.

---

### Intro Video Experience

A custom intro video is displayed when users first visit the website.

Features include:

- Cinematic intro overlay
- Enter / Skip controls
- Escape key support
- Automatic closing when the video finishes
- Session-based display using `sessionStorage`
- Prevents repeated playback during the same browser session
- Responsive behavior on mobile devices

---

### Menu System

The menu page organizes products into categories such as:

- Bread
- Desserts
- Coffee & Drinks

Each menu item includes:

- Product image
- Product name
- Description
- Detailed information
- Price
- Recommended badge
- Best Seller badge
- Dedicated detail page

Users can:

- Filter products by category
- Search menu items
- Sort items by price
- Open individual product detail pages
- Clear filters and return to the full menu

---

### Home Page

The home page is divided into reusable sections:

- Hero Section
- Signature Selections
- Brand Story
- Visit Section
- Instagram Section

Each section is implemented as a dedicated React component for better maintainability and reusability.

---

### Instagram Integration

The website contains an Instagram-focused promotional section featuring looping bakery videos.

Content highlights include:

- Fresh bakery items
- Cakes and desserts
- Seasonal products
- Coffee and café drinks

Visitors can directly access the official Shilla Bakery Instagram page.

---

### Locations & Contact

The contact page provides information for multiple Shilla Bakery locations.

Locations include:

- Annandale
- Tysons
- Chantilly
- Vienna
- Centreville / Shilla Patisserie
- Ellicott City

Location information can include:

- Address
- Phone number
- Google Maps directions

The website also supports:

- `tel:` phone links
- `mailto:` email links
- Google Maps links
- Catering information

---

### About Page

The About page presents additional brand and business information including:

- Shilla Bakery history
- Korean bakery identity
- Product philosophy
- Customer experience
- Store locations
- Catering information

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS v4

### Testing

- Vitest
- React Testing Library
- Jest DOM
- Playwright
- V8 Coverage

### Development Tools

- ESLint
- npm
- Git
- GitHub
- GitHub Actions

### Deployment

- Vercel

---

## Project Structure

```text
Shilla-Bakery/
│
├── public/
│   ├── assets/
│   ├── menu/
│   │   ├── bread/
│   │   ├── dessert/
│   │   └── drink/
│   └── video/
│
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── InstagramSection.tsx
│   │   │   ├── SignatureSection.tsx
│   │   │   ├── StorySection.tsx
│   │   │   └── VisitSection.tsx
│   │   │
│   │   ├── menu/
│   │   │   ├── MenuCard.tsx
│   │   │   ├── MenuFilterBar.tsx
│   │   │   └── MenuSection.tsx
│   │   │
│   │   ├── Footer.tsx
│   │   ├── IntroVideo.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── data/
│   │   └── menuData.json
│   │
│   ├── layout/
│   │   └── MainLayout.tsx
│   │
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── MenuDetailPage.tsx
│   │   └── MenuPage.tsx
│   │
│   ├── test/
│   │   ├── renderWithRouter.tsx
│   │   └── setup.ts
│   │
│   ├── types/
│   │   └── menu.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── tests/
│   ├── external-links.spec.ts
│   ├── home.spec.ts
│   ├── intro.spec.ts
│   ├── menu.spec.ts
│   ├── navigation.spec.ts
│   └── responsive.spec.ts
│
├── .github/
│   └── workflows/
│       └── test.yml
│
├── eslint.config.js
├── playwright.config.ts
├── vite.config.ts
├── vitest.config.ts
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js 24+
- npm
- Git

Check your installed versions:

```bash
node -v
npm -v
git --version
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/dongyunkim96/Shilla-Bakery.git
```

Navigate into the project:

```bash
cd Shilla-Bakery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will typically start the application at:

```text
http://localhost:5173
```

---

## Available Scripts

### Development Server

```bash
npm run dev
```

Starts the Vite development server.

---

### Production Build

```bash
npm run build
```

Runs the TypeScript compiler and creates an optimized production build.

Production files are generated in:

```text
dist/
```

---

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally.

---

### ESLint

```bash
npm run lint
```

Checks the project for linting errors and warnings.

---

### Unit & Component Tests

```bash
npm run test:run
```

Runs the Vitest test suite once.

---

### Test Coverage

```bash
npm run test:coverage
```

Generates a coverage report using V8.

---

### End-to-End Tests

```bash
npm run test:e2e
```

Runs the Playwright E2E test suite.

---

## Testing

The project includes automated testing at multiple levels.

### Unit & Component Testing

Vitest and React Testing Library are used for component and page-level testing.

Current test results:

```text
Test Files: 12 passed
Tests:      32 passed
```

Tested areas include:

- Navbar
- Intro video
- Menu cards
- Menu filtering
- Menu sections
- Menu detail pages
- Home page components
- About page
- Contact page
- Main layout

---

### Test Coverage

Run:

```bash
npm run test:coverage
```

Current coverage:

```text
Statements: 84%+
Branches:   69%+
Functions:  81%+
Lines:      84%+
```

Coverage is generated using the V8 provider.

---

## End-to-End Testing

Playwright is used to test complete user flows inside real browser environments.

Run:

```bash
npm run test:e2e
```

The E2E test suite verifies:

- Home page rendering
- Intro video behavior
- Intro session persistence
- Menu page rendering
- Menu category filtering
- Search input behavior
- Price sorting
- Menu detail navigation
- Desktop navigation
- Mobile navigation
- Mobile hamburger menu
- Instagram links
- Google Maps links
- Telephone links
- Email links
- Responsive layouts
- Horizontal overflow

Playwright tests are executed against desktop and mobile browser configurations.

---

## Testing Strategy

The project intentionally separates component tests from browser-level E2E tests.

### Vitest Tests

Vitest tests are colocated with application source files.

```text
src/**/*.test.tsx
```

Examples:

```text
Navbar.test.tsx
IntroVideo.test.tsx
MenuCard.test.tsx
MenuFilterBar.test.tsx
MenuSection.test.tsx
MenuPage.test.tsx
MenuDetailPage.test.tsx
ContactPage.test.tsx
AboutPage.test.tsx
```

---

### Playwright Tests

Browser-level E2E tests are stored separately.

```text
tests/*.spec.ts
```

Current Playwright suites:

```text
home.spec.ts
intro.spec.ts
menu.spec.ts
navigation.spec.ts
external-links.spec.ts
responsive.spec.ts
```

Keeping these suites separate prevents Playwright tests from being executed by Vitest.

---

## Continuous Integration

GitHub Actions is configured to automatically validate the project whenever code is pushed to the `main` branch or submitted through a pull request.

The CI workflow performs:

```text
Checkout Repository
        ↓
Setup Node.js
        ↓
Install Dependencies
        ↓
Run ESLint
        ↓
Run Vitest
        ↓
Build Application
        ↓
Install Playwright
        ↓
Run E2E Tests
```

The current GitHub Actions workflow successfully validates the automated test suite.

Current Vitest CI results:

```text
Test Files: 12 passed
Tests:      32 passed
```

---

## Routing

React Router is used for client-side navigation.

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/menu` | Full bakery menu |
| `/menu/:slug` | Individual menu item details |
| `/about` | Brand and bakery information |
| `/contact` | Store locations and contact information |

---

## Menu Data

Menu content is stored separately from UI components in:

```text
src/data/menuData.json
```

Each item follows a structured data model.

Example:

```json
{
  "id": 1,
  "slug": "example-item",
  "name": "Example Item",
  "category": "bread",
  "description": "Short product description.",
  "details": "Detailed product information.",
  "price": 5.99,
  "image": "/menu/bread/example.jpeg",
  "recommended": true,
  "bestSeller": false
}
```

Shared menu types are defined in:

```text
src/types/menu.ts
```

Example structure:

```ts
export type MenuCategory =
  | 'bread'
  | 'dessert'
  | 'drink';

export type MenuItem = {
  id: number;
  slug: string;
  name: string;
  category: MenuCategory;
  description: string;
  details: string;
  price: number;
  image: string;
  recommended: boolean;
  bestSeller: boolean;
};
```

---

## Responsive Design

Tailwind CSS is used throughout the application to implement:

- Responsive layouts
- Responsive grids
- Mobile navigation
- Flexible spacing
- Responsive typography
- Adaptive menu cards
- Responsive video layouts
- Mobile-friendly content sections

The application uses a warm bakery-inspired design system built around:

- Stone
- White
- Amber
- Warm brown tones

---

## Accessibility

Accessibility considerations include:

- Semantic HTML
- Accessible navigation
- Descriptive links
- `aria-label` attributes
- Keyboard interaction
- Escape key support
- Meaningful image alternative text
- Accessible phone links
- Accessible email links

Playwright tests also use accessibility-based selectors such as:

```ts
page.getByRole()
```

This helps verify that important interface elements expose meaningful roles and accessible names.

---

## Responsive Testing

The application includes automated checks for horizontal viewport overflow.

Example:

```ts
const hasOverflow = await page.evaluate(() => {
  return (
    document.documentElement.scrollWidth >
    document.documentElement.clientWidth
  );
});

expect(hasOverflow).toBe(false);
```

This helps prevent layout issues on smaller screens.

---

## Deployment

The project is designed for deployment through Vercel.

Production build command:

```bash
npm run build
```

Build output directory:

```text
dist
```

When Vercel is connected to the GitHub repository, deployments can be triggered automatically when changes are pushed.

---

## CI/CD Workflow

```text
Local Development
        ↓
Git Commit
        ↓
GitHub
        ↓
GitHub Actions
        ↓
ESLint
        ↓
Vitest
        ↓
Production Build
        ↓
Playwright E2E
        ↓
Vercel Deployment
```

---

## Engineering Decisions

### Reusable Component Architecture

Large pages are split into smaller reusable components.

For example, the home page is composed of:

```text
HeroSection
SignatureSection
StorySection
VisitSection
InstagramSection
```

This improves readability, maintainability, and future scalability.

---

### Shared TypeScript Types

Menu-related components share common TypeScript definitions instead of duplicating interfaces.

This provides:

- Consistent data structures
- Better editor support
- Easier refactoring
- Reduced duplication
- Compile-time type checking

---

### Data Separated From Presentation

Menu information is stored in structured JSON rather than being hardcoded directly into React components.

This makes it easier to:

- Add products
- Remove products
- Change prices
- Update descriptions
- Replace images
- Change recommendations
- Maintain categories

without changing UI logic.

---

### Separate Unit and E2E Testing

Vitest and Playwright serve different purposes.

Vitest is used for fast component-level validation.

```text
src/**/*.test.tsx
```

Playwright is used for complete user workflows.

```text
tests/*.spec.ts
```

This provides both fast development feedback and real browser validation.

---

### Cross-Platform Compatibility

The project is developed on macOS and tested through GitHub Actions on Linux.

Component paths and filenames use consistent casing to avoid module resolution issues between case-insensitive and case-sensitive file systems.

---

## Quality Assurance

Before production deployment, the project can be fully validated using:

```bash
npm run test:run
npm run lint
npm run build
npm run test:e2e
```

Additional coverage verification:

```bash
npm run test:coverage
```

Current project validation status:

```text
Vitest                  PASS
React Testing Library   PASS
Playwright E2E          PASS
ESLint                   PASS
TypeScript Build         PASS
Vite Production Build    PASS
GitHub Actions CI        PASS
```

---

## Future Improvements

Potential future improvements include:

- Backend API integration
- Online ordering
- Shopping cart functionality
- Customer accounts
- Authentication
- Online payments
- Real-time product availability
- Store-specific menus
- Content management system
- Image optimization
- Lazy loading
- SEO improvements
- Open Graph metadata
- Structured business data
- Analytics integration
- Accessibility auditing
- Performance monitoring
- Automated deployment previews

---

## Author

**Dongyun Kim**  
Front-End Developer

GitHub:  
https://github.com/dongyunkim96

Portfolio:  
https://dongyunkim.vercel.app

---

## Repository

https://github.com/dongyunkim96/Shilla-Bakery

---

## License

This project was created as a front-end development and portfolio project.

Shilla Bakery brand names, logos, product names, imagery, and other business-related materials remain the property of their respective owners.

The source code in this repository is intended for development, demonstration, and portfolio purposes unless otherwise specified.
