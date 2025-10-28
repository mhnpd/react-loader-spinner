import React from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE, Style } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the CirclesWithBar loader component.
 * 
 * The CirclesWithBar loader displays two circles rotating in opposite directions
 * with animated wave bars inside. The outer circle, inner circle, and bar colors
 * can be customized independently for a dynamic loading animation.
 * 
 * @interface CirclesWithBarProps
 */
interface CirclesWithBarProps {
  /** Height of the SVG (number interpreted as px). Defaults to 100. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to 100. */
  width?: string | number
  /** Primary color applied to the default elements. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Color of the outer rotating circle. Overrides default color. */
  outerCircleColor?: string
  /** Color of the inner rotating circle. Overrides default color. */
  innerCircleColor?: string
  /** Color of the animated wave bars. Overrides default color. */
  barColor?: string
  /** Accessible label announced to screen readers. Defaults to 'circles-with-bar-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: Style
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
  /** 
   * Provide multiple colors to render a gradient instead of solid colors.
   * When 2 or more colors are supplied a gradient will be applied to the elements.
   */
  colors?: string[]
  /** Type of gradient (linear or radial). Defaults to linear. */
  gradientType?: 'linear' | 'radial'
  /** Angle (in degrees) applied via rotate() transform for linear gradients. */
  gradientAngle?: number
}

/**
 * @description contains two circles rotating in opposite direction
 * and a wave bars. outer circle, inner circle and bar
 * color can be set from props.
 */
export const CirclesWithBar: React.FunctionComponent<CirclesWithBarProps> = ({
  wrapperStyle = {},
  visible = true,
  wrapperClass = '',
  height = 100,
  width = 100,
  color = DEFAULT_COLOR,
  outerCircleColor,
  innerCircleColor,
  barColor,
  ariaLabel = 'circles-with-bar-loading',
}): React.ReactElement => {
  return (
    <SvgWrapper
      style={wrapperStyle}
      $visible={visible}
      className={wrapperClass}
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
      data-testid="circles-with-bar-wrapper"
    >
      <svg
        version="1.1"
        id="L1"
        xmlns={SVG_NAMESPACE}
        x="0px"
        y="0px"
        height={`${height}`}
        width={`${width}`}
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        data-testid="circles-with-bar-svg"
      >
        <title>circles-with-bar-loading</title>
        <desc>Animated representation of circles with bar</desc>
        <circle
          fill="none"
          stroke={`${outerCircleColor || color}`} // color
          strokeWidth="6"
          strokeMiterlimit="15"
          strokeDasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          fill="none"
          stroke={`${innerCircleColor || color}`}
          strokeWidth="1"
          strokeMiterlimit="10"
          strokeDasharray="10,10"
          cx="50"
          cy="50"
          r="39"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <g fill={`${barColor || color}`} data-testid="circles-with-bar-svg-bar">
          <rect x="30" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.1"
            />
          </rect>
          <rect x="40" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.2"
            />
          </rect>
          <rect x="50" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            />
          </rect>
          <rect x="60" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.4"
            />
          </rect>
          <rect x="70" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.5"
            />
          </rect>
        </g>
      </svg>
    </SvgWrapper>
  )
}
