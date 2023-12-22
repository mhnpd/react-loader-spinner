export const DEFAULT_COLOR = '#4fa94d'

export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  'aria-busy': true,
  role: 'progressbar',
}

export type Style = {
  [key: string]: string
}

export interface PrimaryProps {
  height?: string | number
  width?: string | number
  ariaLabel?: string
  wrapperStyle?: Style
  wrapperClass?: string
  visible?: boolean
}

export interface BaseProps extends PrimaryProps {
  color?: string
}
