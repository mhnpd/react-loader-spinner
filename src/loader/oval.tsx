import { FunctionComponent, ReactElement, CSSProperties } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'

/**
 * Props for the Oval loader component.
 * 
 * The Oval loader displays a circular loading animation with two arcs:
 * a full circle in the background and a quarter circle that rotates to show progress.
 * The animation creates a smooth spinning effect.
 * 
 * @interface OvalProps
 */
interface OvalProps {
  /** Height of the SVG (number interpreted as px). Defaults to 80. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to 80. */
  width?: string | number
  /** Primary color applied to the rotating arc. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Stroke width of the rotating arc. Defaults to 2. */
  strokeWidth?: string | number
  /** Stroke width of the background circle. Uses strokeWidth if not provided. */
  strokeWidthSecondary?: string | number
  /** Color of the background circle. Defaults to DEFAULT_COLOR. */
  secondaryColor?: string
  /** Duration of the rotation animation in seconds. Defaults to 1. */
  animationDuration?: string | number
  /** Accessible label announced to screen readers. Defaults to 'oval-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
}

/**
 * The radius of the circle
 * The Loader size is set with the width and height of the SVG
 * @type {number}
 */
const RADIUS = 20

/**
 * Compute Path depending on circle radius
 * The structure with radius 20 is "M20 0c0-9.94-8.06-20-20-20"
 * @param radius of the circle radius default 20
 * @returns {string}
 */
const getPath = (radius: number): string => {
  return ['M' + radius + ' 0c0-9.94-8.06', radius, radius, radius].join('-')
}
/**
 * Compute the size of the view box depending on the radius and Stroke-Width
 * @param strokeWidth Stroke-Width of the full circle
 * @param secondaryStrokeWidth Stroke-Width of the 1/4 circle
 * @param radius radius of the circle
 * @returns {string}
 */
const getViewBoxSize = (
  strokeWidth: number,
  secondaryStrokeWidth: number,
  radius: number
): string => {
  const maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth)
  const startingPoint = -radius - maxStrokeWidth / 2 + 1
  const endpoint = radius * 2 + maxStrokeWidth
  return [startingPoint, startingPoint, endpoint, endpoint].join(' ')
}

export const Oval: FunctionComponent<OvalProps> = ({
  height = 80,
  width = 80,
  color = DEFAULT_COLOR,
  secondaryColor = DEFAULT_COLOR,
  ariaLabel = 'oval-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
  strokeWidth = 2,
  strokeWidthSecondary,
  animationDuration = 1,
}): ReactElement => (
  <SvgWrapper
    style={wrapperStyle}
    $visible={visible}
    className={wrapperClass}
    data-testid="oval-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      width={width}
      height={height}
      viewBox={getViewBoxSize(
        Number(strokeWidth),
        Number(strokeWidthSecondary || strokeWidth),
        RADIUS
      )}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      data-testid="oval-svg"
    >
      <g fill="none" fillRule="evenodd">
        <g
          transform="translate(1 1)"
          strokeWidth={Number(strokeWidthSecondary || strokeWidth)}
          data-testid="oval-secondary-group"
        >
          <circle
            strokeOpacity=".5"
            cx="0"
            cy="0"
            r={RADIUS}
            stroke={secondaryColor}
            strokeWidth={strokeWidth}
          />
          <path d={getPath(RADIUS)}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur={`${animationDuration}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  </SvgWrapper>
)
