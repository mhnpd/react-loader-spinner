import React from "react";
import PropTypes from "prop-types";

/**
 * The radius of the circle
 * The Loader size is set with the width and height of the SVG
 * @type {number}
 */
const RADIUS = 20;

/**
 * Compute Path depending on circle radius
 * The structure with radius 20 is "M20 0c0-9.94-8.06-20-20-20"
 * @param radius of the circle radius default 20
 * @returns {string}
 */
const getPath = (radius) => {
  return ["M" + radius + " 0c0-9.94-8.06", radius, radius, radius].join("-");
}

/**
 * Compute the size of the viewbox depending on the radius and Stroke-Width
 * @param strokeWidth Stroke-Width of the full circle
 * @param secondaryStrokeWidth Stroke-Width of the 1/4 circle
 * @param radius radius of the circle
 * @returns {string}
 */
const getViewboxSize = (strokeWidth, secondaryStrokeWidth, radius) => {
  const maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
  const startingpoint = -radius - maxStrokeWidth / 2;
  const endpoint = Math.abs(startingpoint) * 2;
  return [startingpoint, startingpoint, endpoint, endpoint].join(" ");
}


export const Oval = props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox={getViewboxSize(props.strokeWidth, props.strokeWidthSecondary || props.strokeWidth, RADIUS)}
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.color}
    aria-label={props.label}
  >
    <g fill="none" fillRule="evenodd">
      <g strokeWidth={props.strokeWidthSecondary || props.strokeWidth}>
        <circle strokeOpacity=".5" cx="0" cy="0" r={RADIUS} stroke={props.secondaryColor}
                strokeWidth={props.strokeWidth}/>
        <path d={getPath(RADIUS)}>
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
};
