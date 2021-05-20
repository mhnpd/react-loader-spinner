import React from "react";
import PropTypes from "prop-types";

const radius = 20;

const getPath = (radius) => { //trust us it works
  return ["M" + radius + " 0c0-9.94-8.06", radius, radius, radius].join("-"); //Structure e.g. "M36 18c0-9.94-8.06-18-18-18"
}
const parameterViewboxSize = (strokeWidth, secondaryStrokeWidth, radius) => {
  const maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
  const startingpoint = -radius - maxStrokeWidth / 2;
  const endpoint = Math.abs(startingpoint) * 2;

  return [startingpoint, startingpoint, endpoint, endpoint].join(" ");
}


export const Oval = props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox={parameterViewboxSize(props.strokeWidth, props.strokeWidthSecondary, radius)}
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    aria-label={props.label}
  >

    <g fill="none" fillRule="evenodd">
      <g strokeWidth={props.strokeWidthSecondary}>
        <circle strokeOpacity=".5" cx="0" cy="0" r={radius} stroke={props.secondaryColor}
                strokeWidth={props.strokeWidth}/>
        <path d={getPath(radius)}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
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
  strokeWidth: PropTypes.number,
  strokeWidthSecondary: PropTypes.number
};

Oval.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading",
  strokeWidth: 2,
  strokeWidthSecondary: 2,
};
