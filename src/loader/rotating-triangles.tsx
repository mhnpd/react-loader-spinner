import React, { FunctionComponent } from 'react'
import { DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the RotatingTriangles loader component.
 * 
 * The RotatingTriangles loader displays multiple triangles rotating around a center point.
 * 
 * @interface RotatingTrianglesProps
 */
interface RotatingTrianglesProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. */
  color?: string
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

export const RotatingTriangles: FunctionComponent<RotatingTrianglesProps> = ({
  visible = true,
  height = '80',
  width = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'rotating-triangle-loading',
  colors = ['#1B5299', '#EF8354', '#DB5461'],
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
      data-testid="rotating-triangle-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <g transform="translate(50,42)">
        <g transform="scale(0.8)">
          <g transform="translate(-50,-50)">
            <polygon
              points="72.5,50 50,11 27.5,50 50,50"
              fill={colors[0]}
              transform="rotate(186 50 38.5)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 38.5;360 50 38.5"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </polygon>
            <polygon
              points="5,89 50,89 27.5,50"
              fill={colors[1]}
              transform="rotate(186 27.5 77.5)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 27.5 77.5;360 27.5 77.5"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </polygon>
            <polygon
              points="72.5,50 50,89 95,89"
              fill={colors[2]}
              transform="rotate(186 72.2417 77.5)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 72.5 77.5;360 72 77.5"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </polygon>
          </g>
        </g>
      </g>
    </svg>
  )
}
