import React from 'react'
import { ColorRing } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const svgTestId = 'color-ring-svg'

describe('ColorRing', () => {
  test('should render properly with default props', () => {
    render(<ColorRing />)
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'color-ring-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('height', '80')
    expect(component).toHaveAttribute('width', '80')
  })

  test('should render with custom props', () => {
    const colors = Array(5).fill(DEFAULT_COLOR as string)
    render(
      <ColorRing
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        colors={colors as [string, string, string, string, string]}
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
    component.querySelectorAll('animate').forEach(animate => {
      expect(animate).toHaveAttribute('values', colors.join(';').toString())
    })
  })
  test('should be hidden when visible is false', () => {
    render(<ColorRing visible={false} />)
    const element = screen.queryAllByTestId(svgTestId)
    expect(element).toEqual([])
  })
})
