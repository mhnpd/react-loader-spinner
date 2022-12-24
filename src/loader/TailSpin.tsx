import React, { FunctionComponent, ReactElement } from 'react'
import { getDefaultStyle } from '../helpers'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface TailSpinProps extends BaseProps {
  radius?: string | number,
  strokeWidth?: string | number
}

export const TailSpin: FunctionComponent<TailSpinProps> = ({
  height = 80,
  width = 80,
  strokeWidth = 2,
  radius = 1,
  color = DEFAULT_COLOR,
  ariaLabel = 'tail-spin-loading',
  wrapperStyle,
  wrapperClass,
  visible = true,
}): ReactElement => {
  const strokeWidthNum = parseInt(String(strokeWidth));
  const viewBoxValue = strokeWidthNum + 36;
  const halfStrokeWidth = strokeWidthNum / 2;
  const processedRadius = halfStrokeWidth + parseInt(String(radius)) - 1;
  return (
    <div
      style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
      className={wrapperClass}
      data-testid="tail-spin-loading"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxValue} ${viewBoxValue}`}
        xmlns="http://www.w3.org/2000/svg"
        data-testid="tail-spin-svg"
      >
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stopColor={color} stopOpacity="0" offset="0%" />
            <stop stopColor={color} stopOpacity=".631" offset="63.146%" />
            <stop stopColor={color} offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform={`translate(${halfStrokeWidth} ${halfStrokeWidth})`}>
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              id="Oval-2"
              stroke={color}
              strokeWidth={strokeWidth}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
            <circle fill="#fff" cx="36" cy="18" r={processedRadius}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default TailSpin
