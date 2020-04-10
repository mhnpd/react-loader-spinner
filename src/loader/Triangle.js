import React from "react";
import PropTypes from "prop-types";

export const Triangle = props => (
  <div className="react-spinner-loader-svg">
    <svg
      id="triangle"
      width={props.width}
      height={props.height}
      viewBox="-3 -4 39 39"
      aria-label={props.label}
    >
      <polygon fill="transparent" stroke={props.color} strokeWidth="1" points="16,0 32,32 0,32" />
    </svg>
  </div>
);

Triangle.propTypes = {
  height: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  width: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  color: PropTypes.string,
  label: PropTypes.string
};

Triangle.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
