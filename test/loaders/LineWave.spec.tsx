import React from 'react'
import LineWave from '../../src/loader/LineWave'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'line-wave-wrapper'
const svgTestId = 'line-wave-svg'
const firstLineTestId = 'line-wave-svg-first-line'
const middleLineTestId = 'line-wave-svg-middle-line'
const lastLineTestId = 'line-wave-svg-last-line'

describe('Circles With bar Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<
      LineWave
      height={100}
      color={'red'}
      width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<LineWave
      height={100}
      color={'red'}
      width={100}
    />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visible is false', () => {
    render(<LineWave
      height={100}
      color={'red'}
      width={100}
      visible={false}
    />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<LineWave
      height={120}
      width={120}
      color={'red'}
      middleLineColor='green'
      lastLineColor='blue'
      wrapperStyle={{ padding: '10px' }}
      wrapperClass='testClass'
      visible={true} />)

    const wrapperDiv = screen.getByTestId(wrapperTestId)
    const svg = screen.getByTestId(svgTestId)
    const firstLine = screen.getByTestId(firstLineTestId)
    const secondLine = screen.getByTestId(middleLineTestId)
    const thirdLine = screen.getByTestId(lastLineTestId)

    expect(svg).toHaveAttribute('height', '120')
    expect(svg).toHaveAttribute('width', '120')
    expect(firstLine).toHaveAttribute('fill', 'red')
    expect(secondLine).toHaveAttribute('fill', 'green')
    expect(thirdLine).toHaveAttribute('fill', 'blue')
    expect(wrapperDiv).toHaveStyle('padding:10px')
    expect(wrapperDiv).toHaveClass('testClass')
  })
})
