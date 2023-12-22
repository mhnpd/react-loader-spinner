import React, { FunctionComponent } from 'react'
import {
  FourColorsSchema,
  FourColorsSchemeNames
} from '../color-schemas/four-colors-schema'
import { PrimaryProps } from '../type'

export interface CustomColor {
  fillColor1?: string
  fillColor2?: string
  fillColor3?: string
  fillColor4?: string
}

const DEFAULT_COLOR = FourColorsSchema.sunset
export const WhirlPreset = FourColorsSchemeNames
export const WhirlPresetColors = FourColorsSchema

export interface WhirlProps extends PrimaryProps {
  background?: string
  colors?: CustomColor
  preset?: keyof typeof FourColorsSchemeNames
  speedInSecond?: number
}

export const Whirl: FunctionComponent<WhirlProps> = ({
  height = 100,
  width = 100,
  wrapperClass = '',
  wrapperStyle = {},
  visible = true,
  background = 'transparent',
  colors = DEFAULT_COLOR,
  speedInSecond = 1,
  preset,
}) => {
  if (!visible) return null

  const { fillColor1, fillColor2, fillColor3, fillColor4 } = preset
    ? FourColorsSchema?.[preset] ?? colors : colors

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background,
        display: 'block',
        ...wrapperStyle
      }}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={wrapperClass}
      preserveAspectRatio="xMidYMid"
      data-testid="whirl"
    >
      <g transform="translate(50,50)">
        <g transform="scale(0.8)">
          <g transform="translate(-50,-50)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                values="360 50 50;0 50 50"
                keyTimes="0;1"
                dur={`${speedInSecond}s`}
                keySplines="0.5 0.5 0.5 0.5"
                calcMode="spline"
              ></animateTransform>

              <path
                fill={fillColor1}
                d="M52.5,5c-0.8,0-1.7,0.1-2.5,0.1c9,1.2,16,10.8,16,22.4s-7,21.1-16,22.4c0.8,0.1,1.7,0.1,2.5,0.1 C64.9,50,75,39.9,75,27.5S64.9,5,52.5,5z"
              ></path>
              <path
                fill={fillColor2}
                d="M83.6,19.9c-0.6-0.6-1.2-1.2-1.9-1.7c5.5,7.2,3.7,18.9-4.5,27.1s-19.9,10-27.1,4.5c0.5,0.6,1.1,1.3,1.7,1.9 c8.8,8.8,23,8.8,31.8,0S92.4,28.7,83.6,19.9z"
              ></path>
              <path
                fill={fillColor3}
                d="M95,52.5c0-0.8-0.1-1.7-0.1-2.5c-1.2,9-10.8,16-22.4,16s-21.1-7-22.4-16c-0.1,0.8-0.1,1.7-0.1,2.5 C50,64.9,60.1,75,72.5,75S95,64.9,95,52.5z"
              ></path>
              <path
                fill={fillColor4}
                d="M80.1,83.6c0.6-0.6,1.2-1.2,1.7-1.9c-7.2,5.5-18.9,3.7-27.1-4.5s-10-19.9-4.5-27.1c-0.6,0.5-1.3,1.1-1.9,1.7 c-8.8,8.8-8.8,23,0,31.8S71.3,92.4,80.1,83.6z"
              ></path>
              <path
                fill={fillColor1}
                d="M47.5,95c0.8,0,1.7-0.1,2.5-0.1c-9-1.2-16-10.8-16-22.4s7-21.1,16-22.4c-0.8-0.1-1.7-0.1-2.5-0.1 C35.1,50,25,60.1,25,72.5S35.1,95,47.5,95z"
              ></path>
              <path
                fill={fillColor2}
                d="M16.4,80.1c0.6,0.6,1.2,1.2,1.9,1.7c-5.5-7.2-3.7-18.9,4.5-27.1s19.9-10,27.1-4.5c-0.5-0.6-1.1-1.3-1.7-1.9 c-8.8-8.8-23-8.8-31.8,0S7.6,71.3,16.4,80.1z"
              ></path>
              <path
                fill={fillColor3}
                d="M5,47.5c0,0.8,0.1,1.7,0.1,2.5c1.2-9,10.8-16,22.4-16s21.1,7,22.4,16c0.1-0.8,0.1-1.7,0.1-2.5 C50,35.1,39.9,25,27.5,25S5,35.1,5,47.5z"
              ></path>
              <path
                fill={fillColor4}
                d="M19.9,16.4c-0.6,0.6-1.2,1.2-1.7,1.9c7.2-5.5,18.9-3.7,27.1,4.5s10,19.9,4.5,27.1c0.6-0.5,1.3-1.1,1.9-1.7 c8.8-8.8,8.8-23,0-31.8S28.7,7.6,19.9,16.4z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
