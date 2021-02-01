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
  title: "Tail Spin",
  component: TailSpin,
};

/** TailSpin */
export const TailSpin = (props) => {
  return (
    <div style={center}>
      <Loader type="TailSpin" color="#939248" height="100" width="100" />
    </div>
  );
};
