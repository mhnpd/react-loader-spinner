import React, { FunctionComponent, ReactElement } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the CircularProgress loader component.
 * 
 * The CircularProgress loader displays a circular progress indicator with customizable
 * stroke width and colors. Features a main circle with optional secondary background circle,
 * animated rotation, and configurable animation duration.
 * 
 * @interface CircularProgressProps
 */
interface CircularProgressProps {
  /** Height of the SVG (number interpreted as px). Defaults to '100'. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to '100'. */
  width?: string | number
  /** Primary color applied to the progress circle. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Stroke width of the progress circle. Affects the thickness of the circular line. */
  strokeWidth?: string | number
  /** Color of the background/secondary circle. Optional background indicator. */
  secondaryColor?: string
  /** Duration of the rotation animation in seconds. Controls animation speed. */
  animationDuration?: string | number
  /** Accessible label announced to screen readers. Defaults to 'circular-progress-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: { [key: string]: string }
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
  /** 
   * Provide multiple colors to render a gradient instead of a solid color.
   * When 2 or more colors are supplied a gradient will be applied to the progress circle.
   */
  colors?: string[]
  /** Type of gradient (linear or radial). Defaults to linear. */
  gradientType?: 'linear' | 'radial'
  /** Angle (in degrees) applied via rotate() transform for linear gradients. */
  gradientAngle?: number
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