import React, { FunctionComponent, ReactElement } from 'react'
import { Style } from '../type'

interface RevolvingDotProps {
  height: string | number,
    width: string | number,
    radius: string | number,
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
export const RevolvingDot:FunctionComponent<RevolvingDotProps> = ({
  height = 80,
  width = 80,
  radius = 6,
  color = 'green',
  arialLabel = 'revolving-dot-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}):ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass}>

  <svg
    version="1.1"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    aria-label={arialLabel}
  >
    <circle
      fill="none"
      stroke={color}
      strokeWidth="4"
      cx="50"
      cy="50"
      r={Number(`${radius}`) + 38}
      style={{ opacity: 0.5 }}
    />
    <circle fill={color} stroke={color} strokeWidth="3" cx="8" cy="54" r={radius}>
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
  </div>
)
