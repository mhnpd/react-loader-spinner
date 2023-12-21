import React, { FunctionComponent } from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SVG_NAMESPACE } from '../shared/constants'

type FallingLinesProps = {
  color?: string
  width?: string
  height?: string
  visible?: boolean
}

export const FallingLines: FunctionComponent<FallingLinesProps> = ({
  color = DEFAULT_COLOR,
  width = '100',
  visible = true,
}): React.ReactElement | null => {
  return visible ? (
    <svg
      xmlns={SVG_NAMESPACE}
      width={width}
      height={width}
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
