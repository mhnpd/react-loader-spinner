import React from 'react'

type Props = {
  color?: string
  width?: string
  height?: string
  visible?: boolean
}

const FallingLines = ({
  color = 'grey',
  width = '100',
  visible = true,
}: Props): React.ReactElement | null => {
  return visible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 100 100"
    >
      <rect y="25" width="10" height="50" rx="4" ry="4" fill={color}>
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
      <rect y="25" width="10" height="50" rx="4" ry="4" fill={color}>
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
