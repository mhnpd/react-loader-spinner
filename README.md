![release](https://badgen.net/github/release/mhnpd/react-loader-spinner)
![tag](https://badgen.net/github/tag/mhnpd/react-loader-spinner)
![stars](https://badgen.net/github/stars/mhnpd/react-loader-spinner)
![issue](https://badgen.net/github/issues/mhnpd/react-loader-spinner)
![open-issues](https://badgen.net/github/open-issues/mhnpd/react-loader-spinner)
![commits](https://badgen.net/github/commits/mhnpd/react-loader-spinner)
![commits](https://badgen.net/github/assets-dl/mhnpd/react-loader-spinner)

<div style="text-align:center;">
<p>
  <img src="/logo/logo.png" alt="title"/>
</p>
</div>

`react-loader-spinner` provides simple React SVG spinner components which can be implemented for async/await operations before data loads in the view.

### Installation

```bash
npm install react-loader-spinner --save
# or
yarn add react-loader-spinner
```

### Documentation:

1. [Getting Started](https://mhnpd.github.io/react-loader-spinner/docs/intro)
2. [Spinners](https://mhnpd.github.io/react-loader-spinner/docs/category/components/)
3. [Code Sandbox Example](https://codesandbox.io/p/sandbox/react-loader-spinner-86zm9s?file=%2Fsrc%2Fstyles.css%3A8%2C23&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqggrep400063p6gzbl599ai%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqggrep400023p6ghzsimx31%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqggrep400033p6g3eer5i1g%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqggrep400053p6gnojd5tz3%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B53.65943417458956%252C46.34056582541044%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqggrep400023p6ghzsimx31%2522%253A%257B%2522id%2522%253A%2522clqggrep400023p6ghzsimx31%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqgh245x00023p6gdkh2fmc9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A16%252C%2522startColumn%2522%253A19%252C%2522endLineNumber%2522%253A16%252C%2522endColumn%2522%253A19%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clqgh5glr00023p6gb7gaz27h%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A8%252C%2522startColumn%2522%253A23%252C%2522endLineNumber%2522%253A8%252C%2522endColumn%2522%253A23%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fstyles.css%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clqgh5glr00023p6gb7gaz27h%2522%257D%252C%2522clqggrep400053p6gnojd5tz3%2522%253A%257B%2522id%2522%253A%2522clqggrep400053p6gnojd5tz3%2522%252C%2522activeTabId%2522%253A%2522clqghx88q001i3p6gpjtn1qsu%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clqghx88q001i3p6gpjtn1qsu%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clqggrep400033p6g3eer5i1g%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqggrep400033p6g3eer5i1g%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

### Usage

> No css import is required

```jsx
import { Audio } from 'react-loader-spinner';

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
/>
  wrapperStyle
  wrapperClass
/>
```

#### Individual (deep) imports

Each loader can also be imported directly (useful for some bundlers / tree‑shaking scenarios):

```jsx
import { Audio } from 'react-loader-spinner/audio'

// other examples:
// import { Oval } from 'react-loader-spinner/oval'
// import { ThreeDots } from 'react-loader-spinner/three-dots'
```

## License

MIT

## Contributors

<a href="https://github.com/mhnpd/react-loader-spinner/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mhnpd/react-loader-spinner" />
</a>
