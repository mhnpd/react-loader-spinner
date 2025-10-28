import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

interface CircularProgressProps extends BaseProps {
  strokeWidth?: string | number
  secondaryColor?: string
  animationDuration?: string | number
}

export const CircularProgress: FunctionComponent<CircularProgressProps> = ({
  height = '100',
  width = '100',
  color = DEFAULT_COLOR,
  secondaryColor,
  ariaLabel = 'circular-progress-loading',
  wrapperStyle = {},
  wrapperClass,
  visible = true,
  strokeWidth = 2,
  animationDuration = 1,
}): ReactElement => (
  <SvgWrapper
    $visible={visible}
    style={{ ...wrapperStyle }}
    className={wrapperClass}
    data-testid="circular-progress-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      height={`${height}`}
      width={`${width}`}
      fill="none"
      viewBox="0 0 16 16"
      xmlns={SVG_NAMESPACE}
      data-testid="circular-progress-svg"
      style={{
        animation: `spin ${animationDuration}s linear infinite`,
      }}
    >
      <title>Circular Progress</title>
      <desc>Animated circular progress indicator</desc>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* Background circle with opacity */}
      <path
        fill="none"
        stroke={secondaryColor || color}
        strokeWidth={strokeWidth}
        d="M3.05 3.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9Z"
        opacity="0.5"
      />
      {/* Inner filled circle */}
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        clipRule="evenodd"
      />
      {/* Progress arc */}
      <path
        fill={color}
        d="M14 8a6 6 0 0 0-6-6V0a8 8 0 0 1 8 8h-2Z"
      />
    </svg>
  </SvgWrapper>
)