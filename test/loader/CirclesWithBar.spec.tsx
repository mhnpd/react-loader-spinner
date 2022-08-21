import React from 'react'
import { CirclesWithBar } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'circles-with-bar-wrapper'
const svgTestId = 'circles-with-bar-svg'

describe('Circles With bar Loader', () => {
  test('should render correctly with default props', () => {
    render(<CirclesWithBar />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'circles-with-bar-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('width', '100')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toBeDefined()
      expect(circle).toHaveAttribute('stroke', DEFAULT_COLOR)
    })

    svg.querySelectorAll('g').forEach(g => {
      expect(g).toBeDefined()
      expect(g).toHaveAttribute('fill', DEFAULT_COLOR)
    })
  })
  test('should render correctly with custom props passed', () => {
    render(
      <CirclesWithBar
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        innerCircleColor="blue"
        outerCircleColor="blue"
        barColor="yellow"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'test-aria-label')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('width', '200')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toBeDefined()
      expect(circle).toHaveAttribute('stroke', 'blue')
    })

    svg.querySelectorAll('g').forEach(g => {
      expect(g).toBeDefined()
      expect(g).toHaveAttribute('fill', 'yellow')
    })
  })
})
