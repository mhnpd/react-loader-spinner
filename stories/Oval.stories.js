import React from "react";
import Loader from "../src/index";

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
        color="#FF7F83"
        secondaryColor="#18215F"
        strokeWidth={2}
        strokeWidthSecondary={6}
        width={200}
        height={200}
        type="Oval"
      />
    </div>
  );
};
