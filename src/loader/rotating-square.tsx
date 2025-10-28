import { CSSProperties } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE, Style } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the RotatingSquare loader component.
 * 
 * The RotatingSquare loader displays a square with rotating animation.
 * 
 * @interface RotatingSquareProps
 */
interface RotatingSquareProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. */
  color?: string
  /** Stroke width of the square outline. Affects the thickness of the square border. */
  strokeWidth?: string | number
  /** Accessible label announced to screen readers. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: Style
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

export const RotatingSquare: React.FunctionComponent<RotatingSquareProps> = ({
  wrapperClass = '',
  color = DEFAULT_COLOR,
  height = 100,
  width = 100,
  strokeWidth = 4,
  ariaLabel = 'rotating-square-loading',
  wrapperStyle = {},
  visible = true,
}): React.ReactElement => {
  return (
    <SvgWrapper
      style={wrapperStyle}
      $visible={visible}
      className={wrapperClass}
      data-testid="rotating-square-wrapper"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        version="1.1"
        xmlns={SVG_NAMESPACE}
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        height={`${height}`}
        width={`${width}`}
        data-testid="rotating-square-svg"
        xmlSpace="preserve"
      >
        <rect
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          x="25"
          y="25"
          width="50"
          height="50"
        >
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          />
        </rect>
        <rect x="27" y="27" fill={color} width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          />
        </rect>
      </svg>
    </SvgWrapper>
  )
}
