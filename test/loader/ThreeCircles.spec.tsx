import React from 'react'
import { ThreeCircles } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'three-circles-wrapper'
const svgTestId = 'three-circles-svg'

describe('Three Circles', () => {
  test('should render correctly with default props', () => {
    render(<ThreeCircles />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'three-circles-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('width', '100')

    svg.querySelectorAll('circle').forEach((circle, index) => {
      if (index === 0) {
        expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
      } else if (index === 1) {
        expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
      } else {
        expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
      }
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <ThreeCircles
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        outerCircleColor="blue"
        innerCircleColor="green"
        middleCircleColor="yellow"
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

    svg.querySelectorAll('circle').forEach((circle, index) => {
      if (index === 0) {
        expect(circle).toHaveAttribute('fill', 'blue')
      } else if (index === 1) {
        expect(circle).toHaveAttribute('fill', 'green')
      } else {
        expect(circle).toHaveAttribute('fill', 'yellow')
      }
    })
  })

  test('should be hidden when visible is false', () => {
    render(<ThreeCircles visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
