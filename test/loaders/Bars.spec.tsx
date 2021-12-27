import React from 'react'
import Bars from '../../src/loader/Bars'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'bars-loading'
const svgTestId = 'bars-svg'

describe('Bars Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<Bars height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Bars height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Bars height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Bars height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('fill')
    expect(element).toHaveAttribute('aria-label')
  })
})
