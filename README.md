# Shilla Bakery

A responsive bakery web application built with **React, Vite, TypeScript, Tailwind CSS v4, and React Router**.

This project is a modern front-end redesign inspired by the Shilla Bakery brand and website experience. It focuses on a clean responsive UI, structured routing, reusable components, and a data-driven menu system.

---

## Overview

The goal of this project is to build a bakery website that works naturally across:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

The application includes:

- Responsive navigation
- Mobile hamburger menu
- Shared page layout
- Home page sections
- Menu page
- Menu filtering
- Menu search
- Price sorting
- Menu detail pages
- Recommended badges
- Best Seller badges
- Responsive menu cards
- Product images
- About page
- Contact / locations page
- Footer

The project currently uses local JSON data for menu items. No external API is required.

---

## Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **React Router**
- **Node.js 24**
- **npm**
- **Git / GitHub**

### Tailwind CSS v4

This project uses the Tailwind CSS v4 Vite integration.

`vite.config.ts` uses:

```ts
import tailwindcss from "@tailwindcss/vite";
```

The main stylesheet uses:

```css
@import "tailwindcss";
```

This project does **not** use the older Tailwind v3 setup:

```bash
npx tailwindcss init -p
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dongyunkim96/Shilla-Bakery.git
```

### 2. Enter the project

```bash
cd Shilla-Bakery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local development URL, usually:

```text
http://localhost:5173
```

---

## Node Version

The project was configured using **Node.js 24**.

Check your version:

```bash
node -v
npm -v
```

If you use `nvm`:

```bash
nvm use 24
```

You can verify the active Node version with:

```bash
nvm current
```

---

## Project Structure

```text
shilla-bakery/
├── public/
│   └── menu/
│       ├── bread/
│       │   ├── bread-01.jpeg
│       │   ├── bread-02.jpeg
│       │   └── ...
│       ├── dessert/
│       │   ├── dessert-01.jpeg
│       │   ├── dessert-02.jpeg
│       │   └── ...
│       └── drink/
│           ├── drink-01.jpeg
│           ├── drink-02.jpeg
│           └── ...
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── SignatureSection.tsx
│   │   │   ├── StorySection.tsx
│   │   │   └── VisitSection.tsx
│   │   │
│   │   └── menu/
│   │       ├── MenuCard.tsx
│   │       ├── MenuFilterBar.tsx
│   │       └── MenuSection.tsx
│   │
│   ├── data/
│   │   └── menuData.json
│   │
│   ├── layout/
│   │   └── MainLayout.tsx
│   │
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── MenuDetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Application Architecture

## `App.tsx`

`App.tsx` is responsible for application routing.

Example structure:

```tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MenuDetailPage from "./pages/MenuDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:slug" element={<MenuDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## Why `MainLayout` and `HomePage` Are Separate

The layout and page components have different responsibilities.

### `MainLayout`

Contains UI shared by multiple pages:

- Navbar
- Main content area
- Footer

Example:

```tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
```

`Outlet` tells React Router where the current child page should appear.

### `HomePage`

Contains only content specific to the homepage.

```tsx
import HeroSection from "../components/home/HeroSection";
import SignatureSection from "../components/home/SignatureSection";
import StorySection from "../components/home/StorySection";
import VisitSection from "../components/home/VisitSection";

function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <SignatureSection />
      <StorySection />
      <VisitSection />
    </div>
  );
}

