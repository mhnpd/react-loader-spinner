import React, { FunctionComponent, ReactElement } from 'react'
import { getDefaultStyle } from '../helpers'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface RevolvingDotProps extends BaseProps {
  radius?: number
  secondaryColor?: string
  strokeWidth?: number
}

const RevolvingDot: FunctionComponent<RevolvingDotProps> = ({
  radius = 45,
  strokeWidth = 5,
  color = DEFAULT_COLOR,
  secondaryColor,
  ariaLabel = 'revolving-dot-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}): ReactElement => (
  <div
    style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
    className={wrapperClass}
    aria-label={ariaLabel}
    data-testid="revolving-dot-loading"
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      version="1.1"
      width={`calc(${radius} * 2.5)`}
      height={`calc(${radius} * 2.5)`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      data-testid="revolving-dot-svg"
    >
      <circle
        fill="none"
        stroke={secondaryColor || color}
        strokeWidth={strokeWidth}
        cx={`calc(${radius} * 1.28)`}
        cy={`calc(${radius} * 1.28)`}
        r={radius}
        style={{ opacity: 0.5 }}
      />
      <circle
        fill={color}
        stroke={color}
        strokeWidth="3"
        cx={`calc(${radius} * 1.28)`}
        cy={`calc(${radius} / 3.5)`}
        r={`calc(${radius} / 5)`}
        style={{ transformOrigin: '50% 50%' }}
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0"
          to="360"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
)

export default RevolvingDot
