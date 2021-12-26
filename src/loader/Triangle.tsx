import React, { FunctionComponent } from 'react'

import './css/Triangle.css'
import { Style } from '../type'

interface TraingleProps {
  height: string | number,
  width: string | number,
  color: string,
  secondaryColor: string,
  arialLabel?: string,
  wrapperStyle?: Style,
  wrapperClass?: string,
  visible?: boolean
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const Triangle: FunctionComponent<TraingleProps> = ({
  height = 80,
  width = 80,
  color = 'green',
  arialLabel = 'tail-spin-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}) => (
  <div
    role="presentation"
    style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
    className={`react-spinner-loader-svg ${wrapperClass}`}
  >
    <svg
      id="triangle"
      width={width}
      height={height}
      viewBox="-3 -4 39 39"
      aria-label={arialLabel}
    >
      <polygon fill="transparent" stroke={color} strokeWidth="1" points="16,0 32,32 0,32"/>
    </svg>
  </div>
)

export default Triangle
