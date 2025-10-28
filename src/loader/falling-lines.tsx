import { FunctionComponent, CSSProperties } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the FallingLines loader component.
 * 
 * The FallingLines loader displays animated vertical lines that fall down
 * in a cascading pattern, creating a rain-like loading animation effect.
 * 
 * @interface FallingLinesProps
 */
interface FallingLinesProps {
  /** Height of the SVG (number interpreted as px). Defaults to '100'. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to '100'. */
  width?: string | number
  /** Primary color applied to the falling lines. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Accessible label announced to screen readers. Defaults to 'falling-lines-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
  /** 
   * Provide multiple colors to render a gradient instead of a solid color.
   * When 2 or more colors are supplied a gradient will be applied to the lines.
   */
  colors?: string[]
  /** Type of gradient (linear or radial). Defaults to linear. */
  gradientType?: 'linear' | 'radial'
  /** Angle (in degrees) applied via rotate() transform for linear gradients. */
  gradientAngle?: number
}

export const FallingLines: FunctionComponent<FallingLinesProps> = ({
  color = DEFAULT_COLOR,
  width = '100',
  visible = true,
}): React.ReactElement | null => {
  return visible ? (
    <svg
      xmlns={SVG_NAMESPACE}
      width={width}
      height={width}
      viewBox="0 0 100 100"
      data-testid="falling-lines"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <rect
        y="25"
        width="10"
        height="50"
        rx="4"
        ry="4"
        fill={color}
        data-testid="falling-lines-rect-1"
      >
        <animate
          attributeName="x"
          values="10;100"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 70"
          to="-60 100 70"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
  <rect y="25" width="10" height="50" rx="4" ry="4" fill={color} opacity={0}>
        <animate
          attributeName="x"
          values="10;100"
          dur="1.2s"
          begin="0.4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 70"
          to="-60 100 70"
          dur="1.2s"
          begin="0.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          begin="0.4s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        y="25"
        width="10"
        height="50"
        rx="4"
        ry="4"
        fill={color}
        opacity={0}
        data-testid="falling-lines-rect-2"
      >
        <animate
          attributeName="x"
          values="10;100"
          dur="1.2s"
          begin="0.8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 70"
          to="-60 100 70"
          dur="1.2s"
          begin="0.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          begin="0.8s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  ) : null
}
