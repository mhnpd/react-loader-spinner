import React from 'react'
import { InfinitySpin } from '../../src'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'infinity-spin'

describe('Hearts Loader', () => {
  it('Should render correctly', () => {
    render(<InfinitySpin color='#fff' width='80px' />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeNull()
    expect(element).toBeVisible()
  })
})
