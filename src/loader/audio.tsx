import React, { FunctionComponent, ReactElement } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the Audio loader component.
 * 
 * The Audio loader displays an animated visualization similar to audio equalizer bars,
 * with four vertical bars that animate up and down at different intervals to create
 * a dynamic audio visualization effect.
 * 
 * @interface AudioProps
 */
interface AudioProps {
  /** Height of the SVG (number interpreted as px). Defaults to '100'. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to '100'. */
  width?: string | number
  /** Primary color applied to the audio bars. Defaults to DEFAULT_COLOR. */
  color?: string
  /** Accessible label announced to screen readers. Defaults to 'audio-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: React.CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
}

export const Audio: FunctionComponent<AudioProps> = ({
  height = '100',
  width = '100',
  color = DEFAULT_COLOR,
  ariaLabel = 'audio-loading',
  wrapperStyle = {},
  wrapperClass,
  visible = true,
}): ReactElement => (
  <SvgWrapper
    $visible={visible}
    style={{ ...wrapperStyle }}
    className={wrapperClass}
    data-testid="audio-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      height={`${height}`}
      width={`${width}`}
      fill={color}
      viewBox="0 0 55 80"
      xmlns={SVG_NAMESPACE}
      data-testid="audio-svg"
    >
      <title>Audio Visualization</title>
      <desc>Animated representation of audio data</desc>
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect width="10" height="20" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="4.3s"
            values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="15" width="10" height="80" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="30" width="10" height="50" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="1.4s"
            values="50;34;78;23;56;23;34;76;80;54;21;50"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="45" width="10" height="30" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="30;45;13;80;56;72;45;76;34;23;67;30"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  </SvgWrapper>
)
