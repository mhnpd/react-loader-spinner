import React from 'react'
import { FidgetSpinner } from '../../src'
import { render, screen } from '@testing-library/react'

const svgTestId = 'fidget-spinner-svg'

describe('Fidget Spinner', () => {
  test('should render properly with default props', () => {
    render(<FidgetSpinner />)
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'fidget-spinner-loader')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('height', '80')
    expect(component).toHaveAttribute('width', '80')
  })

  test('should render with custom props', () => {
    const pathColor = ['blue', 'red', 'green']
    render(
      <FidgetSpinner
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        backgroundColor="blue"
        ballColors={['red', 'green', 'yellow']}
      />
    )
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'test-aria-label')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveClass('test-class')
    expect(component).toHaveStyle('opacity: 1')
    expect(component).toHaveAttribute('height', '200')
    expect(component).toHaveAttribute('width', '200')

    component.querySelectorAll('path').forEach((path, index) => {
      const color = path.getAttribute('fill')
      expect(pathColor).toContain(color)
    })
    component.querySelectorAll('circle').forEach((circle, index) => {
      expect(circle).toHaveAttribute('fill', 'yellow')
    })
  })
  test('should be hidden when visible is false', () => {
    render(<FidgetSpinner visible={false} />)
    const element = screen.queryAllByTestId(svgTestId)
    expect(element).toEqual([])
  })
})
