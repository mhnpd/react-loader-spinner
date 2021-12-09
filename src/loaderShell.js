import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function LoaderShell(props) {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    let timer;
    if (props.timeout && props.timeout > 0) {
      timer = setTimeout(() => {
        setDisplay(false);
      }, props.timeout);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  });
  if (!props.visible || props.visible === "false") {
    return null;
  }
  return display ? (
    <div aria-busy="true" className={props.className} style={props.style}>
      {React.createElement(props.component, { ...props })}
    </div>
  ) : null;
}

LoaderShell.propTypes = {
  component: PropTypes.element,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  timeout: PropTypes.number
};

LoaderShell.defaultProps = {
  component: undefined,
  style: {},
  className: "",
  visible: true,
  timeout: 0
};