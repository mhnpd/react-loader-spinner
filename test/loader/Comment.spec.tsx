import React from 'react'
import { Comment } from '../../src'
import { render, screen } from '@testing-library/react'

const svgTestId = 'comment-svg'

describe('Comment', () => {
  test('should render properly with default props', () => {
    render(<Comment />)
    const component = screen.getByTestId(svgTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'comment-loading')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('height', '80')
    expect(component).toHaveAttribute('width', '80')
  })

  test('should render with custom props', () => {
    render(
      <Comment
        height={200}
        width={200}
        ariaLabel="test-aria-label"
        color="red"
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        backgroundColor="blue"
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
    component.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('fill', 'red')
    })
    component.querySelectorAll('path').forEach(circle => {
      expect(circle).toHaveAttribute('fill', 'blue')
    })
  })
  test('should be hidden when visible is false', () => {
    render(<Comment visible={false} />)
    const element = screen.queryAllByTestId(svgTestId)
    expect(element).toEqual([])
  })
})
