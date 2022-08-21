import React from 'react'
import { Grid } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'grid-loading'
const svgTestId = 'grid-svg'

describe('Grids Loader', () => {
  test('should render correctly with default props', () => {
    render(<Grid />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'grid-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('fill', DEFAULT_COLOR)

    svg.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('r', '12.5')
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <Grid
        height={200}
        width={200}
        radius={25}
        color="#ff0000"
        ariaLabel="custom-grid-loading"
        wrapperStyle={{ opacity: '0.5' }}
        wrapperClass="custom-wrapper-class"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'custom-grid-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('opacity: 0.5')
    expect(component).toHaveClass('custom-wrapper-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('fill', '#ff0000')

    svg.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('r', '25')
    })
  })
  test('should be hidden when visibly is false', () => {
    render(<Grid visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
