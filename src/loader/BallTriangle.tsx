import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, DEFAULT_COLOR, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'
import { SvgWrapper } from '../shared/svg-wrapper';
import { SVG_NAMESPACE } from '../shared/constants'

interface BallTriangleProps extends BaseProps {
  radius?: string | number
}

export const BallTriangle: FunctionComponent<BallTriangleProps> = ({
  height = 100,
  width = 100,
  radius = 5,
  color = DEFAULT_COLOR,
  ariaLabel = 'ball-triangle-loading',
  wrapperClass,
  wrapperStyle,
  visible = true
}):ReactElement => (
  <SvgWrapper
    style={{...wrapperStyle}}
    $visible={visible}
    className={wrapperClass}
    data-testid="ball-triangle-loading"
    aria-label={ariaLabel}
    {...DEFAULT_WAI_ARIA_ATTRIBUTE}
  >
    <svg
      height={height}
      width={width}
      stroke={color}
      viewBox="0 0 57 57"
      xmlns={SVG_NAMESPACE}
      data-testid="ball-triangle-svg"
    >
      <title>Ball Triangle</title>
      <desc>Animated representation of three balls</desc>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle cx="5" cy="50" r={radius}>
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              values="50;5;50;50"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              begin="0s"
              dur="2.2s"
              values="5;27;49;5"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27" cy="5" r={radius}>
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              from="5"
              to="5"
              values="5;50;50;5"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              begin="0s"
              dur="2.2s"
              from="27"
              to="27"
              values="27;49;5;27"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="49" cy="50" r={radius}>
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              values="50;50;5;50"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              from="49"
              to="49"
              begin="0s"
              dur="2.2s"
              values="49;5;27;49"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  </SvgWrapper>
)

