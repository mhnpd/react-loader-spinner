import React from 'react'
import { RotatingLines } from '../../src'
import { render, screen } from '@testing-library/react'

const svgTestId = 'rotating-lines-svg'

describe('Rotating Lines Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<RotatingLines width="100" />)
    expect(component).toBeDefined()
  })

  test('should be able to render without any props', () => {
    render(<RotatingLines />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })

  test('should have a correct attributes', () => {
    render(
      <RotatingLines
        strokeColor="red"
        strokeWidth="1"
        animationDuration="0.2"
        width="50"
        visible={true}
      />
    )
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('stroke')
    expect(element).toHaveStyle('animation-duration:0.2s')
    expect(element).toHaveAttribute('role', 'status')
  })
})
