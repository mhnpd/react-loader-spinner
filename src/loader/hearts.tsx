import { FunctionComponent, CSSProperties } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'

/**
 * Props for the Hearts loader component.
 * 
 * The Hearts loader displays three animated heart shapes that pulsate and fade
 * in and out with different timing to create a romantic loading animation.
 * Each heart scales and changes opacity in a staggered pattern.
 * 
 * @interface HeartsProps
 */
interface HeartsProps {
  /** Height of the SVG (number interpreted as px). Defaults to 80. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to 80. */
  width?: string | number
  /** Primary color applied to the hearts. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Accessible label announced to screen readers. Defaults to 'hearts-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
}

export const Hearts: FunctionComponent<HeartsProps> = ({
  height = 80,
  width = 80,
  color = DEFAULT_COLOR,
  ariaLabel = 'hearts-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}) => (
  <SvgWrapper
    style={wrapperStyle}
    $visible={visible}
    className={wrapperClass}
    data-testid="hearts-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 64"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      data-testid="hearts-svg"
    >
      <path
        d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z"
        attributeName="fill-opacity"
        from="0"
        to=".5"
      >
        <animate
          attributeName="fill-opacity"
          begin="0s"
          dur="1.4s"
          values="0.5;1;0.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z"
        attributeName="fill-opacity"
        from="0"
        to=".5"
      >
        <animate
          attributeName="fill-opacity"
          begin="0.7s"
          dur="1.4s"
          values="0.5;1;0.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </path>
      <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
    </svg>
  </SvgWrapper>
)
