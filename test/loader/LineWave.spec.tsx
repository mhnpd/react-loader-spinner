import React from 'react'
import { LineWave } from '../../src'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'line-wave-wrapper'
const svgTestId = 'line-wave-svg'

describe('Line Wave', () => {
  test('should render correctly with default props', () => {
    render(<LineWave />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'line-wave-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '100')
    expect(svg).toHaveAttribute('height', '100')

    svg.querySelectorAll('rect').forEach(rect => {
      expect(rect).toBeDefined()
      expect(rect).toHaveAttribute('fill', DEFAULT_COLOR)
    })
  })

  test('should render correctly when custom props are passed', () => {
    render(
      <LineWave
        height={200}
        width={200}
        color="#ff0000"
        ariaLabel="custom-line-wave-loading"
        wrapperStyle={{ opacity: '0.5' }}
        wrapperClass="custom-wrapper-class"
        firstLineColor="red"
        middleLineColor="red"
        lastLineColor="red"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'custom-line-wave-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')

    svg.querySelectorAll('rect').forEach(rect => {
      expect(rect).toBeDefined()
      expect(rect).toHaveAttribute('fill', 'red')
    })
  })
  test('should be hidden when visible is false', () => {
    render(<LineWave visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
