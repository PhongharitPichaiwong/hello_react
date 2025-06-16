## What is CSS?

.root {} App Global

.wrapper {} Page

.container {} Component

**CSS (Cascading Style Sheets)** controls the appearance and layout of HTML elements. It separates content (HTML) from presentation (styling).

```css
/* This is a CSS comment */
selector {
  property: value;
}
```

---

## CSS Syntax

### Basic Structure
```css
/* Selector + Declaration Block */
h1 {
  color: blue;           /* Property: value; */
  font-size: 24px;       /* Each declaration ends with ; */
  margin: 10px;
}
```

```
h10, h11 {
  font-family: Arial;
  font-family: sans-serif;
}
```

### Multiple Selectors
```css
/* Apply same styles to multiple elements */
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #333;
}
```

### Grouping Declarations
```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

---

## Selectors

### Element Selectors
```css
/* Selects all <p> elements */
p {
  color: gray;
}

/* Selects all <button> elements */
button {
  background: blue;
}
```

### Class Selectors
```css
/* Selects elements with class="container" */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Multiple classes */
.primary {
  background: green;
}

.button.primary {
  background: blue;
}

.button.secondary {
  background: gray;
}
```

### ID Selectors
```css
/* Selects element with id="header" */
#header {
  background: navy;
  height: 80px;
}
```

### Descendant Selectors
```css
/* Selects <p> inside .container */
.container p {
  font-size: 16px;
}

/* Direct child selector */
.nav > li {
  display: inline-block;
}
```

### Pseudo Selectors
```css
/* Mouse hover */
.button:hover {
  background: darkblue;
}

/* When clicked/focused */
.button:active {
  transform: scale(0.98);
}

/* Form input focus */
input:focus {
  border-color: blue;
  outline: none;
}

/* First child */
.list li:first-child {
  font-weight: bold;
}
```

---

## Properties & Values

### Colors
```css
.element {
  /* Named colors */
  color: red;
  
  /* Hex colors */
  background-color: #ff6b6b;
  
  /* RGB */
  border-color: rgb(255, 107, 107);
  
  /* RGBA (with transparency) */
  box-shadow: rgba(0, 0, 0, 0.2);
}
```

### Typography
```css
.text {
  font-family: 'Arial', sans-serif;
  font-size: 16px;           /* or 1rem, 1.2em */
  font-weight: bold;         /* or 400, 700 */
  line-height: 1.5;          /* spacing between lines */
  text-align: center;        /* left, right, justify */
  text-decoration: underline; /* none, line-through */
}
```

### Spacing
```css
.box {
  /* Margin (outside spacing) */
  margin: 10px;              /* all sides */
  margin: 10px 20px;         /* top/bottom left/right */
  margin: 10px 15px 20px 25px; /* top right bottom left */
  
  /* Padding (inside spacing) */
  padding: 20px;
  padding-top: 10px;
  
  /* Border */
  border: 2px solid blue;
  border-radius: 10px;       /* rounded corners */
}
```

### Dimensions
```css
.container {
  width: 100%;               /* percentage */
  max-width: 800px;          /* maximum width */
  height: 300px;             /* fixed height */
  min-height: 100vh;         /* minimum viewport height */
}
```

---

## CSS Variables

### Defining Variables
```css
/* Global variables in :root */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --border-radius: 8px;
  --font-family: 'Inter', sans-serif;
}
```

### Using Variables
```css
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  font-family: var(--font-family);
}

