import React from 'react'
import { ThreeDots } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'three-dots-loading'
const svgTestId = 'three-dots-svg'

describe('Three Dots', () => {
  test('should render correctly with default props', () => {
    render(<ThreeDots />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'three-dots-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('fill', DEFAULT_COLOR)

    svg.querySelectorAll('circle').forEach((circle, index) => {
      if (index === 1) {
        expect(circle).toHaveAttribute('r', '9')
      } else {
        expect(circle).toHaveAttribute('r', '15')
      }
    })
  })

  test('should render correctly with default props', () => {
    render(
      <ThreeDots
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        radius={5}
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
    expect(svg).toHaveAttribute('fill', 'red')

    svg.querySelectorAll('circle').forEach((circle, index) => {
      if (index === 1) {
        expect(circle).toHaveAttribute('r', '5')
      } else {
        expect(circle).toHaveAttribute('r', '11')
      }
    })
  })

  test('should be hidden when visible is false', () => {
    render(<ThreeDots visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
