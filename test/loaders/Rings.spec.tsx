import React from 'react'
import Rings from '../../src/loader/Rings'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'rings-loading'
const svgTestId = 'rings-svg'

describe('Rings Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<Rings height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Rings height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Rings height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Rings height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('stroke')
    expect(element).toHaveAttribute('aria-label')
  })
})