export default HomePage;
```

This architecture prevents large components from becoming difficult to maintain.

---

# Responsive Design

The application follows a **mobile-first** approach.

Tailwind breakpoint examples:

```tsx
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
```

This means:

- Mobile: `text-3xl`
- Small screens: `text-4xl`
- Medium screens: `text-5xl`
- Large screens: `text-6xl`

Another example:

```tsx
className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
```

The menu displays:

- 1 card per row on mobile
- 2 cards on small/medium screens
- 3 cards on large screens

The project avoids unnecessary fixed widths such as:

```tsx
w-[1200px]
```

Instead it uses responsive containers:

```tsx
w-full max-w-7xl
```

---

# Navbar

The Navbar supports both desktop and mobile layouts.

On desktop, navigation links are displayed horizontally.

On mobile, a hamburger button controls the menu using React state:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

The menu is toggled with:

```tsx
onClick={() => setIsOpen(!isOpen)}
```

Desktop navigation can use:

```tsx
hidden md:flex
```

Mobile navigation can use:

```tsx
md:hidden
```

---

# Menu Data

Menu products are stored in:

```text
src/data/menuData.json
```

The application currently contains approximately:

- 20 breads
- 20 desserts
- 20 drinks

Total:

```text
~60 menu items
```

A menu item looks like this:

```json
{
  "id": 1,
  "slug": "soft-cream-bread",
  "name": "Soft Cream Bread",
  "category": "bread",
  "description": "A soft and fluffy bread filled with light, sweet cream.",
  "details": "This signature-style bread combines a pillowy texture with smooth, lightly sweetened cream.",
  "price": 4.5,
  "image": "/menu/bread/bread-01.jpeg",
  "recommended": true,
  "bestSeller": true
}
```

---

## Menu Item Fields

### `id`

Unique numeric identifier.

```json
"id": 1
```

Used as a React list key.

---

### `slug`

URL-friendly identifier.

```json
"slug": "soft-cream-bread"
```

Used to generate URLs such as:

```text
/menu/soft-cream-bread
```

---

### `name`

Product name.

```json
"name": "Soft Cream Bread"
```

---

### `category`

Current categories:

```text
bread
dessert
drink
```

Example:

```json
"category": "bread"
```

---

### `description`

Short description displayed on menu cards.

```json
"description": "A soft and fluffy bread filled with light, sweet cream."
```

---

### `details`

Longer description displayed on the menu detail page.

```json
"details": "This signature-style bread combines a pillowy texture with smooth, lightly sweetened cream."
```

---

### `price`

Numeric price.

```json
"price": 4.5
```

The UI formats it using:

```tsx
item.price.toFixed(2)
```

Result:

```text
$4.50
```

---

### `image`

Image path from the `public` directory.

```json
"image": "/menu/bread/bread-01.jpeg"
```

The actual image file is:

```text
public/menu/bread/bread-01.jpeg
```

Because files inside `public` are served from the site root, `public` is not included in the URL.

Correct:

```text
/menu/bread/bread-01.jpeg
```

Incorrect:

```text
/public/menu/bread/bread-01.jpeg
```

---

### `recommended`

Controls the Recommended badge.

```json
"recommended": true
```

---

### `bestSeller`

Controls the Best Seller badge.

```json
"bestSeller": true
```

A product can have both badges at the same time.

Example:

```json
"recommended": true,
"bestSeller": true
```

---

# Menu Card

Each menu item is rendered using `MenuCard.tsx`.

Example:

```tsx
<MenuCard key={item.id} item={item} />
```

The card displays:

- Product image
- Category
- Product name
- Description
- Price
- Recommended badge
- Best Seller badge
- View Details button

---

## Recommended and Best Seller Badges

The badges are rendered independently.

```tsx
{item.recommended && (
  <span>
    Recommended
  </span>
)}

{item.bestSeller && (
  <span>
    Best Seller
  </span>
)}
```

Because the conditions are independent, both badges can appear simultaneously.

---

# Menu Card Hover Effects

Menu cards use Tailwind's `group` utility.

Example:

```tsx
<article className="group ... hover:-translate-y-2 hover:shadow-2xl">
```

When a card is hovered:

- The card moves slightly upward
- The shadow becomes stronger
- The product image zooms in
- The product title changes color

Image hover:

```tsx
className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
```

Title hover:

```tsx
className="transition group-hover:text-amber-800"
```

This produces a more interactive product-card experience without additional JavaScript.

---

# Menu Filtering

The menu supports category filtering.

Available filters:

```text
All
Bread
Dessert
Drink
```

The active category is stored using React state:

```tsx
const [activeCategory, setActiveCategory] = useState("all");
```

Filtering example:

```tsx
if (activeCategory !== "all") {
  result = result.filter(
    (item) => item.category === activeCategory
  );
}
```

---

# Menu Search

Users can search menu items by text.

State:

```tsx
const [searchKeyword, setSearchKeyword] = useState("");
```

Filtering checks both the product name and description:

```tsx
const keyword = searchKeyword.toLowerCase();

