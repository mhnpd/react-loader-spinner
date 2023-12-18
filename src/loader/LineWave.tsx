import React from 'react'
import { DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE, Style } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper';
import { SVG_NAMESPACE } from '../shared/constants'

type Props = {
  wrapperStyle?: Style
  visible?: boolean
  wrapperClass?: string
  height?: string | number
  width?: string | number
  color?: string
  firstLineColor?: string
  middleLineColor?: string
  lastLineColor?: string
  ariaLabel?: string
}

/**
 * @description contains three lines in a wave motion
 * line colors are changeable
 */
export const LineWave: React.FunctionComponent<Props> = ({
  wrapperStyle = {},
  visible = true,
  wrapperClass = '',
  height = 100,
  width = 100,
  color = DEFAULT_COLOR,
  ariaLabel = 'line-wave-loading',
  firstLineColor,
  middleLineColor,
  lastLineColor,
}): React.ReactElement => {
  return (
    <SvgWrapper
      style={wrapperStyle }
      $visible={visible}
      className={wrapperClass}
      data-testid="line-wave-wrapper"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        version="1.1"
        height={`${height}`}
        width={`${width}`}
        xmlns={SVG_NAMESPACE}
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        data-testid="line-wave-svg"
      >
        <rect
          x="20"
          y="50"
          width="4"
          height="10"
          fill={firstLineColor || color} /** First bar */
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="30"
          y="50"
          width="4"
          height="10"
          fill={middleLineColor || color}
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="40"
          y="50"
          width="4"
          height="10"
          fill={lastLineColor || color} /** last bar */
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </SvgWrapper>
  )
}

