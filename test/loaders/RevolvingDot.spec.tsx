import React from 'react'
import RevolvingDot from '../../src/loader/RevolvingDot'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'revolving-dot-loading'
const svgTestId = 'revolving-dot-svg'

describe('RevolvingDot Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<RevolvingDot height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<RevolvingDot height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<RevolvingDot height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<RevolvingDot height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('aria-label')
  })
})
