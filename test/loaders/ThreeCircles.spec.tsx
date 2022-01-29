import React from 'react'
import ThreeCircles from '../../src/loader/ThreeCircles'
import { render, screen } from '@testing-library/react'

const wrapperTestId = 'three-circles-wrapper'
const svgTestId = 'three-circles-svg'
const outerCircleTestId = 'three-circles-svg-outer-circle'
const innerCircleTestId = 'three-circles-svg-inner-circle'
const middleCircleTestId = 'three-circles-svg-middle-circle'

describe('Circles With bar Loader', () => {
  test('should be importable correctly', () => {
    const component = render(<
      ThreeCircles
      height={100}
      color={'red'}
      width={100} />)
    expect(component).toBeDefined()
  })

  test('should have a test classes', () => {
    render(<ThreeCircles
      height={100}
      color={'red'}
      width={100}
    />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).toBeVisible()
    expect(element).toContainHTML('svg')
  })
  test('should be hidden when visible is false', () => {
    render(<ThreeCircles
      height={100}
      color={'red'}
      width={100}
      visible={false}
    />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
  })

  test('should have a correct attributes', () => {
    render(<ThreeCircles
      height={120}
      width={120}
      color={'red'}
      middleCircleColor='green'
      innerCircleColor='blue'
      wrapperStyle={{ padding: '10px' }}
      wrapperClass='testClass'
      visible={true} />)

    const wrapperDiv = screen.getByTestId(wrapperTestId)
    const svg = screen.getByTestId(svgTestId)
    const outerCircle = screen.getByTestId(outerCircleTestId)
    const innerCircle = screen.getByTestId(innerCircleTestId)
    const middleCircle = screen.getByTestId(middleCircleTestId)

    expect(svg).toHaveAttribute('height', '120')
    expect(svg).toHaveAttribute('width', '120')
    expect(outerCircle).toHaveAttribute('fill', 'red')
    expect(innerCircle).toHaveAttribute('fill', 'blue')
    expect(middleCircle).toHaveAttribute('fill', 'green')
    expect(wrapperDiv).toHaveStyle('padding:10px')
    expect(wrapperDiv).toHaveClass('testClass')
  })
})
