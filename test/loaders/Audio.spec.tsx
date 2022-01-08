import React from 'react'
import Audio from '../../src/loader/Audio'
import { render, screen } from '@testing-library/react'

describe('Audio Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<Audio height={100} color={'red'} width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Audio height={100} color={'red'} width={100} />)
    const element = screen.getByTestId('audio-loading')
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Audio height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId('audio-loading')
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Audio height={100} color={'red'} width={100} visible={false} />)
    const element = screen.getByTestId('audio-svg')
    expect(element).toHaveAttribute('height')
    expect(element).toHaveAttribute('width')
    expect(element).toHaveAttribute('fill')
    expect(element).toHaveAttribute('aria-label')
  })
})
