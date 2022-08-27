import React from 'react'
import { RotatingTriangles } from '../../src'
import { render, screen } from '@testing-library/react'

const svgTestId = 'rotating-triangle-svg'

describe('Rotating Triangles', () => {
  test('should render properly with default props', () => {
    render(<RotatingTriangles />)
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'rotating-triangle-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('height', '80')
    expect(component).toHaveAttribute('width', '80')
  })

  test('should render with custom props', () => {
    render(
      <RotatingTriangles
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        colors={['red', 'green', 'blue']}
      />
    )
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'test-aria-label')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveClass('test-class')
    expect(component).toHaveStyle('opacity: 1')
    expect(component).toHaveAttribute('height', '200')
    expect(component).toHaveAttribute('width', '200')
    
    component.querySelectorAll('polygon').forEach(p => {
     const color = p.getAttribute('fill')
     expect(['red', 'green', 'blue']).toContain(color)
    })
  })
  test('should be hidden when visible is false', () => {
    render(<RotatingTriangles visible={false} />)
    const element = screen.queryAllByTestId(svgTestId)
    expect(element).toEqual([])
  })
})
