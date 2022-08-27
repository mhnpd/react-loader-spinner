import React from 'react'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface RadioProps extends Omit<BaseProps, 'color'> {
  colors?: [string, string, string]
}

export default function Radio({
  visible = true,
  height = '80',
  width = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'radio-loading',
  colors = [DEFAULT_COLOR, DEFAULT_COLOR, DEFAULT_COLOR],
}: RadioProps) {
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
      data-testid="radio-bar-svg"
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <circle
        cx="28"
        cy="75"
        r="11"
        ng-attr-fill="{{config.c1}}"
        fill={colors[0]}
      >
        <animate
          attributeName="fill-opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <path
        d="M28 47A28 28 0 0 1 56 75"
        fill="none"
        ng-attr-stroke="{{config.c2}}"
        strokeWidth="10"
        stroke={colors[1]}
      >
        <animate
          attributeName="stroke-opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0.1s"
          repeatCount="indefinite"
        ></animate>
      </path>
      <path
        d="M28 25A50 50 0 0 1 78 75"
        fill="none"
        ng-attr-stroke="{{config.c3}}"
        strokeWidth="10"
        stroke={colors[2]}
      >
        <animate
          attributeName="stroke-opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0.2s"
          repeatCount="indefinite"
        ></animate>
      </path>
    </svg>
  )
}
