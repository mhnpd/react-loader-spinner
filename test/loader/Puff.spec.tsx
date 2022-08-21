import React from 'react'
import { Puff } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'puff-loading'
const svgTestId = 'puff-svg'

describe('Puff Loader', () => {
  test('should render correctly with default props', () => {
    render(<Puff />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'puff-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('stroke', DEFAULT_COLOR)

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '1')
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <Puff
        width={100}
        height={100}
        radius={50}
        wrapperClass="wrapper-class"
        wrapperStyle={{ opacity: '1' }}
        ariaLabel="custom-label"
        color="red"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'custom-label')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveStyle('opacity:1')
    expect(component).toHaveClass('wrapper-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '100')
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('stroke', 'red')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '50')
    })
  })

  test('should be hidden when visible is false', () => {
    render(<Puff visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
