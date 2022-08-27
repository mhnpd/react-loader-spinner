import React from 'react'
import { Discuss } from '../../src'
import { render, screen } from '@testing-library/react'

const svgTestId = 'discuss-svg'

describe('Discuss', () => {
  test('should render properly with default props', () => {
    render(<Discuss />)
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'discuss-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('height', '80')
    expect(component).toHaveAttribute('width', '80')
  })

  test('should render with custom props', () => {
    render(
      <Discuss
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        colors={['red', 'green']}
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
    component.querySelectorAll('path').forEach(circle => {
      expect(circle).toHaveAttribute('stroke', 'red')
    })
    component.querySelectorAll('circle').forEach(path => {
      expect(path).toHaveAttribute('stroke', 'green')
    })
  })
  test('should be hidden when visible is false', () => {
    render(<Discuss visible={false} />)
    const element = screen.queryAllByTestId(svgTestId)
    expect(element).toEqual([])
  })
})
