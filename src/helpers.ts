import type { Style } from './type'

export const getDefaultStyle = (visible: boolean): Style => ({
  display: visible ? 'flex' : 'none',
})
