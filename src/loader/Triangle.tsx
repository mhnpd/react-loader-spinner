import React, { FunctionComponent } from 'react'

import './css/Triangle.css'
import { BaseProps, Style } from '../type'

interface TraingleProps extends BaseProps {}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const Triangle: FunctionComponent<TraingleProps> = ({
  height = 80,
  width = 80,
  color = 'green',
  arialLabel = 'trianle-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}) => (
  <div
    role="presentation"
    style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
    className={`react-spinner-loader-svg ${wrapperClass}`}
    data-testid="triangle-loading"
  >
    <svg
      id="triangle"
      width={width}
      height={height}
      viewBox="-3 -4 39 39"
      aria-label={arialLabel}
      data-testid="triangle-svg"
    >
      <polygon fill="transparent" stroke={color} strokeWidth="1" points="16,0 32,32 0,32"/>
    </svg>
  </div>
)

export default Triangle
