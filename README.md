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

# React Midterm Exam – Footer Component

This document describes the Footer component used in the project.

---

## Overview

The Footer component is a simple reusable UI element that displays informational links and copyright text.

---

## Features

* Clean and minimal layout
* Informational links section
* Copyright notice
* Styled using CSS Modules

---

## File Structure

```
components/
  Footer/
    Footer.jsx
    Footer.module.css
```

---

## Component Code

```js
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer_layout}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer}>
                    <div className={styles.footer_div}>
                        <p>Conditions of Use</p>
                        <p>Privacy Notice</p>
                        <p>Interest-Based Ads</p>
                    </div>
                    <div>
                        © 1991-2021, Amazon.com, inc. or its affiliates
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
```

---

## How It Works

* The component uses CSS Modules for scoped styling
* Content is statically defined inside the component
* Layout is structured with nested div elements for styling flexibility

---

## Usage

Import and include the Footer in your layout:

```js
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
```

---

## Notes

* The Footer is a presentational component (no state or logic)
* Easily extendable with additional links or sections

---

## License

This project is for educational purposes (Midterm Exam).

