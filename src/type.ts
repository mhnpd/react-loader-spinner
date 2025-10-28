import { CSSProperties } from 'react'

export const DEFAULT_COLOR = '#4fa94d'

export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  'aria-busy': true,
  role: 'progressbar',
}

// Reuse React's CSSProperties for consistent style typing across components
export type Style = CSSProperties

// PrimaryProps includes common props shared by experimental components
export interface PrimaryProps {
  height?: string | number
  width?: string | number
  color?: string
  ariaLabel?: string
  wrapperStyle?: CSSProperties
  wrapperClass?: string
  visible?: boolean
}


