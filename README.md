<div align="center">
  <img src="/logo/logo.png" alt="React Loader Spinner" width="200"/>
  
  # React Loader Spinner
  
  [![npm version](https://badgen.net/npm/v/react-loader-spinner)](https://www.npmjs.com/package/react-loader-spinner)
  [![downloads](https://badgen.net/npm/dt/react-loader-spinner)](https://www.npmjs.com/package/react-loader-spinner)
  ![stars](https://badgen.net/github/stars/mhnpd/react-loader-spinner)
  ![release](https://badgen.net/github/release/mhnpd/react-loader-spinner)
  ![issues](https://badgen.net/github/open-issues/mhnpd/react-loader-spinner)
  ![license](https://badgen.net/github/license/mhnpd/react-loader-spinner)

**Simple, lightweight React SVG spinner components**  
 Perfect for async operations and loading states

[📚 Documentation](https://mhnpd.github.io/react-loader-spinner/) • [🎨 Live Demo](https://mhnpd.github.io/react-loader-spinner/docs/category/components/) • [💻 CodeSandbox](https://codesandbox.io/p/sandbox/react-loader-spinner-86zm9s)

</div>

---

## ✨ Features

- 🎯 **35+ Beautiful Spinners** - Wide variety of loading animations
- 🎨 **Fully Customizable** - Colors, sizes, and styles
- 📦 **Lightweight** - Zero dependencies (except React)
- 🌲 **Tree-shakeable** - Import only what you need
- 💪 **TypeScript** - Full type definitions included
- ⚡ **React 17, 18 & 19** - Compatible with all modern React versions
- 🎭 **No CSS Required** - Pure SVG animations
- ♿ **Accessible** - ARIA labels and semantic HTML

## 📦 Installation

```bash
npm install react-loader-spinner
```

Or using yarn:

```bash
yarn add react-loader-spinner
```

## 🚀 Quick Start

```jsx
import { Audio } from 'react-loader-spinner'

function App() {
  return (
    <Audio
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  )
}
```

## 📖 Documentation

Visit our **[complete documentation](https://mhnpd.github.io/react-loader-spinner/)** for:

- **[Getting Started Guide](https://mhnpd.github.io/react-loader-spinner/docs/intro)** - Installation and basic usage
- **[All Components](https://mhnpd.github.io/react-loader-spinner/docs/category/components/)** - Browse all 35+ spinner components
- **[API Reference](https://mhnpd.github.io/react-loader-spinner/docs/intro)** - Detailed prop documentation
- **[Live Examples](https://mhnpd.github.io/react-loader-spinner/docs/category/components/)** - Interactive demos

## 🎨 Available Spinners

<details>
<summary><b>View all 35+ spinners</b></summary>

- Audio
- Ball Triangle
- Bars
- Blocks
- Circles
- Circles With Bar
- Circular Progress
- Color Ring
- Comment
- Discuss
- DNA
- Falling Lines
- Fidget Spinner
- Grid
- Hearts
- Hourglass
- Infinity Spin
- Line Wave
- Magnifying Glass
- Mutating Dots
- Oval
- Progress Bar
- Puff
- Radio
- Revolving Dot
- Rings
- Rotating Lines
- Rotating Square
- Rotating Triangles
- Tail Spin
- Three Circles
- Three Dots
- Triangle
- Vortex
- Watch

</details>

## 💡 Usage Examples

### Basic Usage

```jsx
import { Oval } from 'react-loader-spinner'

;<Oval
  height={80}
  width={80}
  color="#4fa94d"
  visible={true}
  ariaLabel="oval-loading"
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}
/>
```

### With Custom Styling

```jsx
import { ThreeDots } from 'react-loader-spinner'

;<ThreeDots
  height="80"
  width="80"
  radius="9"
  color="#4fa94d"
  ariaLabel="three-dots-loading"
  wrapperStyle={{ margin: '20px' }}
  wrapperClass="custom-loader"
  visible={true}
/>
```

### Conditional Rendering

```jsx
import { TailSpin } from 'react-loader-spinner'

function MyComponent() {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        visible={loading}
      />
    </div>
  )
}
```

### Tree-shaking with Direct Imports

For optimal bundle size, import components directly:

```jsx
// Direct import (better for tree-shaking)
import { Audio } from 'react-loader-spinner/dist/esm/loader/audio'

// Or use named imports (also tree-shakeable)
import { Audio, Oval, ThreeDots } from 'react-loader-spinner'
```

## 🎯 Common Props

All spinner components accept these common props:

| Prop           | Type               | Default            | Description               |
| -------------- | ------------------ | ------------------ | ------------------------- |
| `height`       | `string \| number` | `"100"`            | Height of the spinner     |
| `width`        | `string \| number` | `"100"`            | Width of the spinner      |
| `color`        | `string`           | `"#4fa94d"`        | Primary color             |
| `visible`      | `boolean`          | `true`             | Show/hide the spinner     |
| `ariaLabel`    | `string`           | Component-specific | Accessibility label       |
| `wrapperStyle` | `CSSProperties`    | `{}`               | Inline styles for wrapper |
| `wrapperClass` | `string`           | `""`               | CSS class for wrapper     |

> **Note:** Individual components may have additional specific props. Check the [documentation](https://mhnpd.github.io/react-loader-spinner/docs/category/components/) for each component.

## 🔧 TypeScript Support

This package includes TypeScript definitions out of the box:

```tsx
import { Audio } from 'react-loader-spinner'
import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
}

;<Audio height="80" width="80" color="blue" wrapperStyle={wrapperStyle} />
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Modern mobile browsers

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./Contributing.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT © [Mohan Upadhyay](https://mohanpd.com.np)

## 🙏 Contributors

Thanks goes to these wonderful people:

<a href="https://github.com/mhnpd/react-loader-spinner/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mhnpd/react-loader-spinner" />
</a>

## 🔗 Links

- [📚 Full Documentation](https://mhnpd.github.io/react-loader-spinner/)
- [🐛 Report Bug](https://github.com/mhnpd/react-loader-spinner/issues)
- [💡 Request Feature](https://github.com/mhnpd/react-loader-spinner/issues)
- [📦 npm Package](https://www.npmjs.com/package/react-loader-spinner)

---

<div align="center">
  Made with ❤️ by <a href="https://mohanpd.com.np">Mohan Upadhyay</a>
  
  ⭐ Star us on GitHub — it helps!
</div>
