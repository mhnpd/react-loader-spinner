import React from "react";
import Loader from "../src/index";

import "../src/loader/css/react-spinner-loader.css";

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
};

export default {
  title: "Ovals",
  component: Ovals,
};

/** Ovals */
export const Ovals = (props) => {
  return (
    <div style={center}>
      <Loader
        className="test"
        color="green"
        width={200}
        height={200}
        type="Oval"
      />
    </div>
  );
};
