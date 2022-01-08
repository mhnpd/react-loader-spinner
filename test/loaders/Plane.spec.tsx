import React from 'react'
import Plane from '../../src/loader/Plane'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'plane-loading'
const svgTestId = 'plane-svg'

describe('Plane Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<Plane color={'red'} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<Plane />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<Plane color={'red'} visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<Plane />)
    const element = screen.getByTestId(svgTestId)
    expect(element).toHaveAttribute('aria-label')
  })
})
