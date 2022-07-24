export const DEFAULT_COLOR = '#4fa94d'

export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  'aria-busy': true,
  role: 'status',
}

export type Style = {
  [key: string]: string
}

export interface BaseProps {
  height?: string | number
  width?: string | number
  color?: string
  ariaLabel?: string
  wrapperStyle?: Style
  wrapperClass?: string
  visible?: boolean
}
