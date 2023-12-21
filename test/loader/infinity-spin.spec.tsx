import React from 'react'
import { InfinitySpin } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'infinity-spin'
const SvgPath1 = 'infinity-spin-path-1'
const SvgPath2 = 'infinity-spin-path-2'

describe('InfinitySpin Loader', () => {
  it('Should render correctly', () => {
    render(<InfinitySpin />)
    const loader = screen.getByTestId(wrapperTestId)
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('width', '200')

    const path1 = screen.getByTestId(SvgPath1)
    expect(path1).toBeInTheDocument()
    expect(path1).toHaveAttribute('stroke', DEFAULT_COLOR)

    const path2 = screen.getByTestId(SvgPath2)
    expect(path2).toBeInTheDocument()
    expect(path2).toHaveAttribute('stroke', DEFAULT_COLOR)
  })
  it('Should render apply custom props', () => {
    render(<InfinitySpin width="250" color="red" />)
    const loader = screen.getByTestId(wrapperTestId)
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('width', '250')

    const path1 = screen.getByTestId(SvgPath1)
    expect(path1).toBeInTheDocument()
    expect(path1).toHaveAttribute('stroke', 'red')

    const path2 = screen.getByTestId(SvgPath2)
    expect(path2).toBeInTheDocument()
    expect(path2).toHaveAttribute('stroke', 'red')
  })
})
