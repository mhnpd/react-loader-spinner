
import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, Style } from '../type'

interface BlossomProps extends BaseProps { }

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const Blossom: FunctionComponent<BlossomProps> = ({
  height = '100',
  width = '100',
  color = 'blue',
  ariaLabel = 'blossom-loading',
  wrapperStyle = {},
  wrapperClass,
  visible = true
}): ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass} data-testid="audio-loading">
    <svg
      version="1.1"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 55 80"
      aria-label={ariaLabel}
      fill={color}
      stroke="red"
      strokeLinecap="round"
      data-testid="blossom-svg"
      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="r1">
          <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" />
          <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin" />
        </path>
        <path id="r2">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s" />
          <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s" />
        </path>
        <path id="r3">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s" />
          <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s" />
        </path>
        <path id="r4">
          <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s" />
          <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s" />
        </path>
        <path id="r5">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s" />
          <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s" />
        </path>
        <path id="r6">
          <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s" />
          <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s" />
        </path>
      </defs>
      <use xlinkHref="#r1" />
      <use xlinkHref="#r1" transform="rotate(60 160 160)" />
      <use xlinkHref="#r1" transform="rotate(120 160 160)" />
      <use xlinkHref="#r1" transform="rotate(180 160 160)" />
      <use xlinkHref="#r1" transform="rotate(240 160 160)" />
      <use xlinkHref="#r1" transform="rotate(300 160 160)" />
      <use xlinkHref="#r2" transform="rotate(30 160 160)" />
      <use xlinkHref="#r2" transform="rotate(90 160 160)" />
      <use xlinkHref="#r2" transform="rotate(150 160 160)" />
      <use xlinkHref="#r2" transform="rotate(210 160 160)" />
      <use xlinkHref="#r2" transform="rotate(270 160 160)" />
      <use xlinkHref="#r2" transform="rotate(330 160 160)" />
      <use xlinkHref="#r3" />
      <use xlinkHref="#r3" transform="rotate(60 160 160)" />
      <use xlinkHref="#r3" transform="rotate(120 160 160)" />
      <use xlinkHref="#r3" transform="rotate(180 160 160)" />
      <use xlinkHref="#r3" transform="rotate(240 160 160)" />
      <use xlinkHref="#r3" transform="rotate(300 160 160)" />
      <use xlinkHref="#r4" transform="rotate(30 160 160)" />
      <use xlinkHref="#r4" transform="rotate(90 160 160)" />
      <use xlinkHref="#r4" transform="rotate(150 160 160)" />
      <use xlinkHref="#r4" transform="rotate(210 160 160)" />
      <use xlinkHref="#r4" transform="rotate(270 160 160)" />
      <use xlinkHref="#r4" transform="rotate(330 160 160)" />
      <use xlinkHref="#r5" />
      <use xlinkHref="#r5" transform="rotate(60 160 160)" />
      <use xlinkHref="#r5" transform="rotate(120 160 160)" />
      <use xlinkHref="#r5" transform="rotate(180 160 160)" />
      <use xlinkHref="#r5" transform="rotate(240 160 160)" />
      <use xlinkHref="#r5" transform="rotate(300 160 160)" />
      <use xlinkHref="#r6" transform="rotate(30 160 160)" />
      <use xlinkHref="#r6" transform="rotate(90 160 160)" />
      <use xlinkHref="#r6" transform="rotate(150 160 160)" />
      <use xlinkHref="#r6" transform="rotate(210 160 160)" />
      <use xlinkHref="#r6" transform="rotate(270 160 160)" />
      <use xlinkHref="#r6" transform="rotate(330 160 160)" />
    </svg>
  </div>
)

export default Blossom
