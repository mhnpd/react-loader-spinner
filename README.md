![Node.js Package](https://github.com/mhnpd/react-loader-spinner/workflows/Node.js%20Package/badge.svg?branch=master)
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

`react-spinner-loader` provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view.

### Installation

##### Using NPM:

#

```sh
$ npm install react-loader-spinner --save
```

##### Using yarn

#

```sh
$ yarn add react-loader-spinner
```

# Documentation:

[DEMO](https://mhnpd.github.io/react-loader-spinner-example/)

# Code SandBox:
https://codesandbox.io/s/react-loader-spinner-weqls?file=/src/App.js


### Usage


##### Import required css
Import the css to main app.js file

```js
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
```


```jsx

import { Audio } from  'react-loader-spinner'


<Audio
    heigth="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
```

### If webpack throws issue with css. (For older version of this package)

Change webpack config as:
` test: /\.scss$/ to test: /\.s?css$/`
<br/><br/>
<small>Newer version just import css file from node modules to app.js<small>

### Types of Spinner

react-loader-spinner component has the following types of spinners.

| Spinner Type | Implementation                                                                |
| ------------ |-------------------------------------------------------------------------------|
| Audio        | `<Audio color="#00BFFF" height={80} width={80} />`               |
| BallTriangle | `<BallTriangle color="#00BFFF" height={80} width={80} />` |
| Bars         | `<Bars color="#00BFFF" height={80} width={80} />`                 |
| Circles      | `<Circles color="#00BFFF" height={80} width={80}/>`            |
| Grid         | `<Grid color="#00BFFF" height={80} width={80} />`                 |
| Hearts       | `<Hearts color="#00BFFF" height={80} width={80} />`             |
| Oval         | `<Oval color="#00BFFF" height={80} width={80} />`                 |
| Puff         | `<Puff color="#00BFFF" height={80} width={80} />`                 |
| Rings        | `<Rings color="#00BFFF" height={80} width={80} />`               |
| TailSpin     | `<TailSpin  color="#00BFFF" height={80} width={80} />`         |
| ThreeDots    | `<ThreeDots color="#00BFFF" height={80} width={80} />`       |


 ![alt text](https://user-images.githubusercontent.com/33191954/148691173-a825d830-9457-4174-9b74-5c2a264906e4.gif)
  

### Here are the list of the task for which we want PR:

- Rings spinner is not supported in Safari

## License

MIT
