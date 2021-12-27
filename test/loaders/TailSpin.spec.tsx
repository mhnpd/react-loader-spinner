import React from 'react'
import TailSpin from '../../src/loader/TailSpin'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'tail-spin-loading'
const svgTestId = 'tail-spin-svg'

describe('Rings Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<TailSpin height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<TailSpin height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<TailSpin height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<TailSpin height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('aria-label')
  })
})
