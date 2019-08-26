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
  if (componentNames.includes(type)) {
    return Spinner[type];
  }
  return Spinner.Audio;
}

export default function Loader(props) {
  if (!props.visible || props.visible === "false") {
    return null;
  }
  return (
    <div aria-busy="true" className={props.className} style={props.style}>
      {React.createElement(componentName(props.type), { ...props })}
    </div>
  );
}

Loader.propTypes = {
  type: PropTypes.oneOf([...componentNames]),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Loader.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true
};
