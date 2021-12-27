import React from 'react'
import Circles from '../../src/loader/Circles'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'circles-loading'
const svgTestId = 'circles-svg'

describe('Circles Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<Circles height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Circles height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Circles height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Circles height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('fill')
    expect(element).toHaveAttribute('aria-label')
  })
})
