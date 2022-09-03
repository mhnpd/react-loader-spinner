import React, { FunctionComponent, ReactElement } from 'react'
import { getDefaultStyle } from '../helpers'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface RevolvingDotProps extends BaseProps {
  radius?: string | number
  secondaryColor?: string
  strokeWidth?: string | number
}

const RevolvingDot: FunctionComponent<RevolvingDotProps> = ({
  height = 100,
  width = 100,
  radius = 6,
  strokeWidth = 4,
  color = DEFAULT_COLOR,
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
        stroke={color}
        strokeWidth={strokeWidth}
        // cx={`calc(${width} / 2)`}
        // cy={`calc(${height} / 2)`}
        cx={`calc(${radius} * 1.28)`}
        cy={`calc(${radius} * 1.28)`}
        // r={Number(`${radius}`) + 38}
        r={radius}
        style={{ opacity: 0.5 }}
      />
      <circle
        fill={color}
        stroke={color}
        strokeWidth="3"
        // cx="8"
        // cy="54"
        //==============================
        //=============================
        // cx={`calc(${width} / 2)`}
        // cy={`calc(${radius} * 2)`}

        // cy={`calc(${radius} / 3)`}
        // r={`calc(${radius} / 3.5)`}
        cx={`calc(${radius} * 1.28)`}
        cy={`calc(${radius} / 3.5)`}
        r={`calc(${radius} / 5)`}
        style={{ transformOrigin: '50% 50%' }}
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          // from="0 50 48"
          // to="360 50 52"
          from="0"
          to="360"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
)

export default RevolvingDot