/* With fallback values */
.text {
  color: var(--text-color, #333);  /* Uses #333 if --text-color not defined */
}
```

### Dynamic Variables in Components
```css
.theme-container {
  --bg-color: white;
  --text-color: black;
}

.theme-container.dark {
  --bg-color: #2c3e50;
  --text-color: #ecf0f1;
}

.content {
  background: var(--bg-color);
  color: var(--text-color);
}
```

---

## Layout & Positioning

### Display Types
```css
.block {
  display: block;           /* Full width, new line */
}

.inline {
  display: inline;          /* Only content width, same line */
}

.inline-block {
  display: inline-block;    /* Content width, same line, accepts width/height */
}

.none {
  display: none;            /* Hidden */
}
```

### Flexbox
```css
.flex-container {
  display: flex;
  flex-direction: row;      /* row, column */
  justify-content: center;  /* flex-start, flex-end, space-between */
  align-items: center;      /* flex-start, flex-end, stretch */
  gap: 1rem;               /* spacing between items */
}

.flex-item {
  flex: 1;                 /* grow to fill space */
  flex: 0 0 200px;         /* don't grow, don't shrink, 200px width */
}
```

### Grid
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-columns: 200px 1fr 100px; /* fixed, flexible, fixed */
  grid-gap: 20px;                         /* spacing */
}

.grid-item {
  grid-column: span 2;     /* spans 2 columns */
}
```

### Positioning
```css
.relative {
  position: relative;      /* relative to normal position */
  top: 10px;              /* move down 10px */
  left: 20px;             /* move right 20px */
}

.absolute {
  position: absolute;      /* relative to nearest positioned parent */
  top: 0;
  right: 0;
}

.fixed {
  position: fixed;         /* relative to viewport */
  bottom: 20px;
  right: 20px;
}

.sticky {
  position: sticky;        /* sticks when scrolling */
  top: 0;
}
```

---

## Responsive Design

### Media Queries
```css
/* Mobile first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
    padding: 3rem;
  }
}

/* Custom media queries */
@media (max-width: 600px) {
  .hide-mobile {
    display: none;
  }
}
```

### Responsive Units
```css
.responsive {
  /* Viewport units */
  width: 100vw;            /* 100% of viewport width */
  height: 100vh;           /* 100% of viewport height */
  
  /* Relative units */
  font-size: 1rem;         /* relative to root font-size */
  margin: 2em;             /* relative to element's font-size */
  
  /* Percentage */
  width: 50%;              /* 50% of parent width */
}
```

---

## CSS Modules vs Global CSS

### Global CSS
```css
/* styles.css - affects entire app */
.button {
  background: blue;
}

.container {
  max-width: 1200px;
}
```

```jsx
// Component.jsx
import './styles.css';

function Component() {
  return <button className="button">Click me</button>;
}
```

### CSS Modules
```css
/* Component.module.css - scoped to component */
.button {
  background: blue;        /* becomes Component_button__abc123 */
}

.container {
  max-width: 1200px;       /* becomes Component_container__def456 */
}
```

```jsx
// Component.jsx
import styles from './Component.module.css';

function Component() {
  return <button className={styles.button}>Click me</button>;
}
```

### Combining Classes in CSS Modules
```jsx
// Multiple classes
<div className={`${styles.container} ${styles.dark}`}>

// Conditional classes
<button className={`${styles.button} ${isActive ? styles.active : ''}`}>

// Using libraries like clsx
import clsx from 'clsx';
<div className={clsx(styles.container, {
  [styles.active]: isActive,
  [styles.disabled]: isDisabled
})}>
```

---

## Common Patterns

### Button Styles
```css
.button {
  /* Reset default styles */
  border: none;
  outline: none;
  cursor: pointer;
  
  /* Basic styling */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  
  /* Smooth transitions */
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
}

/* Variants */
.button.primary {
  background: #3498db;
  color: white;
}

.button.secondary {
  background: transparent;
  color: #3498db;
  border: 2px solid #3498db;
}
```

### Card Component
```css
.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cardHeader {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.cardTitle {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}
```

### Loading Animations
```css
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
```

---

## Practical Examples

### React Component with CSS Modules
```jsx
// Counter.jsx
import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter</h2>
      <div className={`${styles.display} ${count > 0 ? styles.positive : styles.negative}`}>
        {count}
      </div>
      <div className={styles.controls}>
        <button 
          className={`${styles.button} ${styles.decrement}`}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button 
          className={`${styles.button} ${styles.increment}`}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
```

```css
/* Counter.module.css */
.container {
  padding: var(--spacing-lg);
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
}

.display {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.display.positive {
  color: #27ae60;
  background: rgba(39, 174, 96, 0.1);
}

.display.negative {
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
}

.controls {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

.button {
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.increment {
  background: #27ae60;
  color: white;
}

.decrement {
  background: #e74c3c;
  color: white;
}
```

### Theme System
```css
/* Global theme variables */
:root {
  /* Light theme (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
  --accent: #3498db;
}

[data-theme="dark"] {
  /* Dark theme */
  --bg-primary: #2c3e50;
  --bg-secondary: #34495e;
  --text-primary: #ecf0f1;
  --text-secondary: #bdc3c7;
  --accent: #3498db;
}

/* Components automatically adapt */
.app {
  background: var(--bg-primary);
  color: var(--text-primary);
}

.card {
  background: var(--bg-secondary);
  color: var(--text-primary);
}
```

### Responsive Grid
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```
