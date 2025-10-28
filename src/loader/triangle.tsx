import { FunctionComponent, CSSProperties } from 'react'
import styled, { keyframes } from 'styled-components'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the Triangle loader component.
 * 
 * The Triangle loader displays a triangular shape with animated elements.
 * 
 * @interface TriangleProps
 */
interface TriangleProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. */
  color?: string
  /** Accessible label announced to screen readers. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
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

const VIEW_BOX_VALUES = '-3 -4 39 39'
const POLYGON_POINTS = '16,0 32,32 0,32'

/** Styles */
const dash = keyframes`
to {
   stroke-dashoffset: 136;
 }
`
const Polygon = styled.polygon`
  stroke-dasharray: 17;
  animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`
const SVG = styled.svg`
  transform-origin: 50% 65%;
`
/** Styles Ends */

export const Triangle: FunctionComponent<TriangleProps> = ({
  height = 80,
  width = 80,
  color = DEFAULT_COLOR,
  ariaLabel = 'triangle-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}: TriangleProps): React.ReactElement => {
  return (
    <SvgWrapper
      style={wrapperStyle}
      $visible={visible}
      className={`${wrapperClass}`}
      data-testid="triangle-loading"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <SVG
        id="triangle"
        width={width}
        height={height}
        xmlns={SVG_NAMESPACE}
        viewBox={VIEW_BOX_VALUES}
        data-testid="triangle-svg"
      >
        <Polygon
          fill="transparent"
          stroke={color}
          strokeWidth="1"
          points={POLYGON_POINTS}
        />
      </SVG>
    </SvgWrapper>
  )
}
