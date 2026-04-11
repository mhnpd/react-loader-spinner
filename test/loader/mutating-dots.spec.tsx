import React from 'react'
import { MutatingDots } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'mutating-dots-loading'
const svgTestId = 'mutating-dots-svg'

describe('Mutating Dots', () => {
  test('should render correctly with default props', () => {
    render(<MutatingDots />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'mutating-dots-loading')
    expect(component).toHaveAttribute('role', 'progressbar')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '90')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '12.5')
      expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <MutatingDots
        height={200}
        width={200}
        color="red"
        ariaLabel="custom-mutating-dots-loading"
        wrapperStyle={{ opacity: '0.5' }}
        wrapperClass="custom-wrapper-class"
        secondaryColor="red"
        radius={25}
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute(
      'aria-label',
      'custom-mutating-dots-loading'
    )
    expect(component).toHaveAttribute('role', 'progressbar')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveStyle('opacity: 0.5')
    expect(component).toHaveClass('custom-wrapper-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '25')
      expect(circle).toHaveAttribute('fill', 'red')
    })
  })

  test('should be hidden when visible is false', () => {
    render(<MutatingDots visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })

  test('should apply linear gradient when colors array is provided', () => {
    const colors = ['#FF0000', '#00FF00', '#0000FF']
    render(<MutatingDots colors={colors} gradientType="linear" />)

    const svg = screen.getByTestId(svgTestId)
    const defs = svg.querySelector('defs')

    expect(defs).toBeDefined()

    const linearGradient = defs?.querySelector('linearGradient')
    expect(linearGradient).toBeDefined()
    expect(linearGradient).toHaveAttribute('id')
    expect(linearGradient).toHaveAttribute('x1', '0%')
    expect(linearGradient).toHaveAttribute('y1', '0%')
    expect(linearGradient).toHaveAttribute('x2', '100%')
    expect(linearGradient).toHaveAttribute('y2', '0%')

    const stops = linearGradient?.querySelectorAll('stop')
    expect(stops?.length).toBe(colors.length)
    stops?.forEach((stop, index) => {
      expect(stop).toHaveAttribute('stop-color', colors[index])
      expect(stop).toHaveAttribute('offset', `${(index / (colors.length - 1)) * 100}%`)
    })

    const circles = svg.querySelectorAll('circle')
    circles.forEach(circle => {
      const fillAttr = circle.getAttribute('fill')
      expect(fillAttr).toMatch(/url\(#rls-grad-[a-z0-9]+\)/)
    })
  })

  test('should apply linear gradient with custom angle', () => {
    const colors = ['#FF0000', '#0000FF']
    const angle = 45
    render(
      <MutatingDots 
        colors={colors} 
        gradientType="linear" 
        gradientAngle={angle}
      />
    )
    
    const svg = screen.getByTestId(svgTestId)
    const defs = svg.querySelector('defs')
    const linearGradient = defs?.querySelector('linearGradient')
    
    expect(linearGradient).toHaveAttribute(
      'gradientTransform',
      `rotate(${angle})`
    )
  })

  test('should apply radial gradient when gradientType is radial', () => {
    const colors = ['#FF0000', '#0000FF']
    render(<MutatingDots colors={colors} gradientType="radial" />)
    
    const svg = screen.getByTestId(svgTestId)
    const defs = svg.querySelector('defs')
    
    // Check that radialGradient was created (not linearGradient)
    const radialGradient = defs?.querySelector('radialGradient')
    expect(radialGradient).toBeDefined()
    expect(radialGradient).toHaveAttribute('id')
    expect(radialGradient).toHaveAttribute('cx', '50%')
    expect(radialGradient).toHaveAttribute('cy', '50%')
    expect(radialGradient).toHaveAttribute('r', '50%')
    
    // Verify no linearGradient exists
    const linearGradient = defs?.querySelector('linearGradient')
    expect(linearGradient).toBeNull()
    
    // Check stops
    const stops = radialGradient?.querySelectorAll('stop')
    expect(stops?.length).toBe(colors.length)
  })

  test('should fall back to color prop when colors array has less than 2 colors', () => {
    const singleColor = ['#FF0000']
    render(<MutatingDots colors={singleColor} />)
    
    const svg = screen.getByTestId(svgTestId)
    const defs = svg.querySelector('defs')
    
    // Should not create gradient with only 1 color
    expect(defs?.querySelector('linearGradient')).toBeUndefined()
    expect(defs?.querySelector('radialGradient')).toBeUndefined()
    
    // Circles should use the default color when gradient is not created
    const circles = svg.querySelectorAll('circle')
    circles.forEach(circle => {
      expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
    })
  })

  test('should use gradient over individual color/secondaryColor props', () => {
    const colors = ['#FF0000', '#00FF00']
    render(
      <MutatingDots
        color="red"
        secondaryColor="green"
        colors={colors}
        gradientType="linear"
      />
    )
    
    const svg = screen.getByTestId(svgTestId)
    const circles = svg.querySelectorAll('circle')
    
    // Both circles should use gradient URL, not individual colors
    circles.forEach(circle => {
      const fillAttr = circle.getAttribute('fill')
      expect(fillAttr).toMatch(/url\(#rls-grad-[a-z0-9]+\)/)
      expect(fillAttr).not.toBe('red')
      expect(fillAttr).not.toBe('green')
    })
  })

  test('should generate unique gradient IDs for multiple instances', () => {
    const colors = ['#FF0000', '#0000FF']
    const { unmount } = render(<MutatingDots colors={colors} />)
    
    const svg1 = screen.getByTestId(svgTestId)
    const gradientId1 = svg1.querySelector('linearGradient')?.getAttribute('id')
    
    // Unmount first instance before rendering second
    unmount()
    
    render(<MutatingDots colors={colors} />)
    
    const svg2 = screen.getByTestId(svgTestId)
    const gradientId2 = svg2.querySelector('linearGradient')?.getAttribute('id')
    
    // IDs should be different
    expect(gradientId1).not.toBe(gradientId2)
  })
})
