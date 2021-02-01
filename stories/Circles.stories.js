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
  title: "Circles",
  component: Circles,
};

/** Circles */
export const Circles = (props) => {
  return (
    <div style={center}>
      <Loader color="green" width={200} height={200} type="Circles" />
    </div>
  );
};
