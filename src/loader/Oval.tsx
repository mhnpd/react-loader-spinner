import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, Style } from '../type'

interface OvalProps extends BaseProps {
  radius?: string | number,
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const Oval:FunctionComponent<OvalProps> = ({
  height = 80,
  width = 80,
  radius = 18,
  color = 'green',
  arialLabel = 'oval-loading',
  wrapperStyle,
  wrapperClass,
  visible = true
}):ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass} data-testid="oval-loading">
  <svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    data-testid="oval-svg"
    aria-label={arialLabel}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r={radius} />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
  </div>
)
export default Oval
