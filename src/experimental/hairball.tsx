import React, { FC } from 'react'
import {
  FourColorsSchema,
  FourColorsSchemeNames,
} from '../color-schemas/four-colors-schema'
import { PrimaryProps } from '../type'

export interface HairballCustomColor {
  fillColor1: string
  fillColor2: string
  fillColor3: string
  fillColor4: string
}
export const HairballPresetColors = FourColorsSchema
export const HairballPreset = FourColorsSchemeNames
export type HairballPresetType = keyof typeof HairballPreset
export const HAIRBALL_DEFAULT_COLOR = FourColorsSchema.sunset

export interface HairballProps extends PrimaryProps {
  colors?: HairballCustomColor
  preset?: HairballPresetType
  backgroundColor?: string
  speed?: number
  width?: number
  height?: number
}

export const Hairball: FC<HairballProps> = ({
  colors = HAIRBALL_DEFAULT_COLOR,
  backgroundColor = '#fff',
  speed = 2,
  width = 100,
  height = 100,
  visible = true,
  ariaLabel = 'Hairball loading',
  wrapperClass = '',
  wrapperStyle = {},
  preset,
}) => {
  const colorSchema = FourColorsSchema.sunset
  return null
  const {
    fillColor1 = HairballPresetColors.dawn.fillColor1,
    fillColor2 = HairballPresetColors.dawn.fillColor2,
    fillColor3 = HairballPresetColors.dawn.fillColor3,
    fillColor4 = HairballPresetColors.dawn.fillColor4,
  } = colorSchema

  if (!visible) {
    return null
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background: backgroundColor,
        display: 'block',
        ...wrapperStyle,
      }}
      width={width}
      height={height}
      aria-label={ariaLabel}
      className={wrapperClass}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      role="progressbar"
    >
      <g transform="translate(50,50)">
        <g transform="scale(0.8)">
          <g transform="translate(-50,-50)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur={`${speed}s`}
                keySplines="0.5 0.5 0.5 0.5"
                calcMode="spline"
              ></animateTransform>

              <path
                fill={fillColor1}
                d="M51.8,9.9c-8.2-6.6-20.5-4.3-26,4.5c1.9-0.3,3.8-0.4,5.7-0.1c9.9-5.7,22.9-0.9,26.9,9.8 C58.5,18.7,56.1,13.4,51.8,9.9z"
              ></path>
              <path
                fill={fillColor2}
                d="M44.1,23c-4-6.9-12.3-10.3-20-8.1c-7.4,2-12.6,8.8-12.8,16.5c1.5-1.2,3.1-2.2,4.9-2.9 c5.7-9.8,19.4-12.2,28.1-5C44.3,23.3,44.2,23.1,44.1,23z"
              ></path>
              <path
                fill={fillColor3}
                d="M31.4,29.5c-6.8-3.9-15.6-2.8-21.1,2.7c-5.6,5.4-6.8,14.1-3.1,20.9c0.7-1.8,1.6-3.5,2.8-5 c0-11.4,10.7-20.3,21.9-18.4C31.7,29.7,31.5,29.6,31.4,29.5z"
              ></path>
              <path
                fill={fillColor4}
                d="M12.1,57c0.8-7.1,5.6-13,12.1-15.4c-8.1-0.2-15.4,5.2-17.5,13c-2,7.5,1.2,15.5,7.8,19.6 c-0.3-1.9-0.4-3.8-0.1-5.7C12.4,65,11.6,61,12.1,57z"
              ></path>
              <path
                fill={fillColor1}
                d="M28.4,83.8c-9.8-5.7-12.2-19.4-5-28.1c-7.1,3.8-10.7,12.2-8.6,20c2,7.5,8.8,12.8,16.5,13 C30.1,87.2,29.1,85.6,28.4,83.8z"
              ></path>
              <path
                fill={fillColor2}
                d="M48.2,90.1c-11.4,0-20.3-10.7-18.4-21.9c-4.2,6.8-3.2,15.6,2.3,21.4c5.4,5.7,14.2,7,21.1,3.3 C51.4,92.2,49.7,91.2,48.2,90.1z"
              ></path>
              <path
                fill={fillColor3}
                d="M68.5,85.6c-9.9,5.7-22.9,0.9-26.9-9.8c-0.2,8.1,5.2,15.4,13,17.5c7.5,2,15.5-1.2,19.6-7.8 C72.3,85.8,70.4,85.9,68.5,85.6z"
              ></path>
              <path
                fill={fillColor4}
                d="M83.8,71.6c-5.7,9.8-19.4,12.2-28.1,5c3.8,7.1,12.2,10.7,20,8.6c7.5-2,12.8-8.8,13-16.5 C87.2,69.9,85.6,70.9,83.8,71.6z"
              ></path>
              <path
                fill={fillColor1}
                d="M92.9,46.8c-0.7,1.8-1.6,3.5-2.8,5c0,11.4-10.7,20.3-21.9,18.4c6.8,4.2,15.6,3.2,21.4-2.3 C95.3,62.5,96.6,53.7,92.9,46.8z"
              ></path>
              <path
                fill={fillColor2}
                d="M85.5,25.8c0.3,1.9,0.4,3.8,0.1,5.7c5.7,9.9,0.9,22.9-9.8,26.9c8.1,0.2,15.4-5.2,17.5-13 C95.3,37.9,92.1,29.8,85.5,25.8z"
              ></path>
              <path
                fill={fillColor3}
                d="M71.6,16.2C67.8,6.4,56,2.2,46.8,7.1c1.8,0.7,3.5,1.6,5,2.8c11.4,0,20.3,10.7,18.4,21.9 C73.1,27.1,73.6,21.3,71.6,16.2z"
              ></path>
              <path
                fill={fillColor4}
                d="M85.5,25.8c-1.4-8.2-8.6-14.3-16.9-14.5c1.2,1.5,2.2,3.1,2.9,4.9c9.8,5.7,12.2,19.4,5,28.1 C83.2,40.7,86.8,33.2,85.5,25.8z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
