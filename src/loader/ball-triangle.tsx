import { FunctionComponent, ReactElement, CSSProperties } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the BallTriangle loader component.
 * 
 * The BallTriangle loader displays three animated balls positioned at the corners
 * of a triangle. Each ball moves in a circular path, creating a dynamic triangular
 * loading animation with smooth rotation and scaling effects.
 * 
 * @interface BallTriangleProps
 */
interface BallTriangleProps {
  /** Height of the SVG (number interpreted as px). Defaults to 100. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to 100. */
  width?: string | number
  /** Primary color applied to the balls. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Radius of each ball in the triangle. Defaults to 5. */
  radius?: string | number
  /** Accessible label announced to screen readers. Defaults to 'ball-triangle-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
}

export const BallTriangle: FunctionComponent<BallTriangleProps> = ({
  height = 100,
  width = 100,
  radius = 5,
  color = DEFAULT_COLOR,
  ariaLabel = 'ball-triangle-loading',
  wrapperClass,
  wrapperStyle,
  visible = true,
}): ReactElement => (
  <SvgWrapper
    style={{ ...wrapperStyle }}
    $visible={visible}
    className={wrapperClass}
    data-testid="ball-triangle-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      height={height}
      width={width}
      stroke={color}
      viewBox="0 0 57 57"
      xmlns={SVG_NAMESPACE}
      data-testid="ball-triangle-svg"
    >
      <title>Ball Triangle</title>
      <desc>Animated representation of three balls</desc>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle cx="5" cy="50" r={radius}>
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              values="50;5;50;50"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              begin="0s"
              dur="2.2s"
              values="5;27;49;5"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27" cy="5" r={radius}>
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              from="5"
              to="5"
              values="5;50;50;5"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              begin="0s"
              dur="2.2s"
              from="27"
              to="27"
              values="27;49;5;27"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="49" cy="50" r={radius}>
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              values="50;50;5;50"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              from="49"
              to="49"
              begin="0s"
              dur="2.2s"
              values="49;5;27;49"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  </SvgWrapper>
)
