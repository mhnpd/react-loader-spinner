import React from "react";
import PropTypes from "prop-types";

export const RevolvingDot = props => (
  <svg
    version="1.1"
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    aria-label={props.label}
  >
    <circle
      fill="none"
      stroke={props.color}
      strokeWidth="4"
      cx="50"
      cy="50"
      r="44"
      style={{ opacity: 0.5 }}
    />
    <circle fill={props.color} stroke={props.color} strokeWidth="3" cx="8" cy="54" r="6">
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

RevolvingDot.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};

RevolvingDot.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
