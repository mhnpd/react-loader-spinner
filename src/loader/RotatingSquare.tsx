import React from 'react'
import { getDefaultStyle } from '../helpers'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE, Style } from '../type'

type RotatingSquareProps = {
  wrapperClass?: string
  color?: string
  strokeWidth?: string | number
  height?: string | number
  width?: string | number
  ariaLabel?: string
  wrapperStyle?: Style
  visible?: boolean
}

const RotatingSquare: React.FunctionComponent<RotatingSquareProps> = ({
  wrapperClass = '',
  color = DEFAULT_COLOR,
  height = 100,
  width = 100,
  strokeWidth = 4,
  ariaLabel = 'rotating-square-loading',
  wrapperStyle = {},
  visible = true,
}): React.ReactElement => {
  return (
    <div
      style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
      className={wrapperClass}
      data-testid="rotating-square-wrapper"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        height={`${height}`}
        width={`${width}`}
        data-testid="rotating-square-svg"
        xmlSpace="preserve"
      >
        <rect
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          x="25"
          y="25"
          width="50"
          height="50"
        >
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          />
        </rect>
        <rect x="27" y="27" fill={color} width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          />
        </rect>
      </svg>
    </div>
  )
}

export default RotatingSquare
