import React from 'react'
import { CircularProgress } from '../../src'
import { render, screen } from '@testing-library/react'

describe('CircularProgress Loader', () => {
  it('Should render without crashing', () => {
    render(<CircularProgress wrapperClass="test-class" wrapperStyle={{ opacity: '1' }} />)
    const loader = screen.getByTestId('circular-progress-loading')
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveStyle('display: flex')
    expect(loader).toHaveAttribute('aria-label', 'circular-progress-loading')
    expect(loader).toHaveAttribute('aria-busy', 'true')
    expect(loader).toHaveAttribute('role', 'progressbar')
    expect(loader).toHaveClass('test-class')
    expect(loader).toHaveStyle('opacity:1')

    const svg = screen.getByTestId('circular-progress-svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('width', '100')
    expect(svg).toHaveAttribute('fill', 'none')
  })

  it('Should apply props passed externally', () => {
    render(
      <CircularProgress
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        width="200"
        height="200"
        ariaLabel="test-aria-label"
        color="red"
        secondaryColor="blue"
        strokeWidth="4"
        animationDuration="2"
        visible={false}
      />
    )
    const loader = screen.getByTestId('circular-progress-loading')
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('aria-label', 'test-aria-label')
    expect(loader).toHaveClass('test-class')
    expect(loader).toHaveStyle('opacity:1')
    expect(loader).toHaveStyle('display:none')

    const svg = screen.getByTestId('circular-progress-svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveStyle('animation: spin 2s linear infinite')
  })

  it('Should use default color when secondaryColor is not provided', () => {
    render(<CircularProgress color="green" />)
    const svg = screen.getByTestId('circular-progress-svg')
    const backgroundPath = svg.querySelector('path[opacity="0.5"]')
    expect(backgroundPath).toHaveAttribute('stroke', 'green')
  })

  it('Should use secondaryColor when provided', () => {
    render(<CircularProgress color="green" secondaryColor="red" />)
    const svg = screen.getByTestId('circular-progress-svg')
    const backgroundPath = svg.querySelector('path[opacity="0.5"]')
    expect(backgroundPath).toHaveAttribute('stroke', 'red')
  })

  it('Should apply custom strokeWidth', () => {
    render(<CircularProgress strokeWidth="3" />)
    const svg = screen.getByTestId('circular-progress-svg')
    const backgroundPath = svg.querySelector('path[opacity="0.5"]')
    expect(backgroundPath).toHaveAttribute('stroke-width', '3')
  })
})