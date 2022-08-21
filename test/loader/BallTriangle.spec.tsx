import React from 'react'
import { BallTriangle } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'ball-triangle-loading'
const svgTestId = 'ball-triangle-svg'

describe('Ball Triangle', () => {
  test('should render correctly with default props', () => {
    render(<BallTriangle />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'ball-triangle-loading')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('width', '100')
    expect(svg).toHaveAttribute('stroke', DEFAULT_COLOR)

    svg.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('r', '5')
    })
  })

  test('should use props pass externally', () => {
    render(
      <BallTriangle
        height={200}
        width={200}
        ariaLabel="ball-triangle-loading-test"
        color="red"
        radius={10}
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute(
      'aria-label',
      'ball-triangle-loading-test'
    )
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('stroke', 'red')

    svg.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('r', '10')
    })
  })
  test('should be hidden when visible is false', () => {
    render(<BallTriangle visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
