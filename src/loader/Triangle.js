import React from "react";
import "./css/Triangle.css";

export const Triangle = svg => (
  <div className="react-spinner-loader-svg">
    <svg id="triangle" width={svg.height} height={svg.height} viewBox="-3 -4 39 39" aria-label={svg.label}>
      <polygon fill="transparent" stroke={svg.color} strokeWidth="1" points="16,0 32,32 0,32" />
    </svg>
  </div>
);
