import React, { FunctionComponent } from 'react'
import { DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the ProgressBar loader component.
 * 
 * The ProgressBar loader displays a horizontal progress bar animation.
 * 
 * @interface ProgressBarProps
 */
interface ProgressBarProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. */
  color?: string
  /** Color of the progress bar border. Defaults to '#F4442E'. */
  borderColor?: string
  /** Color of the progress bar fill. Defaults to '#51E5FF'. */
  barColor?: string
  /** Accessible label announced to screen readers. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: React.CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
  /** 
   * Provide multiple colors to render a gradient instead of a solid color.
   * When 2 or more colors are supplied a gradient will be applied to the loader.
   */
  colors?: string[]
  /** Type of gradient (linear or radial). Defaults to linear. */
  gradientType?: 'linear' | 'radial'
  /** Angle (in degrees) applied via rotate() transform for linear gradients. */
  gradientAngle?: number
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  visible = true,
  height = '80',
  width = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'progress-bar-loading',
  borderColor = '#F4442E',
  barColor = '#51E5FF',
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
      data-testid="progress-bar-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <defs>
        <clipPath
          x="0"
          y="0"
          width="100"
          height="100"
          id="lds-progress-cpid-5009611b8a418"
        >
          <rect x="0" y="0" width="66.6667" height="100">
            <animate
              attributeName="width"
              calcMode="linear"
              values="0;100;100"
              keyTimes="0;0.5;1"
              dur="1"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="x"
              calcMode="linear"
              values="0;0;100"
              keyTimes="0;0.5;1"
              dur="1"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </clipPath>
      </defs>
      <path
        fill="none"
        strokeWidth="2.7928"
        d="M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z"
        stroke={borderColor}
      ></path>
      <path
        d="M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z"
        fill={barColor}
        clipPath="url(#lds-progress-cpid-5009611b8a418)"
      ></path>
    </svg>
  )
}
