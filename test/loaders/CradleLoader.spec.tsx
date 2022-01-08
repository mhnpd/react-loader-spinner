import React from 'react'
import CradleLoader from '../../src/loader/CradleLoader'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'cradle-loading'

describe('Cradle Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<CradleLoader />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<CradleLoader />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('div')
  })
  test('should be hidden when visibile is false', () => {
    render(<CradleLoader visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<CradleLoader />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toHaveAttribute('aria-label')
  })
})
