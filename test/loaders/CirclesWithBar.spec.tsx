import React from 'react'
import CirclesWithBar from '../../src/loader/CirclesWithBar'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'circles-with-bar-wrapper'
const svgTestId = 'circles-with-bar-svg'
const outerCircleTestId = 'circles-with-bar-svg-outer-circle'
const innerCircleTestId = 'circles-with-bar-svg-inner-circle'
const insideBarTestId = 'circles-with-bar-svg-bar'

describe('Circles With bar Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<
      CirclesWithBar
      height={100}
      color={'red'}
      width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<CirclesWithBar
      height={100}
      color={'red'}
      width={100}
    />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visibile is false', () => {
    render(<
      CirclesWithBar
      height={100}
      color={'red'}
      width={100}
    />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<CirclesWithBar
      height={120}
      width={120}
      color={'red'}
      innerCircleColor='blue'
      wrapperStyle={{ padding: '10px' }}
      wrapperClass='testClass'
      barColor='grey'
      visible={true} />)

    const wrapperDiv = screen.getByTestId(wrapperTestId)
    const svg = screen.getByTestId(svgTestId)
    const outerCircle = screen.getByTestId(outerCircleTestId)
    const innerCircle = screen.getByTestId(innerCircleTestId)
    const bar = screen.getByTestId(insideBarTestId)

    expect(svg).toHaveAttribute('height', '120')
    expect(svg).toHaveAttribute('width', '120')
    expect(outerCircle).toHaveAttribute('stroke', 'red')
    expect(innerCircle).toHaveAttribute('stroke', 'blue')
    expect(bar).toHaveAttribute('fill', 'grey')
    expect(wrapperDiv).toHaveStyle('padding:10px')
    expect(wrapperDiv).toHaveClass('testClass')
  })
})
