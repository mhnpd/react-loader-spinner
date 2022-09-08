import React from 'react'
import { RevolvingDot } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'revolving-dot-loading'
const svgTestId = 'revolving-dot-svg'

describe('RevolvingDot Loader', () => {
  test('should render the default correctly', () => {
    render(<RevolvingDot />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'revolving-dot-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', `calc(45 * 2.5)`)
    expect(svg).toHaveAttribute('height', `calc(45 * 2.5)`)

    svg.querySelectorAll('circle').forEach((circle, index) => {
      if (index === 0) {
        expect(circle).toHaveAttribute('stroke', DEFAULT_COLOR)
        expect(circle).toHaveAttribute('r', '45')
      } else if (index === 1) {
        expect(circle).toHaveAttribute('stroke', DEFAULT_COLOR)
        expect(circle).toHaveAttribute('fill', DEFAULT_COLOR)
        expect(circle).toHaveAttribute('r', `calc(45 / 5)`)
      }
    })
  })

  test('should be hidden when visible is false', () => {
    render(<RevolvingDot visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
