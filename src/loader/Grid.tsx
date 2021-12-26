import React, { FunctionComponent, ReactElement } from 'react'
import { Style } from '../type'

interface GridProps {
  height: string | number,
  width: string | number,
  radius:string | number,
  color: string,
  arialLabel?: string,
  wrapperStyle?: Style,
  wrapperClass?: string,
  visible?:boolean
}

const getDefaultStyle = (visible:boolean):Style => ({
  display: visible ? 'flex' : 'none'
})

export const Grid:FunctionComponent<GridProps> = ({
  height = 80,
  width = 80,
  radius = 12.5,
  color = 'green',
  arialLabel = 'audio-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}):ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass}>
  <svg
    width={width}
    height={height}
    viewBox="0 0 105 105"
    fill={color}
    aria-label={arialLabel}
  >
    <circle cx="12.5" cy="12.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="0s"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="12.5" cy="52.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="100ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="52.5" cy="12.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="300ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="52.5" cy="52.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="600ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="92.5" cy="12.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="800ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="92.5" cy="52.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="400ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="12.5" cy="92.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="700ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="52.5" cy="92.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="500ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="92.5" cy="92.5" r={`${radius}`}>
      <animate
        attributeName="fill-opacity"
        begin="200ms"
        dur="1s"
        values="1;.2;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
  </div>
)

export default Grid
