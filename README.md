# React Midterm Exam – Navbar Component

This project includes a reusable Navbar component built with Next.js (App Router). It provides simple navigation with active route highlighting.

---

## Features

* Client-side navigation using `next/link`
* Active route detection with `usePathname`
* Dynamic rendering of navigation items
* Separate Cart section
* Clean and modular structure

---

## File Structure

```
components/
  Navbar/
    Navbar.jsx
    Navbar.module.css
```

---

## Component Overview

The `Navbar` component:

* Uses `usePathname()` to detect the current route
* Maps through predefined navigation arrays (`NAV`, `CART`)
* Applies an active class when the route matches

---

## Navigation Data

Navigation links are defined as arrays:

```js
const NAV = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Products", url: "/products" },
  { id: 3, title: "Profile", url: "/profile" },
];

const CART = [
  { id: 4, title: "Cart", url: "/cart" },
];
```

This makes the component scalable and easy to maintain.

---

## How It Works

* `usePathname()` returns the current URL path
* Each navigation item is compared against it
* If matched, an `active` class is applied

```js
const pathname = usePathname();

<div className={pathname === item.url ? styles.active : null}>
```

---

## Styling

Styling is handled using CSS Modules:

* `Navbar.module.css`
* Scoped styles prevent class conflicts

---

## Usage

Import and use the Navbar in your layout or pages:

```js
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
```

---

## Requirements

* Next.js 13+ (App Router)
* React

---

## Notes

* The component is marked with `"use client"` because it relies on hooks
* Active link styling depends on exact pathname match

---

## License

This project is for educational purposes (Midterm Exam).

