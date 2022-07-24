import React from 'react'
import { DEFAULT_COLOR, Style } from '../type'

type Props = {
  wrapperStyle?: Style,
  visible?: boolean,
  wrapperClass?: string,
  height?: string | number,
  width?: string | number,
  color?: string,
  firstLineColor?: string,
  middleLineColor?: string,
  lastLineColor?: string,
  ariaLabel?: string
}

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none',
})

/**
 * @description contains three lines in a wave motion
 * line colors are changeable
 */
const LineWave: React.FunctionComponent<Props> = ({
  wrapperStyle = {},
  visible = true,
  wrapperClass = '',
  height = 100,
  width = 100,
  color = DEFAULT_COLOR,
  ariaLabel = 'line-wave',
  firstLineColor,
  middleLineColor,
  lastLineColor,
}): React.ReactElement => {
  return (
    <div
      style={{ ...getDefaultStyle(visible), ...wrapperStyle }}
      className={wrapperClass}
      data-testid="line-wave-wrapper">
      <svg
        version="1.1"
        height={`${height}`}
        width={`${width}`}
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        aria-label={ariaLabel}
        data-testid="line-wave-svg"
      >
        <rect
          x="20"
          y="50"
          width="4"
          height="10"
          fill={firstLineColor || color} /** First bar */
          data-testid="line-wave-svg-first-line"
        >
          <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0" dur="0.6s" repeatCount="indefinite" />
        </rect>

        <rect
          x="30"
          y="50"
          width="4"
          height="10"
          fill={middleLineColor || color}
          data-testid="line-wave-svg-middle-line"
        >
          <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s" dur="0.6s" repeatCount="indefinite" />
        </rect>

        <rect
          x="40" y="50"
          width="4" height="10"
          fill={lastLineColor || color} /** last bar */
          data-testid="line-wave-svg-last-line"
        >
          <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div >
  )
}

export default LineWave
