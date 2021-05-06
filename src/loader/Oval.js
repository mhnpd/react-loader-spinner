import React from "react";
import PropTypes, {bool} from "prop-types";


const getTranslation = (strokeWidth, radius) => {
  return getViewboxSize(radius) * getScale(strokeWidth, radius);
}
const getTranslationToString = (strokeWidth, radius) => {
  console.log("translate(" + getTranslation(strokeWidth, radius) + "," + getTranslation(strokeWidth, radius) + ")")
  return "translate(" + getTranslation(strokeWidth, radius) + "," + getTranslation(strokeWidth, radius) + ")";
}
const getScale = (strokeWidth, radius) => {
  return (2 * radius) / (strokeWidth + (2 * radius) + 2);
}
const gehtScaleToString = (strokeWidth, radius) => {
  console.log("scale(" + getScale(strokeWidth, radius) + ")")
  return "scale(" + getScale(strokeWidth, radius) + ")";
}

const getPath = (radius) => { //trust us it works
  return ["M" + (radius * 2) + " " + radius + "c0-9.94-8.06", radius, radius, radius].join("-"); //Structure e.g. "M36 18c0-9.94-8.06-18-18-18"
}
const parameterViewboxSize = (radius) => {
  return [0, 0, getViewboxSize(radius), getViewboxSize(radius)].join(" ");
}
const getViewboxSize = (radius) => {
  return (radius * 2 + 2); // diameter + offset
}
const animateTransform = (degree, radius) => {
  return [degree, radius, radius].join(" ");
}

export const Oval = props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox={parameterViewboxSize(props.radius)}
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    aria-label={props.label}
    //transform-orgin={getTranslationToString(props.strokeWidthSecondary, props.radius) } the same??
    //transform-orgin="center"
    transform-orgin= "0 0 0 0;"

  >
    <g fill="none" fillRule="evenodd" transform={gehtScaleToString(props.strokeWidthSecondary, props.radius)}>
      <g transform="translate(1 1)" strokeWidth={props.strokeWidthSecondary}>
        <circle strokeOpacity=".5" cx={props.radius} cy={props.radius} r={props.radius} stroke={props.secondaryColor}
                strokeWidth={props.strokeWidth}/>
        <path d={getPath(props.radius)}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={animateTransform(0, props.radius)}
            to={animateTransform(360, props.radius)}
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

Oval.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  label: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeWidthSecondary: PropTypes.number
};

Oval.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  radius: 18,
  strokeWidth: 2,
  strokeWidthSecondary: 2,
};
