import React from "react";
import Loader from "../src/index";


const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
};

export default {
  title: "Oval",
  component: Oval,
};

/** Ovals */
export const Oval = (props) => {
  return (
    <div style={center}>
      <Loader
        className="test"
        color= "green"
        secondaryColor="yellow"
        width={200}
        height={200}
        strokeWidth={5}
        type="Oval"
      />
    </div>
  );
};
