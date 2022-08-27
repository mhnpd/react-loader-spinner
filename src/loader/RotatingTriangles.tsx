import React from 'react'
import { BaseProps,  DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface RotatingTrianglesProps extends Omit<BaseProps, 'color'> {
  colors?: [string, string, string],
}

export default function RotatingTriangles({
  visible = true,
  height = '80',
  width = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'rotating-triangle-loading',
  colors= ['#1B5299', '#EF8354', '#DB5461'],
}: RotatingTrianglesProps) {
  return !visible ? null : (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={ariaLabel}
      data-testid='rotating-triangle-svg'
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <g transform="translate(50,42)">
        <g transform="scale(0.8)">
          <g transform="translate(-50,-50)">
            <polygon
              ng-attr-fill="{{config.c1}}"
              points="72.5,50 50,11 27.5,50 50,50"
              fill={colors[0]}
              transform="rotate(186 50 38.5)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 38.5;360 50 38.5"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </polygon>
            <polygon
              ng-attr-fill="{{config.c2}}"
              points="5,89 50,89 27.5,50"
              fill={colors[1]}
              transform="rotate(186 27.5 77.5)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 27.5 77.5;360 27.5 77.5"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </polygon>
            <polygon
              ng-attr-fill="{{config.c3}}"
              points="72.5,50 50,89 95,89"
              fill={colors[2]}
              transform="rotate(186 72.2417 77.5)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 72.5 77.5;360 72 77.5"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </polygon>
          </g>
        </g>
      </g>
    </svg>
  )
}
