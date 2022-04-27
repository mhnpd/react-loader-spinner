import React from 'react'
import MorphShapes from '../../src/loader/MorphShapes'
import { render, screen } from '@testing-library/react'

describe('MorphShapes Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<MorphShapes height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<MorphShapes height={100} color={'red'} width={100} />)
    const element = screen.getByTestId('morphShapes-loading')
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<MorphShapes height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId('morphShapes-loading')
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<MorphShapes height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId('morphShapes-svg')
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('fill')
    expect(element).toHaveAttribute('aria-label')
  })
})
