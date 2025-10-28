import React, { useCallback, FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'
import { SvgWrapper } from '../shared/svg-wrapper'

/**
 * Props for the RotatingLines loader component.
 * 
 * The RotatingLines loader displays rotating lines in a circular pattern.
 * 
 * @interface RotatingLinesProps
 */
interface RotatingLinesProps {
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
  /** Stroke width of the rotating lines. */
  strokeWidth?: string | number
  /** Duration of the rotation animation in seconds. */
  animationDuration?: string | number
  /** Color of the stroke for the lines. */
  strokeColor?: string
}

const POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

const spin = keyframes`
to {
   transform: rotate(360deg);
 }
`

const Svg = styled.svg<{ $animationDuration: string | number }>`
  animation: ${spin} ${props => (String(props.$animationDuration).endsWith('s') ? String(props.$animationDuration) : `${props.$animationDuration}s`)} steps(12, end) infinite;
`

const Polyline = styled.polyline<{ $strokeWidth: string | number }>`
  stroke-width: ${props => `${props.$strokeWidth}px`};
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`

export const RotatingLines: FunctionComponent<RotatingLinesProps> = ({
  height = 96,
  width = 96,
  color = DEFAULT_COLOR,
  strokeWidth = 5,
  animationDuration = 0.75,
  strokeColor,
  visible = true,
  ariaLabel = 'rotating-lines-loading',
  wrapperStyle,
  wrapperClass,
}): React.ReactElement | null => {
  const lines = useCallback(
    () =>
      POINTS.map(point => (
        <Polyline
          key={point}
          points="24,12 24,4"
          $strokeWidth={strokeWidth}
          transform={`rotate(${point}, 24, 24)`}
        />
      )),
    [strokeWidth]
  )

  if (!visible) return null

  return (
    <SvgWrapper
      style={wrapperStyle}
      $visible={visible}
      className={wrapperClass}
      aria-label={ariaLabel}
      data-testid="rotating-lines-loading"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <Svg
        xmlns={SVG_NAMESPACE}
        viewBox="0 0 48 48"
        width={width}
        height={height}
        stroke={strokeColor ?? color}
        $animationDuration={animationDuration}
        speed={String(animationDuration)}
        aria-label={ariaLabel}
        data-testid="rotating-lines-svg"
        {...DEFAULT_WAI_ARIA_ATTRIBUTE}
      >
        {lines()}
      </Svg>
    </SvgWrapper>
  )
}
