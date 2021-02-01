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
  title: "Mutating Dots",
  component: MutatingDots,
};

/** MutatingDots */
export const MutatingDots = (props) => {
  return (
    <div style={center}>
      <Loader
        color="#FFA500"
        secondaryColor="#FFA500"
        width={100}
        height={100}
        type="MutatingDots"
      />
    </div>
  );
};
