import React, { FunctionComponent, ReactElement } from 'react'
import { BaseProps, Style } from '../type'

interface StarProps extends BaseProps { }

const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none'
})

const Star: FunctionComponent<StarProps> = ({
  height = '100',
  width = '100',
  color = 'blue',
  ariaLabel = 'star-loading',
  wrapperStyle = {},
  wrapperClass,
  visible = true
}): ReactElement => (
  <div style={{ ...getDefaultStyle(visible), ...wrapperStyle }} className={wrapperClass} data-testid="star-loading">
    <svg fill='white'
      version="1.0"
      style={{ backgroundColor: color, padding: '.5em', borderRadius: '50%' }}
      className='react-loader-spinner-svg-star'
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      data-testid="star-svg"
      width={width} height={height} viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill='inherit' stroke="none">
        <path d="M2485 4706 c-16 -7 -37 -22 -46 -32 -9 -11 -155 -300 -324 -644 -169
                -344 -310 -628 -314 -632 -3 -3 -321 -52 -706 -108 -499 -72 -709 -106 -730
                -119 -67 -39 -97 -140 -61 -209 8 -15 216 -224 463 -464 246 -240 474 -463
                506 -495 l57 -59 -120 -700 c-126 -736 -125 -729 -85 -790 25 -38 91 -67 141
                -61 30 3 215 95 663 331 342 179 626 326 632 326 5 0 288 -146 628 -325 340
                -179 632 -328 649 -331 50 -10 99 4 136 39 67 63 69 34 -64 812 l-120 699 47
                49 c27 27 254 250 507 495 252 246 464 459 472 474 36 69 6 170 -61 210 -22
                12 -224 45 -730 119 -385 55 -703 104 -706 108 -4 3 -145 287 -314 631 -169
                344 -315 633 -324 644 -37 43 -134 59 -196 32z"/>
      </g>
    </svg>
  </div>
)

export default Star
