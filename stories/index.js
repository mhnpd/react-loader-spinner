import React from "react";
import { storiesOf } from "@storybook/react";
import centered from '@storybook/addon-centered';

import Loader from "../src/index";

storiesOf("Loader", module)
  .addDecorator(centered)
  .add("Audio", () => <Loader width={200} height={200} type="Audio" visible="false" />)
  .add("Ball Triangle", () => (
    <Loader width={200} heigth={300} color="#cef442" type="Ball-Triangle" />
  ))
  .add("Bars", () => <Loader width={200} heigth={200} color="green" type="Bars" />)
  .add("Circles", () => <Loader color="green" width={200} heigth={200} type="Circles" />)
  .add("Grid", () => <Loader color="green" width={200} heigth={200} type="Grid" />)
  .add("Hearts", () => <Loader color="green" width={200} heigth={200} type="Hearts" />)
  .add("Oval", () => <Loader className="test" color="green" width={200} heigth={200} type="Oval" />)
  .add("Puff", () => <Loader color="green" width={200} heigth={200} type="Puff" />)
  .add("Rings", () => <Loader color="green" width={200} heigth={200} type="Rings" />)
  .add("TailSpin", () => (
    <div>
      {" "}
      <Loader color="#00BFFF" width={200} heigth={200} type="TailSpin" />{" "}
      <Loader type="TailSpin" color="#939248" height="100" width="100" />{" "}
    </div>
  ))
  .add("ThreeDots", () => <Loader color="green" width={200} heigth={200} type="ThreeDots" />)
  .add("Watch", () => <Loader color="green" width={200} heigth={200} type="Watch" />)
  .add("RevolvingDot", () => <Loader color="green" width={200} heigth={200} type="RevolvingDot" />)
  .add("Triangle", () => <Loader color="green" width={200} heigth={200} type="Triangle" />)
  .add("Plane", () => <Loader color="#FFA500" width={200} heigth={200} type="Plane" />)
  .add("Mutating Dots", () => (
    <Loader color="#FFA500" width={100} heigth={100} type="MutatingDot" />
  ))

  .add("CradleLoader", () => (
    <div style={{ margin: "100px" }}>
      <Loader color="green" width={200} heigth={200} type="CradleLoader" />
    </div>
  ))
  .add("NotSpecified", () => <Loader color="green" width={200} heigth={200} />);
