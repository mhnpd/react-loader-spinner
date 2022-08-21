import React from 'react'
import { MutatingDots } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'mutating-dots-loading'
const svgTestId = 'mutating-dots-svg'

describe('Mutating Dots', () => {
  test('should render correctly with default props', () => {
    render(<MutatingDots />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'mutating-dots-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '90')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '12.5')
      expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <MutatingDots
        height={200}
        width={200}
        color="red"
        ariaLabel="custom-mutating-dots-loading"
        wrapperStyle={{ opacity: '0.5' }}
        wrapperClass="custom-wrapper-class"
        secondaryColor="red"
        radius={25}
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute(
      'aria-label',
      'custom-mutating-dots-loading'
    )
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveStyle('opacity: 0.5')
    expect(component).toHaveClass('custom-wrapper-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '25')
      expect(circle).toHaveAttribute('fill', 'red')
    })
  })

  test('should be hidden when visible is false', () => {
    render(<MutatingDots visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
