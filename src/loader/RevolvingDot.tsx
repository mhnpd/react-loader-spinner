import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, DEFAULT_COLOR, Style } from '../type'

interface RevolvingDotProps extends BaseProps {
  radius?: string | number,
  secondaryColor?: string,
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})
const RevolvingDot: FunctionComponent<RevolvingDotProps> = ({
  height = 100,
  width = 100,
  radius = 6,
  color = DEFAULT_COLOR,
  ariaLabel = 'revolving-dot-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}): ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass} data-testid="revolving-dot-loading">

    <svg
      version="1.1"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      aria-label={ariaLabel}
      data-testid="revolving-dot-svg"
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

export default RevolvingDot
