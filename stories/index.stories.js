import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import Loader from "../src/index";
import "../src/loader/css/react-spinner-loader.css";

storiesOf("Loader", module)
  .addDecorator(centered)
  .add("Audio", () => <Loader width={200} height={200} color="red" type="Audio" />)
  .add("Ball Triangle", () => (
    <Loader width={200} height={300} color="#cef442" type="BallTriangle" />
  ))
  .add("Bars", () => <Loader width={200} height={200} color="green" type="Bars" />)
  .add("Circles", () => <Loader color="green" width={200} height={200} type="Circles" />)
  .add("Grid", () => <Loader color="green" width={200} height={200} type="Grid" />)
  .add("Hearts", () => <Loader color="green" width={200} height={200} type="Hearts" />)
  .add("Oval", () => <Loader className="test" color="green" width={200} height={200} type="Oval" />)
  .add("Puff", () => <Loader color="green" width={200} height={200} type="Puff" />)
  .add("Rings", () => <Loader color="green" width={200} height={200} type="Rings" />)
  .add("TailSpin", () => <Loader type="TailSpin" color="#939248" height="100" width="100" />)
  .add("ThreeDots", () => <Loader color="green" width={200} height={200} type="ThreeDots" />)
  .add("Watch", () => <Loader color="green" width={200} height={200} type="Watch" />)
  .add("RevolvingDot", () => <Loader color="green" width={200} height={200} type="RevolvingDot" />)
  .add("Triangle", () => <Loader color="green" width={200} height={200} type="Triangle" />)
  .add("Plane", () => <Loader color="#FFA500" width={200} height={200} type="Plane" />)
  .add("Mutating Dots", () => (
    <Loader color="#FFA500" width={100} height={100} type="MutatingDots" />
  ))

  .add("CradleLoader", () => <Loader color="green" width={200} height={200} type="CradleLoader" />)
  .add("None", () => <Loader color="green" width={200} height={200} type="  " />)
  .add("NotSpecified", () => <Loader color="green" width={200} height={200} />);
