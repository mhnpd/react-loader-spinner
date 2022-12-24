import React from 'react'
import { TailSpin } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'tail-spin-loading'
const svgTestId = 'tail-spin-svg'

describe('TailSpin', () => {
  test('should render correctly with default props', () => {
    render(<TailSpin />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'tail-spin-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('width', '80')

    svg.querySelectorAll('stop').forEach((stop, index) => {
      expect(stop).toHaveAttribute('stop-color', DEFAULT_COLOR)
    })

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '1')
    })
    svg.querySelectorAll('path').forEach(path => {
      expect(path).toHaveAttribute('stroke', DEFAULT_COLOR)
      expect(path).toHaveAttribute('stroke-width', "2")
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <TailSpin
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        radius={10}
        strokeWidth={3}
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

    svg.querySelectorAll('stop').forEach((stop, index) => {
      expect(stop).toHaveAttribute('stop-color', 'red')
    })

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '10.5') // r-1 + stroke-width/2
    })
    svg.querySelectorAll('path').forEach(path => {
      expect(path).toHaveAttribute('stroke', 'red')
      expect(path).toHaveAttribute('stroke-width','3')
    })
  })

  test('should be hidden when visible is false', () => {
    render(<TailSpin visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
