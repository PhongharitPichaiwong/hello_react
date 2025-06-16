# 🚀 Modern CSS Guide

## Table of Contents
1. [What is Modern CSS?](#what-is-modern-css)
2. [CSS Nesting](#css-nesting)
3. [Custom Media Queries](#custom-media-queries)
4. [CSS Variables (Custom Properties)](#css-variables-custom-properties)
5. [Container Queries](#container-queries)
6. [CSS Grid & Subgrid](#css-grid--subgrid)
7. [Logical Properties](#logical-properties)
8. [CSS Functions](#css-functions)
9. [PostCSS Setup](#postcss-setup)
10. [Modern vs Traditional Comparison](#modern-vs-traditional-comparison)
11. [Practical Examples](#practical-examples)
12. [Browser Support & Polyfills](#browser-support--polyfills)

---

## What is Modern CSS?

**Modern CSS** refers to the latest CSS features and specifications that make writing styles more efficient, maintainable, and powerful. Many of these features require build tools like PostCSS to work in all browsers.

### Key Modern CSS Features:
- 🔗 **CSS Nesting** - Write nested selectors like Sass
- 📱 **Container Queries** - Responsive based on container size
- 🎯 **Custom Media Queries** - Reusable breakpoint definitions
- 🔧 **Advanced CSS Functions** - Mathematical and logical operations
- 📐 **Logical Properties** - Direction-agnostic styling
- 🌊 **Subgrid** - Advanced grid layout control

---

## CSS Nesting

### Basic Nesting Syntax
```css
/* Modern CSS Nesting */
.card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  
  /* Nested hover state */
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Nested child elements */
  & > .header {
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    
    & > .title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
    }
    
    & > .subtitle {
      color: #666;
      font-size: 0.875rem;
    }
  }
  
  & > .content {
    line-height: 1.6;
    
    & p {
      margin-bottom: 1rem;
    }
    
    & a {
      color: #3498db;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
```

### Understanding the `&` Symbol
```css
.button {
  /* & refers to .button */
  
  &:hover { }           /* .button:hover */
  &:focus { }           /* .button:focus */
  &.active { }          /* .button.active (both classes) */
  &[disabled] { }       /* .button[disabled] */
  
  /* Child selectors */
  & > .icon { }         /* .button > .icon (direct child) */
  & .text { }           /* .button .text (any descendant) */
  & + .sibling { }      /* .button + .sibling (next sibling) */
  
  /* Complex selectors */
  .dark & { }           /* .dark .button (parent context) */
  &:not(.disabled) { }  /* .button:not(.disabled) */
}
```

### Nesting Media Queries
```css
.responsive-component {
  padding: 1rem;
  font-size: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
    font-size: 1.125rem;
    
    & > .content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }
  }
  
  @media (min-width: 1024px) {
    padding: 3rem;
    font-size: 1.25rem;
  }
}
```

---

## Custom Media Queries

### Defining Custom Media
```css
/* Define reusable breakpoints */
@custom-media --mobile (max-width: 767px);
@custom-media --tablet (min-width: 768px) and (max-width: 1023px);
@custom-media --desktop (min-width: 1024px);
@custom-media --large-desktop (min-width: 1440px);

/* Feature-based queries */
@custom-media --touch (hover: none);
@custom-media --high-res (min-resolution: 2dppx);
@custom-media --dark-mode (prefers-color-scheme: dark);
@custom-media --reduced-motion (prefers-reduced-motion: reduce);
```

### Using Custom Media
```css
.navigation {
  @media (--mobile) {
    flex-direction: column;
    padding: 1rem;
  }
  
  @media (--tablet) {
    flex-direction: row;
    padding: 1.5rem;
  }
  
  @media (--desktop) {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.interactive-element {
  @media (--touch) {
    /* Touch-friendly sizing */
    min-height: 44px;
    min-width: 44px;
  }
  
  @media (--reduced-motion) {
    /* Respect user preferences */
    transition: none;
    animation: none;
  }
}
```

### Combining Custom Media
```css
@custom-media --mobile-landscape 
  (max-width: 1023px) and (orientation: landscape);

@custom-media --desktop-and-large 
  (min-width: 1024px);

.hero-section {
  @media (--mobile-landscape) {
    height: 60vh;
  }
  
  @media (--desktop-and-large) {
    height: 100vh;
    display: flex;
    align-items: center;
  }
}
```

---

## CSS Variables (Custom Properties)

### Advanced Variable Usage
```css
:root {
  /* Color system */
  --color-primary-hue: 210;
  --color-primary-sat: 100%;
  --color-primary-light: 50%;
  --color-primary: hsl(
    var(--color-primary-hue), 
    var(--color-primary-sat), 
    var(--color-primary-light)
  );
  
  /* Derived colors */
  --color-primary-light: hsl(
    var(--color-primary-hue), 
    var(--color-primary-sat), 
    calc(var(--color-primary-light) + 20%)
  );
  
  /* Spacing scale */
  --space-unit: 0.25rem;
  --space-xs: calc(var(--space-unit) * 1);   /* 4px */
  --space-sm: calc(var(--space-unit) * 2);   /* 8px */
  --space-md: calc(var(--space-unit) * 4);   /* 16px */
  --space-lg: calc(var(--space-unit) * 6);   /* 24px */
  --space-xl: calc(var(--space-unit) * 8);   /* 32px */
  
  /* Typography scale */
  --font-size-base: 1rem;
  --font-size-sm: calc(var(--font-size-base) * 0.875);
  --font-size-lg: calc(var(--font-size-base) * 1.125);
  --font-size-xl: calc(var(--font-size-base) * 1.25);
  --font-size-2xl: calc(var(--font-size-base) * 1.5);
}
```

### Dynamic Theming
```css
/* Light theme (default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --border-color: #e2e8f0;
}

/* Dark theme */
:root[data-theme="dark"] {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --text-primary: #f7fafc;
  --text-secondary: #e2e8f0;
  --border-color: #4a5568;
}

/* Components automatically adapt */
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

### Component-Scoped Variables
```css
.progress-bar {
  --progress-height: 8px;
  --progress-bg: #e2e8f0;
  --progress-fill: #3182ce;
  --progress-border-radius: 4px;
  
  width: 100%;
  height: var(--progress-height);
  background: var(--progress-bg);
  border-radius: var(--progress-border-radius);
  overflow: hidden;
  
  & > .fill {
    height: 100%;
    background: var(--progress-fill);
    transition: width 0.3s ease;
    width: var(--progress-value, 0%);
  }
}

/* Usage with inline styles */
/* <div class="progress-bar" style="--progress-value: 75%"> */
```

---

## Container Queries

### Basic Container Queries
```css
/* Define container */
.card-grid {
  container-type: inline-size;
  container-name: card-grid;
}

/* Query based on container size */
.card {
  padding: 1rem;
  
  @container card-grid (min-width: 300px) {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  @container card-grid (min-width: 500px) {
    padding: 2rem;
    
    & > .image {
      width: 150px;
      height: 150px;
    }
  }
}
```

### Named Container Queries
```css
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

.main-content {
  container-type: inline-size;
  container-name: main;
}

.widget {
  @container sidebar (max-width: 200px) {
    /* Compact layout for narrow sidebar */
    font-size: 0.875rem;
    
    & > .icon {
      display: none;
    }
  }
  
  @container main (min-width: 800px) {
    /* Expanded layout for wide main area */
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
}
```

---

## CSS Grid & Subgrid

### Advanced Grid Layouts
```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
  
  @media (--mobile) {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

### Subgrid (Future Feature)
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid; /* Inherits parent grid */
  grid-row: span 3;
  
  & > .image {
    grid-row: 1;
  }
  
  & > .content {
    grid-row: 2;
  }
  
  & > .actions {
    grid-row: 3;
  }
}
```

---

## Logical Properties

### Direction-Agnostic Styling
```css
/* Traditional properties */
.old-way {
  margin-left: 1rem;
  margin-right: 2rem;
  border-left: 2px solid blue;
  text-align: left;
}

/* Modern logical properties */
.new-way {
  margin-inline-start: 1rem;  /* left in LTR, right in RTL */
  margin-inline-end: 2rem;    /* right in LTR, left in RTL */
  border-inline-start: 2px solid blue;
  text-align: start;          /* left in LTR, right in RTL */
}
```

### Comprehensive Logical Properties
```css
.component {
  /* Block dimension (vertical) */
  margin-block-start: 1rem;   /* margin-top */
  margin-block-end: 1rem;     /* margin-bottom */
  padding-block: 2rem;        /* padding-top + padding-bottom */
  
  /* Inline dimension (horizontal) */
  margin-inline-start: 1rem;  /* margin-left (LTR) */
  margin-inline-end: 1rem;    /* margin-right (LTR) */
  padding-inline: 2rem;       /* padding-left + padding-right */
  
  /* Shorthand */
  margin-block: 1rem 2rem;    /* top bottom */
  margin-inline: 0.5rem 1rem; /* start end */
  
  /* Borders */
  border-block-start: 1px solid #ccc;
  border-inline-end: 2px solid blue;
  
  /* Positioning */
  inset-block-start: 0;       /* top */
  inset-inline-end: 0;        /* right (LTR) */
}
```

---

## CSS Functions

### Mathematical Functions
```css
.responsive-text {
  /* Clamped font size */
  font-size: clamp(1rem, 2.5vw, 2rem);
  
  /* Minimum and maximum values */
  width: min(100%, 800px);
  height: max(200px, 50vh);
  
  /* Complex calculations */
  padding: calc(1rem + 2vw);
  margin: calc(var(--space-md) * 2);
}

.grid-layout {
  display: grid;
  /* Responsive columns without media queries */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}
```

### Color Functions
```css
:root {
  --primary-hue: 210;
  --primary-saturation: 100%;
  --primary-lightness: 50%;
}

.color-variations {
  /* HSL manipulation */
  --color-primary: hsl(
    var(--primary-hue) 
    var(--primary-saturation) 
    var(--primary-lightness)
  );
  
  --color-primary-light: hsl(
    var(--primary-hue) 
    var(--primary-saturation) 
    calc(var(--primary-lightness) + 20%)
  );
  
  --color-primary-dark: hsl(
    var(--primary-hue) 
    var(--primary-saturation) 
    calc(var(--primary-lightness) - 20%)
  );
  
  /* Future: color-mix function */
  /* --color-mixed: color-mix(in srgb, var(--color-primary) 80%, white); */
}
```

---

## PostCSS Setup

### Installation
```bash
# Install PostCSS and plugins
npm install --save-dev \
  postcss \
  postcss-cli \
  postcss-preset-env \
  postcss-nesting \
  postcss-custom-media \
  postcss-custom-properties \
  autoprefixer
```

### PostCSS Configuration
```js
// postcss.config.js
module.exports = {
  plugins: [
    'postcss-preset-env', {
      stage: 1, // Use cutting-edge features
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'custom-properties': true,
        'logical-properties-and-values': true
      }
    },
    'postcss-nesting',
    'postcss-custom-media',
    'autoprefixer'
  ]
}
```

### Build Scripts
```json
{
  "scripts": {
    "css:build": "postcss src/styles.css -o dist/styles.css",
    "css:watch": "postcss src/styles.css -o dist/styles.css --watch",
    "css:dev": "postcss src/styles.css -o dist/styles.css --map"
  }
}
```

### Integration with Create React App
```js
// craco.config.js (if using CRACO)
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          stage: 1,
          features: {
            'nesting-rules': true,
            'custom-media-queries': true
          }
        })
      ]
    }
  }
}
```

---

## Modern vs Traditional Comparison

### Nesting Comparison
```css
/* Traditional CSS */
.card { background: white; }
.card:hover { transform: translateY(-2px); }
.card > .header { padding: 1rem; }
.card > .header > .title { font-size: 1.25rem; }
.card > .content { padding: 0 1rem 1rem; }
.card > .content > p { margin-bottom: 1rem; }

/* Modern CSS */
.card {
  background: white;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  & > .header {
    padding: 1rem;
    
    & > .title {
      font-size: 1.25rem;
    }
  }
  
  & > .content {
    padding: 0 1rem 1rem;
    
    & > p {
      margin-bottom: 1rem;
    }
  }
}
```

### Media Queries Comparison
```css
/* Traditional CSS */
@media (max-width: 767px) {
  .component { padding: 1rem; }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .component { padding: 1.5rem; }
}
@media (min-width: 1024px) {
  .component { padding: 2rem; }
}

/* Modern CSS */
@custom-media --mobile (max-width: 767px);
@custom-media --tablet (min-width: 768px) and (max-width: 1023px);
@custom-media --desktop (min-width: 1024px);

.component {
  @media (--mobile) { padding: 1rem; }
  @media (--tablet) { padding: 1.5rem; }
  @media (--desktop) { padding: 2rem; }
}
```

---

## Practical Examples

### Modern Card Component
```css
@custom-media --mobile (max-width: 767px);
@custom-media --tablet (min-width: 768px);

.card-component {
  --card-padding: 1.5rem;
  --card-radius: 12px;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --card-border: 1px solid #e2e8f0;
  
  container-type: inline-size;
  background: var(--bg-primary);
  border: var(--card-border);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  & > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-end: var(--space-md);
    padding-block-end: var(--space-sm);
    border-block-end: 1px solid var(--border-color);
    
    & > .title {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin: 0;
      color: var(--text-primary);
    }
    
    & > .badge {
      background: var(--color-primary);
      color: white;
      padding: var(--space-xs) var(--space-sm);
      border-radius: var(--space-sm);
      font-size: var(--font-size-sm);
      font-weight: 500;
    }
  }
  
  & > .content {
    color: var(--text-secondary);
    line-height: 1.6;
    
    & > p {
      margin-block-end: var(--space-md);
      
      &:last-child {
        margin-block-end: 0;
      }
    }
  }
  
  & > .actions {
    display: flex;
    gap: var(--space-sm);
    margin-block-start: var(--space-lg);
    
    @container (max-width: 300px) {
      flex-direction: column;
    }
    
    @container (min-width: 400px) {
      justify-content: flex-end;
    }
  }
  
  @media (--mobile) {
    --card-padding: 1rem;
    --card-radius: 8px;
  }
}
```

### Responsive Navigation
```css
@custom-media --mobile (max-width: 767px);
@custom-media --desktop (min-width: 768px);

.navigation {
  --nav-height: 60px;
  --nav-padding: var(--space-md);
  --nav-bg: var(--bg-primary);
  --nav-border: var(--border-color);
  
  background: var(--nav-bg);
  border-block-end: 1px solid var(--nav-border);
  height: var(--nav-height);
  padding-inline: var(--nav-padding);
  
  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1200px;
    margin-inline: auto;
  }
  
  & > .container > .logo {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-primary);
    text-decoration: none;
  }
  
  & > .container > .menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: var(--space-lg);
    
    @media (--mobile) {
      position: fixed;
      inset-block-start: var(--nav-height);
      inset-inline: 0;
      inset-block-end: 0;
      background: var(--nav-bg);
      flex-direction: column;
      padding: var(--space-lg);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      
      &.open {
        transform: translateX(0);
      }
    }
    
    & > .item {
      & > .link {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        padding: var(--space-sm) var(--space-md);
        border-radius: var(--space-sm);
        transition: background-color 0.2s ease;
        
        &:hover {
          background: var(--bg-secondary);
        }
        
        &.active {
          background: var(--color-primary);
          color: white;
        }
      }
    }
  }
  
  & > .container > .toggle {
    display: none;
    
    @media (--mobile) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      background: none;
      cursor: pointer;
    }
  }
}
```

---

## Browser Support & Polyfills

### Feature Support Status
```css
/* ✅ Good Support (2023+) */
.well-supported {
  /* CSS Variables */
  color: var(--primary-color);
  
  /* CSS Grid */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  /* Flexbox */
  display: flex;
  gap: 1rem;
  
  /* Logical Properties (mostly supported) */
  margin-inline: 1rem;
  padding-block: 2rem;
}

/* ⚠️ Limited Support - Needs PostCSS */
.needs-polyfill {
  /* CSS Nesting - PostCSS required */
  & > .child {
    color: blue;
  }
  
  /* Custom Media - PostCSS required */
  @media (--desktop) {
    padding: 2rem;
  }
}

/* 🚧 Experimental - Use with caution */
.experimental {
  /* Container Queries - Limited support */
  container-type: inline-size;
  
  @container (min-width: 300px) {
    font-size: 1.2rem;
  }
  
  /* Subgrid - Very limited support */
  display: grid;
  grid-template-rows: subgrid;
}
```

### Progressive Enhancement
```css
.progressive-component {
  /* Base styles for all browsers */
  padding: 1rem;
  background: #f0f0f0;
  
  /* Enhanced styles with feature queries */
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  @supports (container-type: inline-size) {
    container-type: inline-size;
    
    @container (min-width: 400px) {
      padding: 2rem;
    }
  }
  
  @supports (color: color-mix(in srgb, red, blue)) {
    background: color-mix(in srgb, #3498db 20%, white);
  }
}
```

---

## Best Practices

### 1. **Organize Modern CSS**
```css
/* 1. Custom properties first */
:root {
  --spacing-unit: 0.25rem;
  --color-primary: #3498db;
}

/* 2. Custom media queries */
@custom-media --mobile (max-width: 767px);
@custom-media --desktop (min-width: 768px);

/* 3. Base styles */
.component {
  padding: var(--spacing-unit);
  
  /* 4. Pseudo-classes and states */
  &:hover {
    transform: scale(1.05);
  }
  
  /* 5. Child elements */
  & > .child {
    margin: var(--spacing-unit);
  }
  
  /* 6. Media queries last */
  @media (--mobile) {
    padding: calc(var(--spacing-unit) * 2);
  }
}
```

### 2. **Performance Considerations**
```css
/* Use CSS containment for performance */
.component {
  contain: layout style paint;
}

/* Optimize custom properties */
:root {
  /* Group related properties */
  --color-primary-h: 210;
  --color-primary-s: 100%;
  --color-primary-l: 50%;
  --color-primary: hsl(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l));
}

/* Use logical properties for i18n */
.text-component {
  text-align: start; /* Better than left */
  margin-inline-end: 1rem; /* Better than margin-right */
}
```

---

## 🎯 Key Takeaways

1. **🔗 Modern CSS** reduces code duplication and improves maintainability
2. **🛠️ PostCSS** enables modern features in current browsers
3. **📱 Container Queries** are the future of responsive design
4. **🌍 Logical Properties** make internationalization easier
5. **🎨 CSS Variables** enable dynamic theming and design systems
6. **⚡ Performance** benefits from reduced CSS bundle sizes
7. **🔄 Progressive Enhancement** ensures compatibility across browsers

---

## 📚 Resources

- [PostCSS Preset Env](https://preset-env.cssdb.org/)
- [CSS Nesting Specification](https://www.w3.org/TR/css-nesting-1/)
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- [Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [CSS Tricks](https://css-tricks.com/) - Modern CSS techniques

---

*Modern CSS represents the future of styling on the web. Start adopting these features incrementally and enjoy more maintainable, powerful stylesheets!*
