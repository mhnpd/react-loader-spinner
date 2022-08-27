import React from 'react'
import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface ColorRingProps extends Omit<BaseProps, 'color'> {
  colors?: [string, string, string, string, string]
}

export default function ColorRing({
  visible = true,
  width = '80',
  height = '80',
  colors = ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87'],
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'color-ring-loading',
}: ColorRingProps) {
  return !visible ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={ariaLabel}
      data-testid="color-ring-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <defs>
        <mask id="ldio-4offds5dlws-mask">
          <circle
            cx="50"
            cy="50"
            r="26"
            stroke="#fff"
            strokeLinecap="round"
            strokeDasharray="122.52211349000194 40.840704496667314"
            strokeWidth="9"
            transform="rotate(198.018 50 50)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
        </mask>
      </defs>
      <g mask="url(#ldio-4offds5dlws-mask)">
        <rect x="14.5" y="0" width="15" height="100" fill={colors[0]}>
          <animate
            attributeName="fill"
            values={colors.join(';').toString()}
            keyTimes="0;0.25;0.5;0.75;1"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.8s"
          ></animate>
        </rect>
        <rect x="28.5" y="0" width="15" height="100" fill={colors[1]}>
          <animate
            attributeName="fill"
            values={colors.join(';').toString()}
            keyTimes="0;0.25;0.5;0.75;1"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.6s"
          ></animate>
        </rect>
        <rect x="42.5" y="0" width="15" height="100" fill={colors[2]}>
          <animate
            attributeName="fill"
            values={colors.join(';').toString()}
            keyTimes="0;0.25;0.5;0.75;1"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.4s"
          ></animate>
        </rect>
        <rect x="56.5" y="0" width="15" height="100" fill={colors[3]}>
          <animate
            attributeName="fill"
            values={colors.join(';').toString()}
            keyTimes="0;0.25;0.5;0.75;1"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.2s"
          ></animate>
        </rect>
        <rect x="70.5" y="0" width="15" height="100" fill={colors[4]}>
          <animate
            attributeName="fill"
            values={colors.join(';').toString()}
            keyTimes="0;0.25;0.5;0.75;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
        </rect>
      </g>
    </svg>
  )
}
