import React from 'react'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

export interface FallingLinesProps extends Pick<BaseProps, 'color' | 'visible'> {
  width?: string
  height?: string
}

const FallingLines = ({
  color = DEFAULT_COLOR,
  width = '100',
  height = '100',
  visible = true,
}: FallingLinesProps): React.ReactElement | null => {
  return visible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      data-testid="falling-lines"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <rect
        y="25"
        width="10"
        height="50"
        rx="4"
        ry="4"
        fill={color}
        data-testid="falling-lines-rect-1"
      >
        <animate
          attributeName="x"
          values="10;100"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 70"
          to="-60 100 70"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect y="25" width="10" height="50" rx="4" ry="4" fill={color}>
        <animate
          attributeName="x"
          values="10;100"
          dur="1.2s"
          begin="0.4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 70"
          to="-60 100 70"
          dur="1.2s"
          begin="0.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          begin="0.4s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        y="25"
        width="10"
        height="50"
        rx="4"
        ry="4"
        fill={color}
        data-testid="falling-lines-rect-2"
      >
        <animate
          attributeName="x"
          values="10;100"
          dur="1.2s"
          begin="0.8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 10 70"
          to="-60 100 70"
          dur="1.2s"
          begin="0.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          begin="0.8s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  ) : null
}

export default FallingLines
