import React from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the LineWave loader component.
 * 
 * The LineWave loader displays animated lines creating a wave effect.
 * 
 * @interface LineWaveProps
 */
interface LineWaveProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Primary color applied to the loader. */
  color?: string
  /** Color of the first line in the wave. Overrides default color. */
  firstLineColor?: string
  /** Color of the middle line in the wave. Overrides default color. */
  middleLineColor?: string
  /** Color of the last line in the wave. Overrides default color. */
  lastLineColor?: string
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
}

/**
 * @description contains three lines in a wave motion
 * line colors are changeable
 */
export const LineWave: React.FunctionComponent<LineWaveProps> = ({
  wrapperStyle = {},
  visible = true,
  wrapperClass = '',
  height = 100,
  width = 100,
  color = DEFAULT_COLOR,
  ariaLabel = 'line-wave-loading',
  firstLineColor,
  middleLineColor,
  lastLineColor,
}): React.ReactElement => {
  return (
    <SvgWrapper
      style={wrapperStyle}
      $visible={visible}
      className={wrapperClass}
      data-testid="line-wave-wrapper"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        version="1.1"
        height={`${height}`}
        width={`${width}`}
        xmlns={SVG_NAMESPACE}
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        data-testid="line-wave-svg"
      >
        <rect
          x="20"
          y="50"
          width="4"
          height="10"
          fill={firstLineColor || color} /** First bar */
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="30"
          y="50"
          width="4"
          height="10"
          fill={middleLineColor || color}
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="40"
          y="50"
          width="4"
          height="10"
          fill={lastLineColor || color} /** last bar */
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </SvgWrapper>
  )
}
