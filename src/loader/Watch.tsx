import React, { FunctionComponent } from 'react'
import { Style } from '../type'

interface WatchProps {
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
const Watch:FunctionComponent<WatchProps> = ({
  height = 80,
  width = 80,
  radius = 48,
  color = 'green',
  arialLabel = 'watch-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}) => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass}>
  <svg
    width={width}
    height={height}
    version="1.1"
    id="L2"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    aria-label={arialLabel}
  >
    <circle
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeMiterlimit="10"
      cx="50"
      cy="50"
      r={radius}
    />
    <line
      fill="none"
      strokeLinecap="round"
      stroke={color}
      strokeWidth="4"
      strokeMiterlimit="10"
      x1="50"
      y1="50"
      x2="85"
      y2="50.5"
    >
      <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
    <line
      fill="none"
      strokeLinecap="round"
      stroke={color}
      strokeWidth="4"
      strokeMiterlimit="10"
      x1="50"
      y1="50"
      x2="49.5"
      y2="74"
    >
      <animateTransform
        attributeName="transform"
        dur="15s"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
  </svg>
  </div>
)

export default Watch
