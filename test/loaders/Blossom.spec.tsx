import React from 'react'
import Blossom from '../../src/loader/Blossom'
import { render, screen } from '@testing-library/react'

describe('Blossom Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<Blossom height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Blossom height={100} color={'red'} width={100} />)
    const element = screen.getByTestId('blossom-loading')
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Blossom height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId('blossom-loading')
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Blossom height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId('blossom-svg')
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('fill')
    expect(element).toHaveAttribute('aria-label')
  })
})