result = result.filter((item) => {
  return (
    item.name.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
});
```

---

# Price Sorting

The menu can be sorted by:

- Default
- Price: Low to High
- Price: High to Low

Example:

```tsx
if (sortOption === "price-low") {
  result.sort((a, b) => a.price - b.price);
}

if (sortOption === "price-high") {
  result.sort((a, b) => b.price - a.price);
}
```

---

# `useMemo`

Filtered menu results are calculated with `useMemo`.

Example:

```tsx
const filteredItems = useMemo(() => {
  let result = [...menuItems];

  // filtering
  // searching
  // sorting

  return result;
}, [activeCategory, searchKeyword, sortOption]);
```

This keeps the filtering logic organized and recalculates results when relevant state changes.

---

# Menu Sections

Filtered items are separated by category:

```tsx
const breadItems = filteredItems.filter(
  (item) => item.category === "bread"
);

const dessertItems = filteredItems.filter(
  (item) => item.category === "dessert"
);

const drinkItems = filteredItems.filter(
  (item) => item.category === "drink"
);
```

Each category can then be passed into a reusable section component:

```tsx
<MenuSection title="Bread" items={breadItems} />
<MenuSection title="Dessert" items={dessertItems} />
<MenuSection title="Drinks" items={drinkItems} />
```

---

# Menu Detail Page

Each menu card links to a unique product URL:

```tsx
<Link to={`/menu/${item.slug}`}>
  View Details
</Link>
```

Example URL:

```text
/menu/garlic-cream-cheese-bread
```

The route is defined as:

```tsx
<Route
  path="/menu/:slug"
  element={<MenuDetailPage />}
/>
```

Inside `MenuDetailPage`, React Router provides the slug:

```tsx
const { slug } = useParams();
```

The correct product is found from the JSON data:

```tsx
const item = menuItems.find(
  (menu) => menu.slug === slug
);
```

If no matching product exists, the application displays a fallback message.

---

# Product Images

Images are stored inside:

```text
public/menu/
```

Example structure:

```text
public/menu/bread/bread-01.jpeg
public/menu/bread/bread-02.jpeg

public/menu/dessert/dessert-01.jpeg
public/menu/dessert/dessert-02.jpeg

public/menu/drink/drink-01.jpeg
public/menu/drink/drink-02.jpeg
```

These images can be committed to GitHub normally.

Example:

```bash
git add public/menu
git commit -m "Add menu product images"
git push
```

For production, optimized `.webp` images can reduce repository size and improve page load speed.

---

# Home Page Components

The homepage is separated into smaller reusable sections.

## HeroSection

The main introduction area.

Includes:

- Bakery introduction
- Call-to-action buttons
- Hero image area

---

## SignatureSection

Highlights important bakery categories and products.

---

## StorySection

Introduces the Shilla Bakery brand story.

---

## VisitSection

Provides navigation toward:

- Store locations
- Menu
- Ordering

---

# About Page

`AboutPage.tsx` provides brand information and history.

The current project content was written to reflect the Shilla Bakery brand and its long-standing bakery identity.

---

# Contact Page

`ContactPage.tsx` is designed to display location information.

It can include:

- Location name
- Address
- Phone number
- Business hours
- Catering information
- Directions links

---

# Styling

The main global CSS file is:

```text
src/index.css
```

Example:

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  background-color: #fffbeb;
  color: #292524;
}
```

Most UI styling is handled directly through Tailwind utility classes.

---

# Git Workflow

After making changes:

```bash
git status
```

Add changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe the change"
```

Upload to GitHub:

```bash
git push
```

Example:

```bash
git add .
git commit -m "Add responsive menu cards and menu data"
git push
```

---

# GitHub Authentication

GitHub no longer accepts account passwords for HTTPS Git operations.

This project can use GitHub CLI authentication:

```bash
gh auth login
```

Typical selections:

```text
GitHub.com
HTTPS
Login with a web browser
```

After authentication:

```bash
git push
```

works without entering the GitHub account password each time.

---

# Development Notes

During setup, several development environment issues were encountered and resolved.

## Node Version

An older Node version caused compatibility issues with Vite.

The project was switched to:

```text
Node.js 24
```

using `nvm`.

---

## Tailwind CSS Version

The project originally encountered confusion between Tailwind v3 and v4 setup instructions.

The final project uses Tailwind CSS v4 with:

```css
@import "tailwindcss";
```

and the Vite plugin:

```ts
@tailwindcss/vite
```

---

## TypeScript `erasableSyntaxOnly`

An editor warning related to:

```text
erasableSyntaxOnly
```

was caused by a TypeScript/editor version mismatch.

Updating the development environment resolved the issue.

---

## GitHub CLI on Intel Mac

Installing GitHub CLI through Homebrew initially failed because the installed macOS Command Line Tools were outdated.

The Command Line Tools were updated before reinstalling:

```bash
brew install gh
```

Afterward, GitHub authentication could be configured with:

```bash
gh auth login
```

---

# Future Improvements

Potential next steps include:

- Improved homepage visuals
- Real Shilla Bakery product photography
- Better mobile navigation animations
- Store maps
- Location-specific menus
- Online ordering links
- Accessibility improvements
- Loading states
- 404 page
- Image optimization
- SEO metadata
- Menu availability indicators
- Seasonal products
- Featured products section
- Improved menu detail pages

---

# Current Status

The project currently has:

- React + Vite setup
- TypeScript
- Tailwind CSS v4
- React Router
- Responsive UI
- Mobile navigation
- Shared layout
- Home page sections
- Menu JSON data
- Around 60 menu items
- Menu images
- Search
- Category filtering
- Price sorting
- Product detail routes
- Recommended badges
- Best Seller badges
- Responsive menu cards
- About page
- Contact page
- GitHub repository integration

---

## Repository

GitHub:

```text
https://github.com/dongyunkim96/Shilla-Bakery
```

---

## Author

**Dongyun Kim**

Front-End Developer

---

## Disclaimer

This project is a front-end development project inspired by Shilla Bakery's public-facing brand and website experience.

Product names, prices, descriptions, images, and menu availability used in this project may be sample or development content unless otherwise verified against current official store information.

For current products, prices, store hours, and ordering information, refer to the official Shilla Bakery website.
