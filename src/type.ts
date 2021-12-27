export type Style = {
  [key:string]: string
}

export interface BaseProps {
  height?: string | number,
  width?: string | number,
  color?: string,
  arialLabel?: string,
  wrapperStyle?: Style,
  wrapperClass?: string,
  visible?:boolean
}
