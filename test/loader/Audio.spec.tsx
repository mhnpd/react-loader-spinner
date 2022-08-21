import React from 'react'
import { Audio } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

describe('Audio Loader', () => {
  it('Should render without crashing', () => {
    render(<Audio wrapperClass="test-class" wrapperStyle={{ opacity: '1' }} />)
    const loader = screen.getByTestId('audio-loading')
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveStyle('display: flex')
    expect(loader).toHaveAttribute('aria-label', 'audio-loading')
    expect(loader).toHaveAttribute('aria-busy', 'true')
    expect(loader).toHaveAttribute('role', 'status')
    expect(loader).toHaveClass('test-class')
    expect(loader).toHaveStyle('opacity:1')

    const svg = screen.getByTestId('audio-svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', DEFAULT_COLOR)
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('width', '100')
  })
  it('Should apply props pass externally', () => {
    render(
      <Audio
        wrapperClass="test-class"
        wrapperStyle={{ opacity: '1' }}
        width="200"
        height="200"
        ariaLabel="test-aria-label"
        color="red"
        visible={false}
      />
    )
    const loader = screen.getByTestId('audio-loading')
    expect(loader).toBeInTheDocument()
    expect(loader).toHaveAttribute('aria-label', 'test-aria-label')
    expect(loader).toHaveClass('test-class')
    expect(loader).toHaveStyle('opacity:1')
    expect(loader).toHaveStyle('display:none')

    const svg = screen.getByTestId('audio-svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', 'red')
    expect(svg).toHaveAttribute('height', '200')
    expect(svg).toHaveAttribute('width', '200')
  })
})
