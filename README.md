<p align="center">
  <img src="https://user-images.githubusercontent.com/33191954/78983001-0a0ef880-7b43-11ea-904f-42a572d93c53.png" alt="title"/>
</p>


 ```react-spinner-loader``` provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view.

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
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
```

#  Demo
[View in page]


### Usage
```js
 import Loader from 'react-loader-spinner'
 export default class App extends React.Component {
  //other logic
    render() {
	 return(
	  <Loader
	     type="Puff"
	     color="#00BFFF"
	     height={100}
	     width={100}
	     timeout={3000} //3 secs

	  />
	 );
    }
 }
```

### If webpack throws issue with css. (For older version of this package)

Change webpack config as:
```  test: /\.scss$/ to test: /\.s?css$/ ```
<br/><br/>
<small>Newer version just import css file from node modules to app.js<small>


### Types of Spinner
react-loader-spinner component has the following types of spinners.

| Spinner Type | Implementation |
| ------ | ------ |
| Audio|``` <Loader type="Audio" color="#00BFFF" height={80} width={80} />``` |
| Ball-Triangle | ``` <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /> ```|
| Bars | ```<Loader type="Bars" color="#00BFFF" height={80} width={80} />``` |
| Circles | ```<Loader type="Circles" color="#00BFFF" height={80} width={80}/>``` |
| Grid|```<Loader type="Grid" color="#00BFFF" height={80} width={80} />``` |
|Hearts|```<Loader type="Hearts" color="#00BFFF" height={80} width={80} />```|
|Oval|```<Loader type="Oval" color="#00BFFF" height={80} width={80} />```|
|Puff|```<Loader type="Puff" color="#00BFFF" height={80} width={80} />```|
|Rings|```<Loader type="Rings" color="#00BFFF" height={80} width={80} />```|
|TailSpin|```<Loader type="TailSpin" color="#00BFFF" height={80} width={80} />```|
|ThreeDots|```<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />```|

> There are more. View [demo] to see the full list.

### PropTypes Available
react-loader-spinner component accepts the following props. Instructions on how to use them are below.


| name | types | default | Detail |
| ------ | ------ |------|------|
| visible | String or boolean  | false | Show/ Hide the loader as required. |
| type | String  | "Audio" | Type of spinner you want to display. View the type in Types of Spinner section. |
| height | Number  | 80 |  Height props define the height of the svg spinner. Default height is 80px.|
| width | Number  | 80 |  Width props define the width of the spinner.  |
| color | String  | "Blue" |  color props is add color to the spinner |
| secondaryColor | String  | "Grey" |  secondaryColor props  for now is available on Plane and MutatingDots loaders  |
| timeout | Number  | 0 |  Duration in miliseconds after which spinner is disabled |
| radius | Number  | value varies | Set radius if the loader has a circle element in it |

### Here are the list of the task for which we want PR:
* Optimize css implementation
* Add support for Typescript.
* Optimization for multiple color support.


License
----

MIT

	[svg-loader]: <https://github.com/SamHerbert/SVG-Loaders>
	[here]: <http://samherbert.net/svg-loaders>
	[View in page]: https://mhnpd.github.io/react-loader-spinner/
	[storybook]: https://mhnpd.github.io/react-loader-spinner/

