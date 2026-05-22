# Somaiya Vidyavihar University Design System & UI Kit

A premium, modern SaaS-inspired design language tailored specifically for the academic and administrative ecosystem of Somaiya Vidyavihar University. Engineered with standard CSS custom properties for absolute maintainability, scalability, and ease of use in collaborative student development projects.

---

## 📂 Core Structure

Link these files directly in the `<head>` of your HTML projects:
```
├── design-tokens.css  <-- Core Brand Variable Tokens (Colors, Spaces, Radii, Shadows)
├── components.css     <-- Ready-to-use semantic CSS Classes (Buttons, Cards, Forms, Modals)
├── app.js             <-- Documentation Playground client-side interactions
└── index.html         <-- Live Interactive System Playground and SaaS Showcase
```

---

## ⚡ Integration Guide (Quick Start)

### 1. Import Styles
Simply copy the stylesheet files into your project directory and link them in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your University Project</title>
  
  <!-- Premium Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- UI Kit CSS -->
  <link rel="stylesheet" href="design-tokens.css">
  <link rel="stylesheet" href="components.css">
</head>
<body>
  <!-- Your content goes here -->
</body>
</html>
```

---

## 🎨 Token Variable Guidelines

Avoid hardcoding styles. Instead, reference the design token variables in your custom CSS files:

### Brand Color Tokens
* **Primary Crimson Red**: `var(--color-primary)` (Hover: `var(--color-primary-hover)`)
* **Heritage Academic Gold**: `var(--color-accent)`
* **Standard Background**: `var(--color-background)`
* **Standard Surface Card**: `var(--color-surface)`
* **High Contrast Text**: `var(--color-text-primary)`
* **Body / Description Text**: `var(--color-text-secondary)`

### Consistent Spacing Grid (4px Base)
Use these spacing variables to keep borders, gaps, margins, and padding fully uniform across the ecosystem:
* `--space-2xs`: `4px` (Very tight gaps)
* `--space-xs`: `8px` (Small labels)
* `--space-sm`: `12px` (Standard inner card gaps)
* `--space-md`: `16px` (Default text padding)
* `--space-lg`: `24px` (Card structural padding)
* `--space-xl`: `32px` (Outer page grids)

### Adaptive Elevations (Shadows)
* `box-shadow: var(--shadow-sm)` - Inputs, inline tags, status badges.
* `box-shadow: var(--shadow-md)` - Standard dashboard cards, widgets.
* `box-shadow: var(--shadow-lg)` - Floating headers, dropdown lists.
* `box-shadow: var(--shadow-xl)` - Action modals and system overlays.

---

## 🚀 Component Snippets (Copy & Paste)

### 1. Brand CTAs & Buttons
```html
<!-- Primary Somaiya Action -->
<button class="btn btn-primary">Apply Now</button>

<!-- Secondary Outline Action -->
<button class="btn btn-secondary">Cancel</button>

<!-- Accent Gold Action -->
<button class="btn btn-accent">Explore Campus</button>
```

### 2. High-Fidelity Input Fields
```html
<div class="form-group">
  <label class="form-label" for="stdName">Student Full Name</label>
  <input type="text" id="stdName" class="form-control" placeholder="e.g. Aarav Sharma">
</div>
```

### 3. Modern Switch Toggle
```html
<label class="form-switch">
  <input type="checkbox" checked>
  <span class="switch-track"></span>
  <span>Dark Mode Override</span>
</label>
```

### 4. Status Tags (Badges)
```html
<span class="badge badge-success">Approved</span>
<span class="badge badge-warning">Pending Review</span>
<span class="badge badge-danger">Rejected</span>
```

---

## 🌗 Toggle Dark Theme Programmatically
Our tokens scale flawlessly with standard data-attribute bindings. To swap themes, simply toggle the `data-theme` attribute on the `<html>` node:

```javascript
// Swap to Obsidian Dark Theme
document.documentElement.setAttribute('data-theme', 'dark');

// Swap back to Standard Light Slate Theme
document.documentElement.setAttribute('data-theme', 'light');
```

---

## 🛠️ Dynamic Styling Overrides
Because our system is built using dynamic math inside HSL color scales, you can instantly customize brand values by altering core tokens in javascript.

### 1. Shift Primary branding
```javascript
// Shift brand color instantly to university emerald green (150 degrees)
document.documentElement.style.setProperty('--color-primary-h', 150);
```

### 2. Sharpen or Soften Corners
```javascript
// Disable all rounded corners globally (0px radius)
document.documentElement.style.setProperty('--radius-factor', 0);

// Double roundness globally (extra soft, organic)
document.documentElement.style.setProperty('--radius-factor', 2);
```

---

## 🤝 Collaborative Guidelines for Student Groups
1. **Never edit `design-tokens.css` directly** for ad-hoc patches. If you need a new theme color or margin size, declare it as a core token in `:root` so the entire team inherits the changes cohesively.
2. **Combine components with grid wrappers**: Use `grid-2`, `grid-3`, or `grid-12` utility grids inside `.main-wrapper` to form responsive dashboards effortlessly without writing custom media queries.
