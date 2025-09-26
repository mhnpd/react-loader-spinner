---
sidebar_position: 1
---

# Welcome

Bring polished, delightful loading experiences to your React applications with `react-loader-spinner`. The library offers a broad collection of production‑ready loaders that are easy to drop in, theme, and optimize—whether you write plain JavaScript or strict TypeScript.

## Getting Started

### Installation

```bash
npm install react-loader-spinner
# or
yarn add react-loader-spinner
```

### Basic Usage

```tsx
import { Audio } from 'react-loader-spinner'

export function Example() {
  return (
    <Audio
      height={80}
      width={80}
      radius={9}
      color="green"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}
```

### Key Features

- Fully Typed: First‑class TypeScript support for safer integrations.
- Highly Customizable: Adjust size, color, speed, and appearance per use‑case.
- Lightweight Footprint: Minimal overhead with tree‑shakable builds.
- Cross‑Browser Compatible: Works consistently across all modern browsers.
- Diverse Animation Set: Wide variety of loaders for different UX contexts.
- Accessibility‑Aware: ARIA labels and semantics to support assistive tech.

---

Continue exploring the docs to see all available loaders and advanced usage patterns.
