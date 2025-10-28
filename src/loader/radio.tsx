import { FunctionComponent, CSSProperties } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the Radio loader component.
 * 
 * The Radio loader displays a circular animation with three colored segments
 * that rotate around the center, resembling radio waves or signal indicators.
 * Each segment can have a different color.
 * 
 * @interface RadioProps
 */
interface RadioProps {
  /** Height of the SVG (number interpreted as px). Defaults to '80'. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to '80'. */
  width?: string | number
  /** Array of three colors for the radio segments. Defaults to [DEFAULT_COLOR, DEFAULT_COLOR, DEFAULT_COLOR]. */
  colors?: [string, string, string]
  /** Accessible label announced to screen readers. Defaults to 'radio-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
}

export const Radio: FunctionComponent<RadioProps> = ({
  visible = true,
  height = '80',
  width = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'radio-loading',
  colors = [DEFAULT_COLOR, DEFAULT_COLOR, DEFAULT_COLOR],
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
      data-testid="radio-bar-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <circle cx="28" cy="75" r="11" fill={colors[0]}>
        <animate
          attributeName="fill-opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <path
        d="M28 47A28 28 0 0 1 56 75"
        fill="none"
        strokeWidth="10"
        stroke={colors[1]}
      >
        <animate
          attributeName="stroke-opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0.1s"
          repeatCount="indefinite"
        ></animate>
      </path>
      <path
        d="M28 25A50 50 0 0 1 78 75"
        fill="none"
        strokeWidth="10"
        stroke={colors[2]}
      >
        <animate
          attributeName="stroke-opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0.2s"
          repeatCount="indefinite"
        ></animate>
      </path>
    </svg>
  )
}
