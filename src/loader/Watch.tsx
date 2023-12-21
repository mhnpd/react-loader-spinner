import React, { FunctionComponent } from 'react'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

interface WatchProps extends BaseProps {
  radius?: string | number
}

export const Watch: FunctionComponent<WatchProps> = ({
  height = 80,
  width = 80,
  radius = 48,
  color = DEFAULT_COLOR,
  ariaLabel = 'watch-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}) => (
  <SvgWrapper
    style={wrapperStyle}
    $visible={visible}
    className={wrapperClass}
    data-testid="watch-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      width={width}
      height={height}
      version="1.1"
      id="L2"
      xmlns={SVG_NAMESPACE}
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
      data-testid="watch-svg"
    >
      <circle
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
        cx="50"
        cy="50"
        r={radius}
      />
      <line
        fill="none"
        strokeLinecap="round"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
        x1="50"
        y1="50"
        x2="85"
        y2="50.5"
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </line>
      <line
        fill="none"
        strokeLinecap="round"
        stroke={color}
        strokeWidth="4"
        strokeMiterlimit="10"
        x1="50"
        y1="50"
        x2="49.5"
        y2="74"
      >
        <animateTransform
          attributeName="transform"
          dur="15s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  </SvgWrapper>
)
