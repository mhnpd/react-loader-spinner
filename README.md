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

##### Import required css

#

```js
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
```

# Documentation:

[View in page](https://mhnpd.github.io/react-loader-spinner)

### Usage
```jsx
<Audio
    heigth="100"
    width="100"
    color='grey'
    arialLabel='loading'
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
| Audio        | `<Audio type="Audio" color="#00BFFF" height={80} width={80} />`               |
| BallTriangle | `<BallTriangle type="BallTriangle" color="#00BFFF" height={80} width={80} />` |
| Bars         | `<Bars type="Bars" color="#00BFFF" height={80} width={80} />`                 |
| Circles      | `<Circles type="Circles" color="#00BFFF" height={80} width={80}/>`            |
| Grid         | `<Grid type="Grid" color="#00BFFF" height={80} width={80} />`                 |
| Hearts       | `<Hearts type="Hearts" color="#00BFFF" height={80} width={80} />`             |
| Oval         | `<Oval type="Oval" color="#00BFFF" height={80} width={80} />`                 |
| Puff         | `<Puff type="Puff" color="#00BFFF" height={80} width={80} />`                 |
| Rings        | `<Rings type="Rings" color="#00BFFF" height={80} width={80} />`               |
| TailSpin     | `<TailSpin type="TailSpin" color="#00BFFF" height={80} width={80} />`         |
| ThreeDots    | `<ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />`       |


### Typescript

Typescript support is now also available. It has full **propType intellisense** support. Just install the component library as usual and use it in any _(React) \<Typescript\>_ project.Finally, you will get all sorts of propType intellisense & static typeChecking out of the box. Just like Javascript **we also ❤ Typescript**.

<p align="center">
  <img src="https://user-images.githubusercontent.com/61944859/89057235-1da6cf00-d37f-11ea-827e-17edbca46016.jpg" alt=""/>
</p>

### Here are the list of the task for which we want PR:

- Optimize css implementation
- Optimization for multiple color support.
- Optimize css implementation
- Add support for Typescript.
- Optimization for multiple color support.

## License

MIT
