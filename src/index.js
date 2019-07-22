import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "./loader";

export default function Loader(props) {
  return (
    <div>
      <div aria-busy="true" className={props.className} style={props.style}>
        {React.createElement(Spinner[props.type], { ...props })}
      </div>
    </div>
  );
}

Loader.propTypes = {
  type: PropTypes.string,
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
