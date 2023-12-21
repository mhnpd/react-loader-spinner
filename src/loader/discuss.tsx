import React, { FunctionComponent } from 'react'
import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

interface DiscussProps extends Omit<BaseProps, 'color'> {
  colors?: [string, string]
}

export const Discuss: FunctionComponent<DiscussProps> = ({
  visible = true,
  width = '80',
  height = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'discuss-loading',
  colors = ['#ff727d', '#ff727d'],
}) => {
  return !visible ? null : (
    <svg
      width={width}
      height={height}
      xmlns={SVG_NAMESPACE}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={ariaLabel}
      data-testid="discuss-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <path
        fill="none"
        d="M82 50A32 32 0 1 1 23.533421623214014 32.01333190873183 L21.71572875253809 21.7157287525381 L32.013331908731814 23.53342162321403 A32 32 0 0 1 82 50"
        strokeWidth="5"
        stroke={colors[0]}
      ></path>
      <circle
        cx="50"
        cy="50"
        fill="none"
        strokeLinecap="round"
        r="20"
        strokeWidth="5"
        stroke={colors[1]}
        strokeDasharray="31.41592653589793 31.41592653589793"
        transform="rotate(96 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  )
}
