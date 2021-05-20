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
        strokeWidth={2}
        strokeWidthSecondary={6}
        width={42}
        height={42}
        type="Oval"
      />
    </div>
  );
};
