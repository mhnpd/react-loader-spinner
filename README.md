# react-loader-spinner

 react-spinner-loader provides simple React.js spinner component which can be implemented for async wait operation before data load to the view. 

> Important Note: This release is compatible with React 1.4 and higher. If you're working with an older version of React, this package might not work for you.


All the icon and spinner used in the Package are from SamHerbert [svg-loader] project on github. All the loading icon and spinner is built in pure svg. Preview of the all the available loader can be viewed on SamHerbert website [here]

### Installation

```sh
$ npm install react-loader-spinner --save
```
### Types of Spinner
react-loader-spinner component has following types of spinner.

| Spinner Type | Implementation |
| ------ | ------ |
| Audio|``` <Loader type={Audio} color={#somecolor} height={80} width={80} />``` |
| Ball-Triangle | ``` <Loader type={Ball-Triangle} color={#somecolor} height={80} width={80} /> ```|
| Bars | ```<Loader type={Bars} color={#somecolor} height={80} width={80} />``` |
| Circles | ```<Loader type={Circles}  color={#somecolor} height={80} width={80}/>``` |
| Grid|```<Loader type={Grid} color={#somecolor} height={80} width={80} />``` |
|Hearts|```<Loader type={Hearts} color={#somecolor} height={80} width={80} />```|
|Oval|```<Loader type={Oval} color={#somecolor} height={80} width={80} />```|
|Puff|```<Loader type={Puff} color={#somecolor} height={80} width={80} />```|
|Rings|```<Loader type={Rings} color={#somecolor} height={80} width={80} />```|
|TailSpin|```<Loader type={TailSpin} color={#somecolor} height={80} width={80} />```|
|ThreeDots|```<Loader type={ThreeDots} color={#somecolor} height={80} width={80} />```|

### PropTypes Aviliable
react-loader-spinner component accept following props. Instructions on how to use them are below.
| PropType | Detail |
| ------ | ------ |
| type | Type of spinner you want to display. View the type in Types of Spinner section. |
| height | Height props define the height of the svg spinner. Default height is 80px.|
| width | Width props define the width of the spinner. Default Width is 80px. |
| color | [Color Props is provide color to the spinner. Default color is light blue. |
| visible |By default visible props is true. ```<Loader visible={false} />```  |


License
----

MIT



   [svg-loader]: <https://github.com/SamHerbert/SVG-Loaders>
   [here]: <http://samherbert.net/svg-loaders>
   