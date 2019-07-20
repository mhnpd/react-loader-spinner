import React from "react";
import PropTypes from "prop-types";
import { Audio } from "./loader/Audio";
import { BallTriangle } from "./loader/BallTriangle";
import { Bars } from "./loader/Bars";
import { Circles } from "./loader/Circles";
import { Grid } from "./loader/Grid";
import { Hearts } from "./loader/Hearts";
import { Oval } from "./loader/Oval";
import { Puff } from "./loader/Puff";
import { Rings } from "./loader/Rings";
import { TailSpin } from "./loader/TailSpin";
import { ThreeDots } from "./loader/ThreeDots";
import { Watch } from "./loader/Watch";
import { RevolvingDot } from "./loader/RevolvingDot";
import { CradleLoader } from "./loader/CradleLoader";
import { Triangle } from "./loader/Triangle";
import { Plane } from "./loader/Plane";
import { MutatingDot } from "./loader/MutatingDot";

export default class Loader extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    type: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string
  };

  static defaultProps = {
    color: "#71238",
    type: "Audio",
    height: 80,
    width: 80,
    label: "Loading content, please wait."
  };

  svgRenderer = type => {
    switch (type) {
      case "Audio":
        return <Audio {...this.props} />;
      case "Ball-Triangle":
        return <BallTriangle {...this.props} />;
      case "Bars":
        return <Bars {...this.props} />;
      case "Circles":
        return <Circles {...this.props} />;
      case "Grid":
        return <Grid {...this.props} />;
      case "Hearts":
        return <Hearts {...this.props} />;
      case "Oval":
        return <Oval {...this.props} />;
      case "Puff":
        return <Puff {...this.props} />;
      case "Rings":
        return <Rings {...this.props} />;
      case "TailSpin":
        return <TailSpin {...this.props} />;
      case "ThreeDots":
        return <ThreeDots {...this.props} />;
      case "Watch":
        return <Watch {...this.props} />;
      case "RevolvingDot":
        return <RevolvingDot {...this.props} />;
      case "CradleLoader":
        return <CradleLoader {...this.props} />;
      case "Triangle":
        return <Triangle {...this.props} />;
      case "Plane":
        return <Plane {...this.props} />;
      case "MutatingDot":
        return <MutatingDot {...this.props} />;
      default:
        return (
          <div aria-busy="true">
            <span style={{ color: "Green" }}>Loading content, please wait.</span>
            <small>
              <i>
                <br />
                Note:No specific svg type exist
              </i>
            </small>
          </div>
        );
    }
  };

  render() {
    const { className, style, type } = this.props;
    return (
      <div aria-busy="true" className={className} style={style}>
        {this.svgRenderer(type)}
      </div>
    );
  }
}
