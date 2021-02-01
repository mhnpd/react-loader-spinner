import React from "react"

/**
 * Little typescript contribution from KR Tirtho...
 * Hope you will accept this ❤
 * 
 * What works?
 * Fully supported with typescript (after builds)
 * PropTypes intellisense in (React) <typescript> projects
 * Warns if user provides wrong <types> in props 
 * Short description of every props
 * 
 * Finally, thanks for making this library. It helped me a lot in one of my private project.....
 */

declare module "react-loader-spinner" 
{
    // Main Interface for the props
    interface LoaderProps<T = {}> {
    /**
     * @property _visible_ | Show/ Hide the loader as required
     * @default  false
     */
    visible?: boolean;
    /**
     * @property _type_ | Type of spinner you want to display
     * @default Audio
    */
      type: 
      "Audio"
      |"BallTriangle"
      |"Bars"
      |"Circles"
      |"Grid"
      |"Hearts"
      |"Oval"
      |"Puff"
      |"Rings"
      |"TailSpin"
      |"ThreeDots"
      |"Watch"
      |"RevolvingDot"
      |"Triangle"
      |"Plane"
      |"MutatingDots"
      |"CradleLoader";
      /**
       * @property _height_ | Height prop define the height of the svg spinner. 
       * @default 80px
        */
      height?: number | string;
      /**
       * @property _width_ | Width prop define the width of the spinner.
       * @default 80px
        */
      width?: number | string;
      /**
       * @property _color_ | color prop is for adding color to the spinner
       * @default Blue
        */
      color?: string;
      /**
       * @property _secondaryColor_ | secondaryColor prop  for now is available on Plane and MutatingDots loaders
       * @default Grey
        */
      secondaryColor?: string;
      /**
       * @property _timeout_ | Duration in miliseconds after which spinner is disable
       * d@default 0
        */
      timeout?: number;
      /**
       * @property _radius_ | Set radius if the loader has a circle element in it
       * @default value_varies
        */
      radius?: number;
    }
  export default class Loader extends React.Component<LoaderProps>{
    constructor(props: LoaderProps)
  }
}

