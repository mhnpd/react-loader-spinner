import React from 'react'
import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface MagnifyingGlassProps extends BaseProps {
  glassColor?: string,
}

export default function MagnifyingGlass({
  visible = true,
  height = '80',
  width = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'magnifying-glass-loading',
  glassColor = '#c0efff',
  color = '#e15b64',
}: MagnifyingGlassProps) {
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
      data-testid='magnifying-glass-svg'
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <g transform="translate(50,50)">
        <g ng-attr-transform="scale({{config.scale}})" transform="scale(0.82)">
          <g transform="translate(-50,-50)">
            <g transform="translate(16.3636 -20)">
              <animateTransform
                attributeName="transform"
                type="translate"
                calcMode="linear"
                values="-20 -20;20 -20;0 20;-20 -20"
                keyTimes="0;0.33;0.66;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
              <path
                ng-attr-fill="{{config.glass}}"
                d="M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z"
                fill={glassColor}
              ></path>
              <path
                ng-attr-fill="{{config.frame}}"
                d="M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z"
                fill={color}
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
