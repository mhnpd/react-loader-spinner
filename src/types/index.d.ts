import React from "react"
import * as Audio from '../loader/Audio';
import * as BallTriangle from '../loader/BallTriangle';
import * as Bars from '../loader/Bars';
import * as Circles from '../loader/Circles';
import * as Grid from '../loader/Grid';
import * as Hearts from '../loader/Hearts';
import * as Oval from '../loader/Oval';
import * as Puff from '../loader/Puff';
import * as Rings from '../loader/Rings';
import * as TailSpin from '../loader/TailSpin';
import * as ThreeDots from '../loader/ThreeDots';
import * as Watch from '../loader/Watch';
import * as RevolvingDot from '../loader/RevolvingDot';
import * as Triangle from '../loader/Triangle';
import * as Plane from '../loader/Plane';
import * as MutatingDots from '../loader/MutatingDots';
import * as CradleLoader from '../loader/CradleLoader';// Main Interface for the props
import { OldLoaderProps } from "./types";

declare module "react-loader-spinner" {
  export const Loader: React.FC<OldLoaderProps>;
}
