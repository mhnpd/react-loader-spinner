import React from 'react'
import { RotatingLines } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const svgTestId = 'rotating-lines-svg'

describe('Rotating Lines Loader', () => {
  it('should render a rotating lines loader', () => {
    render(<RotatingLines />)
    const loader = screen.getByTestId(svgTestId)
    expect(loader).toHaveAttribute('width', '96')
    expect(loader).toHaveAttribute('stroke', DEFAULT_COLOR)
    expect(loader).toHaveAttribute('speed', '0.75')
  })
  it('should apply custom props', () => {
    render(
      <RotatingLines
        strokeWidth="10"
        animationDuration="1"
        width="100"
        strokeColor="red"
      />,
    )
    const loader = screen.getByTestId(svgTestId)
    expect(loader).toHaveAttribute('width', '100')
    expect(loader).toHaveAttribute('stroke', 'red')
    expect(loader).toHaveAttribute('speed', '1')
  })
})
