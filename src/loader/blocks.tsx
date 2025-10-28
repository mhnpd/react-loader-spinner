import { FunctionComponent, ReactElement, CSSProperties } from 'react'
import { DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

/**
 * Props for the Blocks loader component.
 * 
 * The Blocks loader displays a grid of animated square blocks that appear and disappear
 * in a wave-like pattern. The blocks fill in with color sequentially to create
 * a dynamic loading animation resembling falling tetris blocks.
 * 
 * @interface BlocksProps
 */
interface BlocksProps {
  /** Height of the SVG (number interpreted as px). Defaults to '80'. */
  height?: string | number
  /** Width of the SVG (number interpreted as px). Defaults to '80'. */
  width?: string | number
  /** Primary color applied to the blocks. Can be overridden by colors array. */
  color?: string
  /** Accessible label announced to screen readers. Defaults to 'blocks-loading'. */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: CSSProperties
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. Defaults to true. */
  visible?: boolean
}

export const Blocks: FunctionComponent<BlocksProps> = ({
  visible = true,
  width = '80',
  height = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'blocks-loading',
}): ReactElement | null => {
  return !visible ? null : (
    <svg
      width={width}
      height={height}
      className={wrapperClass}
      style={wrapperStyle}
      xmlns={SVG_NAMESPACE}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      aria-label={ariaLabel}
      data-testid="blocks-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <title>Blocks</title>
      <desc>Animated representation of blocks</desc>
      <rect x="17" y="17" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="40" y="17" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.125s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="63" y="17" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.25s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="17" y="40" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.875s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="63" y="40" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.375s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="17" y="63" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.75s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="40" y="63" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.625s"
          calcMode="discrete"
        ></animate>
      </rect>
      <rect x="63" y="63" width="20" height="20" fill="#577c9b">
        <animate
          attributeName="fill"
          values="#0dceff;#577c9b;#577c9b"
          keyTimes="0;0.125;1"
          dur="1s"
          repeatCount="indefinite"
          begin="0.5s"
          calcMode="discrete"
        ></animate>
      </rect>
    </svg>
  )
}
