import React from 'react'
import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface BlocksProps extends BaseProps {}

export default function Blocks({
  visible = true,
  width = '80',
  height = '80',
  wrapperClass='',
  wrapperStyle={},
  ariaLabel='blocks-loading',
}: BlocksProps) {
  return !visible ? null : (
    <svg
      width={width}
      height={height}
      className={wrapperClass}
      style={wrapperStyle}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      aria-label={ariaLabel}
      data-testid="blocks-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
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
