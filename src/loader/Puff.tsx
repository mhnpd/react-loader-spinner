import React, { FunctionComponent } from 'react'
import { Style } from '../type'

interface PuffProps {
  height: string | number,
  width: string | number,
  radius: string | number,
  color: string,
  secondaryColor: string,
  arialLabel?: string,
  wrapperStyle?: Style,
  wrapperClass?: string,
  visible?: boolean
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

export const Puff:FunctionComponent<PuffProps> = ({
  height = 80,
  width = 80,
  radius = 1,
  color = 'green',
  arialLabel = 'oval-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}) => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass}>
  <svg
    width={width}
    height={height}
    viewBox="0 0 44 44"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    aria-label={arialLabel}
  >
    <g fill="none" fillRule="evenodd" strokeWidth="2">
      <circle cx="22" cy="22" r={radius}>
        <animate
          attributeName="r"
          begin="0s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="strokeOpacity"
          begin="0s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r={radius}>
        <animate
          attributeName="r"
          begin="-0.9s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="strokeOpacity"
          begin="-0.9s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
  </div>
)

export default Puff
