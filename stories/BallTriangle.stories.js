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
  title: "Ball Triangle",
  component: BallTriangle,
};

/** BallTriangle */
export const BallTriangle = (props) => {
  return (
    <div style={center}>
      <Loader width={200} height={300} color="#cef442" type="BallTriangle" />
    </div>
  );
};
