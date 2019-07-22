import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "./loader";

const componentNames = [
  "Audio",
  "BallTriangle",
  "Bars",
  "Circles",
  "Grid",
  "Hearts",
  "Oval",
  "Puff",
  "Rings",
  "TailSpin",
  "ThreeDots",
  "Watch",
  "RevolvingDot",
  "Triangle",
  "Plane",
  "MutatingDots",
  "CradleLoader"
];

function componentName(type) {
  if (componentNames.includes[type]) {
    return Spinner[type];
  }
  return Spinner.Audio;
}

export default function Loader(props) {
  return (
    <div aria-busy="true" className={props.className} style={props.style}>
      {React.createElement(componentName(props.type), { ...props })}
    </div>
  );
}

Loader.propTypes = {
  type: PropTypes.oneOf([...componentNames]),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string
};

Loader.defaultProps = {
  // color: "#71238",
  type: "Audio",
  style: {},
  className: ""
  // height: 80,
  // width: 80,
  // label: "Loading content, please wait."
};
