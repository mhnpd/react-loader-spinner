import React from 'react'
import { DEFAULT_COLOR, Style } from '../type'

type Props = {
  wrapperStyle?: Style,
  visible?: boolean,
  wrapperClass?: string,
  height?: string | number,
  width?: string | number,
  color?: string,
  outerCircleColor?: string,
  innerCircleColor?: string
  barColor?: string
  ariaLabel?: string
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none',
})

/**
 * @description contains two circles rotating in opposite direction
 * and a wave bars. outer circle, inner circle and bar
 * color can be set from props.
 */
const CirclesWithBar: React.FunctionComponent<Props> = ({
  wrapperStyle = {},
  visible = true,
  wrapperClass = '',
  height = 100,
  width = 100,
  color = DEFAULT_COLOR,
  outerCircleColor,
  innerCircleColor,
  barColor,
  ariaLabel = 'circles-with-bar-loading',
}): React.ReactElement => {
  return (
    <div
      style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
      className={wrapperClass}
      aria-label={ariaLabel}
      data-testid="circles-with-bar-wrapper">
      <svg version="1.1"
        id="L1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height={`${height}`}
        width={`${width}`}
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        data-testid="circles-with-bar-svg"
      >
        <circle fill="none"
          stroke={`${outerCircleColor || color}`} // color
          strokeWidth="6"
          strokeMiterlimit="15"
          strokeDasharray="14.2472,14.2472"
          cx="50" cy="50" r="47"
          data-testid="circles-with-bar-svg-outer-circle"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
        </circle>
        <circle fill="none"
          stroke={`${innerCircleColor || color}`}
          strokeWidth="1"
          strokeMiterlimit="10"
          strokeDasharray="10,10" cx="50" cy="50" r="39"
          data-testid="circles-with-bar-svg-inner-circle"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite" />
        </circle>
        <g
          fill={`${barColor || color}`}
          data-testid="circles-with-bar-svg-bar"
        >
          <rect x="30" y="35" width="5" height="30">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.1" />
          </rect>
          <rect x="40" y="35" width="5" height="30" >
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.2" />
          </rect>
          <rect x="50" y="35" width="5" height="30" >
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3" />
          </rect>
          <rect x="60" y="35" width="5" height="30" >
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.4" />
          </rect>
          <rect x="70" y="35" width="5" height="30" >
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.5" />
          </rect>
        </g>
      </svg>
    </div>
  )
}

export default CirclesWithBar
