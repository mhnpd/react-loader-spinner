import React from 'react'
import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface CommentProps extends BaseProps {
  backgroundColor?: string
}


export default function Comment({
  visible = true,
  width = '80',
  height = '80',
  backgroundColor = '#ff6d00',
  color = '#fff',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'comment-loading',
}: CommentProps) {
  return !visible ?null: (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={ariaLabel}
      data-testid={'comment-svg'}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <path
        d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z"
        ng-attr-fill="{{config.c1}}"
        fill={backgroundColor}
      ></path>
      <circle cx="30" cy="47" r="5" ng-attr-fill="{{config.c2}}" fill={color}>
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="0;1;1"
          keyTimes="0;0.2;1"
          dur="1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="50" cy="47" r="5" ng-attr-fill="{{config.c3}}" fill={color}>
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="0;0;1;1"
          keyTimes="0;0.2;0.4;1"
          dur="1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="70" cy="47" r="5" ng-attr-fill="{{config.c4}}" fill={color}>
        <animate
          attributeName="opacity"
          calcMode="linear"
          values="0;0;1;1"
          keyTimes="0;0.4;0.6;1"
          dur="1"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  )
}
