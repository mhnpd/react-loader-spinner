import { useMemo } from 'react'

export interface GradientConfig {
  colors?: string[]
  gradientType?: 'linear' | 'radial'
  gradientAngle?: number
}

export const useGradient = ({
  colors,
  gradientType = 'linear',
  gradientAngle = 0,
}: GradientConfig) => {
  const isGradient = !!colors && colors.length > 1
  // Lightweight id generator to avoid pulling ESM-only libs for test env
  const gradientId = useMemo(() => (isGradient ? `rls-grad-${Math.random().toString(36).slice(2, 8)}` : undefined), [isGradient])

  const defs = useMemo(() => {
    if (!isGradient || !gradientId || !colors) return null
    if (gradientType === 'radial') {
      return (
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          {colors.map((c, i) => (
            <stop key={c + i} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
          ))}
        </radialGradient>
      )
    }
    return (
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform={`rotate(${gradientAngle})`}>
        {colors.map((c, i) => (
            <stop key={c + i} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
          ))}
      </linearGradient>
    )
  }, [colors, gradientAngle, gradientId, gradientType, isGradient])

  const url = gradientId ? `url(#${gradientId})` : undefined
  return { isGradient, gradientId, defs, url }
}
