# Paradise Nursery

A shopping cart web application for **Paradise Nursery**, an online houseplant
shop. Built with React, Redux Toolkit, and React Router as a final project
covering component design, state management, and dynamic UI updates.

## Project Name

**Paradise Nursery** — Shopping Cart Application

## Features

- Landing page with company branding and a "Get Started" call to action
- Product listing page with plants grouped into categories (air-purifying,
  succulents & cacti, and flowering plants), each with a thumbnail, name,
  and price
- Add to Cart buttons that add the product, disable themselves once added,
  and update a live cart count in the navbar
- Shopping cart page showing each item's thumbnail, name, unit price,
  quantity controls, line subtotal, and a running cart total
- Increment / decrement quantity and delete-item controls
- Checkout button ("Coming Soon") and a Continue Shopping link back to the
  product listing
- About Us page with company details
- Global navbar with links to Home, Plants, and Cart, present on every page

## Tech Stack

- React 18 (Vite)
- Redux Toolkit + React Redux for cart state (`CartSlice.jsx`)
- React Router for navigation between pages

## Project Structure

```
src/
├── App.jsx          # Landing page + route definitions
├── App.css           # Global styles, incl. landing page background image
├── AboutUs.jsx        # About Us page
├── ProductList.jsx    # Product listing page grouped by category
├── CartItem.jsx        # Shopping cart page
├── CartSlice.jsx       # Redux slice for cart state
├── Navbar.jsx           # Shared navigation bar with cart icon/count
├── plantData.js          # Plant catalog data
├── store.js               # Redux store configuration
├── main.jsx                # App entry point
└── index.css                 # Base reset
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local dev server URL printed in the terminal.

## Build

```bash
npm run build
npm run preview
```
