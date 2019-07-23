import React from "react";
import PropTypes from "prop-types";

export const TailSpin = props => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={props.label}
  >
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stopColor={props.color} stopOpacity="0" offset="0%" />
        <stop stopColor={props.color} stopOpacity=".631" offset="63.146%" />
        <stop stopColor={props.color} offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)">
        <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke={props.color} strokeWidth="2">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
        <circle fill="#fff" cx="36" cy="18" r="1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
  </svg>
);

TailSpin.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};

TailSpin.defaultProps = {
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
