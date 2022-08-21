import React from 'react'
import { RotatingSquare } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'rotating-square-wrapper'
const svgTestId = 'rotating-square-svg'

describe('RotatingSquare Loader', () => {
  test('should render properly with default props', () => {
    render(<RotatingSquare />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'rotating-square-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('width', '100')

    svg.querySelectorAll('rect').forEach((rect, index) => {
      if (index === 0) {
        expect(rect).toHaveAttribute('stroke-width', '4')
        expect(rect).toHaveAttribute('stroke', DEFAULT_COLOR)
      } else {
        expect(rect).toHaveAttribute('fill', DEFAULT_COLOR)
      }
    })
  })

  test('should render with custom props', () => {
    render(
      <RotatingSquare
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        strokeWidth={10}
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'test-aria-label')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveClass('test-class')
    expect(component).toHaveStyle('opacity: 1')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('width', '200')

    svg.querySelectorAll('rect').forEach((rect, index) => {
      if (index === 0) {
        expect(rect).toHaveAttribute('stroke-width', '10')
        expect(rect).toHaveAttribute('stroke', 'red')
      } else {
        expect(rect).toHaveAttribute('fill', 'red')
      }
    })
  })
  test('should be hidden when visible is false', () => {
    render(<RotatingSquare visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
