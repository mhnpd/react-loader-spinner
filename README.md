<p align="center">
  <img src="https://user-images.githubusercontent.com/33191954/33469873-6f57e560-d68d-11e7-8036-f2cb63175cc7.png" alt="title"/>
</p>


 react-spinner-loader provides simple React.js spinner component which can be implemented for async wait operation before data load to the view. 

### Installation

```sh
$ npm install react-loader-spinner --save
```
#  Demo
[View in page]




### Usage
```
 import Loader from 'react-loader-spinner'
 export default class App extends React.Component {
  //other logic
    render() {
	 return(
	  <Loader 
	     type="Puff"
	     color="#00BFFF"
	     height="100"	
	     width="100"
	  />   
	 );
    }
 }
```

### IF Webpack throw issue with css 
Change webpack config as:
```  test: /\.scss$/ to test: /\.s?css$/ ```

### Types of Spinner
react-loader-spinner component has following types of spinner.

| Spinner Type | Implementation |
| ------ | ------ |
| Audio|``` <Loader type="Audio" color="#somecolor" height={80} width={80} />``` |
| Ball-Triangle | ``` <Loader type="BallTriangle" color="#somecolor" height={80} width={80} /> ```|
| Bars | ```<Loader type="Bars" color="#somecolor" height={80} width={80} />``` |
| Circles | ```<Loader type="Circles" color="#somecolor" height={80} width={80}/>``` |
| Grid|```<Loader type="Grid" color="#somecolor" height={80} width={80} />``` |
|Hearts|```<Loader type="Hearts" color="#somecolor" height={80} width={80} />```|
|Oval|```<Loader type="Oval" color="#somecolor" height={80} width={80} />```|
|Puff|```<Loader type="Puff" color="#somecolor" height={80} width={80} />```|
|Rings|```<Loader type="Rings" color="#somecolor" height={80} width={80} />```|
|TailSpin|```<Loader type="TailSpin" color="#somecolor" height={80} width={80} />```|
|ThreeDots|```<Loader type="ThreeDots" color="#somecolor" height={80} width={80} />```|

### PropTypes Available
react-loader-spinner component accept following props. Instructions on how to use them are below.


| PropType | Detail |
| ------ | ------ |
| type | Type of spinner you want to display. View the type in Types of Spinner section. |
| height | Height props define the height of the svg spinner. Default height is 80px.|
| width | Width props define the width of the spinner. Default Width is 80px. |
| color | [Color Props is provide color to the spinner. Default color is light blue. |

### TODO LIST
* Update Readme Table With New Component
* Change Docs on Storybooks


License
----

MIT



   [svg-loader]: <https://github.com/SamHerbert/SVG-Loaders>
   [here]: <http://samherbert.net/svg-loaders>
   [View in page]: https://mhnpd.github.io/react-loader-spinner/
   
