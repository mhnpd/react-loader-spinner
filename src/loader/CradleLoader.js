import React from "react";
import "./css/CradleLoader.css";

export const CradleLoader = () => (
  <div aria-busy="true" aria-label="Loading" role="progressbar" className="container">
    <div className="swing">
      <div className="swing-l" />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className="swing-r" />
    </div>
    <div className="shadow">
      <div className="shadow-l" />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className="shadow-r" />
    </div>
  </div>
);
