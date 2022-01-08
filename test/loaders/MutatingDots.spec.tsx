import React from 'react'
import MutatingDots from '../../src/loader/MutatingDots'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'mutating-dots-loading'
const svgTestId = 'mutating-dots-svg'

describe('Mutating Dots Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<MutatingDots height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<MutatingDots height={100} color={'red'} width={100} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<MutatingDots height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<MutatingDots height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('id')
    expect(element).toHaveAttribute('aria-label')
  })
})
