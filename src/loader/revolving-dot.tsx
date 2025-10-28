import React, { FunctionComponent, ReactElement } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the RevolvingDot loader component.
 * 
 * The RevolvingDot loader shows a dot that revolves around a circular path.
 * 
 * @interface RevolvingDotProps
 */
interface RevolvingDotProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Accessible label announced to screen readers. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: { [key: string]: string }
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
  radius?: number
  secondaryColor?: string
  strokeWidth?: number
}

export const RevolvingDot: FunctionComponent<RevolvingDotProps> = ({
  radius = 45,
  strokeWidth = 5,
  color = DEFAULT_COLOR,
  secondaryColor,
  ariaLabel = 'revolving-dot-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}): ReactElement => (
  <SvgWrapper
    style={wrapperStyle}
    $visible={visible}
    className={wrapperClass}
    aria-label={ariaLabel}
    data-testid="revolving-dot-loading"
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      version="1.1"
      width={`calc(${radius} * 2.5)`}
      height={`calc(${radius} * 2.5)`}
      xmlns={SVG_NAMESPACE}
      x="0px"
      y="0px"
      data-testid="revolving-dot-svg"
    >
      <circle
        fill="none"
        stroke={secondaryColor || color}
        strokeWidth={strokeWidth}
        cx={`calc(${radius} * 1.28)`}
        cy={`calc(${radius} * 1.28)`}
        r={radius}
        style={{ opacity: 0.5 }}
      />
      <circle
        fill={color}
        stroke={color}
        strokeWidth="3"
        cx={`calc(${radius} * 1.28)`}
        cy={`calc(${radius} / 3.5)`}
        r={`calc(${radius} / 5)`}
        style={{ transformOrigin: '50% 50%' }}
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0"
          to="360"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </SvgWrapper>
)
