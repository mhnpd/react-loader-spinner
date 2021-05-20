import React from "react";
import PropTypes from "prop-types";

const getScale = (strokeWidth, radius) => {
  return (2 * radius) / (strokeWidth + (2 * radius) + 2);
}
const getTransformToString = (strokeWidth, radius) => {
  console.log("scale(" + getScale(strokeWidth, radius) + ")")
  return "scale(" + getScale(strokeWidth, radius) + ") " + getTranslate(strokeWidth, radius);
}
const getTranslate = (strokeWidth, radius) => {
  return "translate(" + (radius + 1) * (1 - getScale(strokeWidth, radius)) + " " + (radius + 1) * (1 - getScale(strokeWidth, radius)) + ")";
}
const getPath = (radius) => { //trust us it works
  return ["M" + (radius * 2) + " " + radius + "c0-9.94-8.06", radius, radius, radius].join("-"); //Structure e.g. "M36 18c0-9.94-8.06-18-18-18"
}
const parameterViewboxSize = (strokeWidth, radius) => {
  return [0, 0, getViewboxSize(strokeWidth, radius), getViewboxSize(strokeWidth, radius)].join(" ");
}
const getViewboxSize = (strokeWidth, radius) => {
  return (radius * 2 + strokeWidth); // diameter + offset
}
const animateTransform = (degree, radius) => {
  return [degree, radius, radius].join(" ");
}

export const Oval = props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox={parameterViewboxSize(props.strokeWidthSecondary, props.radius)}
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    aria-label={props.label}
  >

    <g fill="none" fillRule="evenodd" transform={getTransformToString(props.strokeWidthSecondary, props.radius)}>
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
