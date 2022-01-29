import React from 'react'
import RotatingSquare from '../../src/loader/RotatingSquare'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'rotating-square-wrapper'
const svgTestId = 'rotating-square-svg'

describe('RotatingSquare Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<RotatingSquare height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<RotatingSquare height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<RotatingSquare height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test.only('should have a correct attributes', () => {
    const { getByRole } = render(
      <RotatingSquare
        height={100}
        color={'red'}
        width={100}
        strokeWidth={5}
        visible={false}
      />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('aria-label')
  })
})
