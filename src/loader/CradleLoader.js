import React from "react";
import PropTypes from "prop-types";

export const CradleLoader = props => (
  <div aria-label={props.label} role="presentation" className="container">
    <div className="react-spinner-loader-swing">
      <div className="react-spinner-loader-swing-l" />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className="react-spinner-loader-swing-r" />
    </div>
    <div className="react-spinner-loader-shadow">
      <div className="react-spinner-loader-shadow-l" />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div className="react-spinner-loader-shadow-r" />
    </div>
  </div>
);

CradleLoader.propTypes = {
  label: PropTypes.string
};

CradleLoader.defaultProps = {
  label: "audio-loading"
};
