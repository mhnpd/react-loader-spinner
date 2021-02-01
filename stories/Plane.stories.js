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
  title: "Plane",
  component: Plane,
};

/** Plane */
export const Plane = (props) => {
  return (
    <div style={center}>
      <Loader color="#FFA500" width={200} height={200} type="Plane" />
    </div>
  );
};
