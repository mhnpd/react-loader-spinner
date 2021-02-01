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
  title: "Grid",
  component: Grid,
};

/** Grid */
export const Grid = (props) => {
  return (
    <div style={center}>
      <Loader color="green" width={200} height={200} type="Grid" />
    </div>
  );
};
