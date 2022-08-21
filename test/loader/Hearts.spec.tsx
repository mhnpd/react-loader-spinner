import React from 'react'
import { Hearts } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'hearts-loading'
const svgTestId = 'hearts-svg'

describe('Hearts Loader', () => {
  test('should render correctly with default props', () => {
    render(<Hearts />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'hearts-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('fill', DEFAULT_COLOR)
  })

  test('should render correctly with custom props', () => {
    render(
      <Hearts
        height={200}
        width={200}
        color="#ff0000"
        ariaLabel="custom-hearts-loading"
        wrapperStyle={{ opacity: '0.5' }}
        wrapperClass="custom-wrapper-class"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'custom-hearts-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveStyle('opacity: 0.5')
    expect(component).toHaveClass('custom-wrapper-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('fill', '#ff0000')
  })
  test('should be hidden when visible is false', () => {
    render(<Hearts visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
