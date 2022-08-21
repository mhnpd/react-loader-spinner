import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { getDefaultStyle } from '../helpers'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

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

type TriangleProps = BaseProps

const Triangle: FunctionComponent<TriangleProps> = ({
  height = 80,
  width = 80,
  color = DEFAULT_COLOR,
  ariaLabel = 'triangle-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}: TriangleProps): React.ReactElement => (
  <div
    style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
    className={`${wrapperClass}`}
    data-testid="triangle-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <SVG
      id="triangle"
      width={width}
      height={height}
      viewBox="-3 -4 39 39"
      data-testid="triangle-svg"
    >
      <Polygon
        fill="transparent"
        stroke={color}
        strokeWidth="1"
        points="16,0 32,32 0,32"
      />
    </SVG>
  </div>
)

export default Triangle
