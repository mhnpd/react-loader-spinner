import React from 'react'
import { Rings } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'rings-loading'
const svgTestId = 'rings-svg'

describe('Rings Loader', () => {
  test('should render correctly with default props', () => {
    render(<Rings />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveAttribute('aria-label', 'rings-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('stroke', DEFAULT_COLOR)

    svg.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('r')
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <Rings
        height={100}
        width={100}
        radius={10}
        color="red"
        ariaLabel="custom-aria-label"
        wrapperStyle={{ opacity: '1' }}
        wrapperClass="custom-class"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveAttribute('aria-label', 'custom-aria-label')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('opacity:1')
    expect(component).toHaveClass('custom-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '100')
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('stroke', 'red')

    svg.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('r')
    })
  })

  test('should be hidden when visible is false', () => {
    render(<Rings visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
