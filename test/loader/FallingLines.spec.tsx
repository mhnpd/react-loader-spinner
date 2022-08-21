import React from 'react'
import { FallingLines } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'falling-lines'
const rectTestIdOne = 'falling-lines-rect-1'
const rectTestIdTwo = 'falling-lines-rect-2'

describe('FallingLines', () => {
  it('should render correctly with default props', () => {
    render(<FallingLines />)
    const loader = screen.getByTestId(wrapperTestId)
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('width', '100')
    expect(loader).toHaveAttribute('height', '100')

    const rect1 = screen.getByTestId(rectTestIdOne)
    expect(rect1).toBeInTheDocument()
    expect(rect1).toHaveAttribute('fill', DEFAULT_COLOR)

    const rect2 = screen.getByTestId(rectTestIdTwo)
    expect(rect2).toBeInTheDocument()
    expect(rect2).toHaveAttribute('fill', DEFAULT_COLOR)
  })

  it('should render with custom props', () => {
    const width = '200'
    const color = '#ff0000'
    render(<FallingLines width={width} color={color} />)
    const loader = screen.getByTestId(wrapperTestId)
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('width', width)
    expect(loader).toHaveAttribute('height', width)

    const rect1 = screen.getByTestId(rectTestIdOne)
    expect(rect1).toBeInTheDocument()
    expect(rect1).toHaveAttribute('fill', color)

    const rect2 = screen.getByTestId(rectTestIdTwo)
    expect(rect2).toBeInTheDocument()
    expect(rect2).toHaveAttribute('fill', color)
  })

  it('should have display none css applied when visibility is false', async () => {
    render(<FallingLines visible={false} />)
    const loader = await screen.queryByTestId(wrapperTestId)
    expect(loader).toBeNull()
  })
})
