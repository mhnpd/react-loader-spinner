import React from "react";
import PropTypes from "prop-types";

export const MutatingDots = props => (
  <svg id="goo-loader" width={props.width} height={90} fill={props.color} aria-label={props.label}>
    <filter id="fancy-goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
        result="goo"
      />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
    <g filter="url(#fancy-goo)">
      <animateTransform
        id="mainAnim"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 50 50"
        to="359 50 50"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <circle cx="50%" cy="40" r="11">
        <animate
          id="cAnim1"
          attributeType="XML"
          attributeName="cy"
          dur="0.6s"
          begin="0;cAnim1.end+0.2s"
          calcMode="spline"
          values="40;20;40"
          keyTimes="0;0.3;1"
          keySplines="0.175, 0.885, 0.320, 1.5; 0.175, 0.885, 0.320, 1.5"
        />
      </circle>
      <circle cx="50%" cy="60" r="11">
        <animate
          id="cAnim2"
          attributeType="XML"
          attributeName="cy"
          dur="0.6s"
          begin="0.4s;cAnim2.end+0.2s"
          calcMode="spline"
          values="60;80;60"
          keyTimes="0;0.3;1"
          keySplines="0.175, 0.885, 0.320, 1.5;0.175, 0.885, 0.320, 1.5"
        />
      </circle>
    </g>
  </svg>
);

MutatingDots.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};

MutatingDots.defaultProps = {
  width: 80,
  color: "green",
  label: "audio-loading"
};
