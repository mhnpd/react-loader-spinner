export const DEFAULT_COLOR = '#4fa94d'

export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  'aria-busy': true,
  role: 'progressbar',
}

export type Style = {
  [key: string]: string
}

/**
 * Common sizing, accessibility and wrapper controls shared by all loaders.
 */
export interface PrimaryProps {
  /** Height of the SVG (number interpreted as px). */
  height?: string | number
  /** Width of the SVG (number interpreted as px). */
  width?: string | number
  /** Accessible label announced to screen readers (mapped to aria-label). */
  ariaLabel?: string
  /** Inline style object applied to the wrapper element. */
  wrapperStyle?: Style
  /** CSS class applied to the wrapper for custom styling. */
  wrapperClass?: string
  /** When false, the loader is not rendered. */
  visible?: boolean
}

/**
 * Extended loader props including color and optional gradient configuration.
 */
export interface BaseProps extends PrimaryProps {
  /** Primary color applied to fill or stroke. */
  color?: string
  /**
   * Provide multiple colors to render a gradient instead of a solid color.
   * When 2 or more colors are supplied a gradient <defs> will be injected and
   * the primary color reference (fill or stroke) becomes url(#gradientId).
   */
  colors?: string[]
  /** Type of gradient (linear or radial). Defaults to linear. */
  gradientType?: 'linear' | 'radial'
  /** Angle (in degrees) applied via rotate() transform for linear gradients. */
  gradientAngle?: number
}
