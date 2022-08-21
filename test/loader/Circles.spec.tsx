import React from 'react'
import { Circles } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'circles-loading'
const svgTestId = 'circles-svg'

describe('Circles Loader', () => {
  test('should render with correct default props', () => {
    render(<Circles />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveStyle('display: flex')
    expect(component).toHaveAttribute('aria-label', 'circles-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('fill', DEFAULT_COLOR)
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('width', '80')
  })

  test('should render with correct custom props', () => {
    render(
      <Circles
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
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
    expect(svg).toHaveAttribute('fill', 'red')
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('width', '200')
  })
  test('should be hidden when visible is false', () => {
    render(<Circles visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display: none')
  })
})
