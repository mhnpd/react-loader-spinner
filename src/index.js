import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { visible } from "ansi-colors";
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

export default class Loader extends React.Component {
  state = {
    display: (!this.props.delay || this.props.delay < 0 || this.props.delay === 0)
  };

  componentDidMount() {
    if (this.props.delay > 0) {
      setTimeout(() => {
        this.setState({ display: true });
      }, this.props.delay);
    }
  }


  render() {
    let { props } = this;
    if (!props.visible || props.visible === "false" || !this.state.display) {
      return null;
    }

    return (
      <div aria-busy="true" className={props.className} style={props.style}>
        {React.createElement(componentName(props.type), { ...props })}
      </div>
    );
  }
}

// export default function Loader(props) {
//   const [display, setDisplay] = useState(!props.delay || props.delay < 0 || props.delay === 0);
//
//   if (props.delay && props.delay > 0) {
//     setTimeout(() => {
//       setDisplay(true);
//     }, props.delay);
//   }
//
//   if (!props.visible || props.visible === "false") {
//     return null;
//   }
//
//   return (
//     display ? (
//       <div aria-busy="true" className={props.className} style={props.style}>
//         {React.createElement(componentName(props.type), { ...props })}
//       </div>
//     ) : null
//   );
// }

Loader.propTypes = {
  type: PropTypes.oneOf([...componentNames]),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  delay: PropTypes.number
};

Loader.defaultProps = {
  type: "Audio",
  style: {},
  className: "",
  visible: true,
  delay: 0
};
