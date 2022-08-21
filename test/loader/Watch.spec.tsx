import React from 'react'
import { Watch } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'watch-loading'
const svgTestId = 'watch-svg'

describe('Triangle', () => {
  test('should render correctly with default props', () => {
    render(<Watch />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'watch-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('width', '80')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '48')
      expect(circle).toHaveAttribute('stroke', DEFAULT_COLOR)
    })
  })

  test('should render correctly with custom props', () => {
    render(
      <Watch
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        radius={100}
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

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('r', '100')
      expect(circle).toHaveAttribute('stroke', 'red')
    })
  })

  test('should be hidden when visible is false', () => {
    render(<Watch visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
