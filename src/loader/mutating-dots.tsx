import React, { FunctionComponent } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'

/**
 * Props for the MutatingDots loader component.
 * 
 * The MutatingDots loader shows dots that mutate and change in size and position.
 * 
 * @interface MutatingDotsProps
 */
interface MutatingDotsProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. Defaults to DEFAULT_COLOR. */
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
  radius?: string | number
  secondaryColor?: string
}

export const MutatingDots: FunctionComponent<MutatingDotsProps> = ({
  height = 90,
  width = 80,
  radius = 12.5,
  color = DEFAULT_COLOR,
  secondaryColor = DEFAULT_COLOR,
  ariaLabel = 'mutating-dots-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}) => (
  <SvgWrapper
    style={wrapperStyle}
    $visible={visible}
    className={wrapperClass}
    data-testid="mutating-dots-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      id="goo-loader"
      width={width}
      height={height}
      data-testid="mutating-dots-svg"
    >
      <filter id="fancy-goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
      <g filter="url(#fancy-goo)">
        <animateTransform
          id="mainAnim"
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="359 50 50"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <circle cx="50%" cy="40" r={radius} fill={color}>
          <animate
            id="cAnim1"
            attributeType="XML"
            attributeName="cy"
            dur="0.6s"
            begin="0;cAnim1.end+0.2s"
            calcMode="spline"
            values="40;20;40"
            keyTimes="0;0.3;1"
            keySplines="0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
          />
        </circle>
        <circle cx="50%" cy="60" r={radius} fill={secondaryColor}>
          <animate
            id="cAnim2"
            attributeType="XML"
            attributeName="cy"
            dur="0.6s"
            begin="0.4s;cAnim2.end+0.2s"
            calcMode="spline"
            values="60;80;60"
            keyTimes="0;0.3;1"
            keySplines="0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
          />
        </circle>
      </g>
    </svg>
  </SvgWrapper>
)
