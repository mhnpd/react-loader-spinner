import React from 'react'
import { Oval } from '../../src/'
import { render, screen } from '@testing-library/react'
import { DEFAULT_COLOR } from '../../src/type'

const wrapperTestId = 'oval-loading'
const svgTestId = 'oval-svg'
const svgSecondaryGroup = 'oval-secondary-group'

describe('Oval Loader', () => {
  test('should render correctly with default props', () => {
    render(<Oval />)
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'oval-loading')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '80')
    expect(svg).toHaveAttribute('height', '80')
    expect(svg).toHaveAttribute('stroke', DEFAULT_COLOR)

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('stroke', DEFAULT_COLOR)
      expect(circle).toHaveAttribute('stroke-width', '2')
    })

    const secondaryGroup = screen.getByTestId(svgSecondaryGroup)
    expect(secondaryGroup).toBeDefined()
    expect(secondaryGroup).toHaveAttribute('stroke-width', '2')
  })

  test('should render correctly with custom props', () => {
    render(
      <Oval
        width={100}
        height={100}
        strokeWidth={5}
        strokeWidthSecondary={10}
        wrapperClass="wrapper-class"
        wrapperStyle={{ opacity: '1' }}
        ariaLabel="custom-label"
        color="red"
        secondaryColor="blue"
      />
    )
    const component = screen.getByTestId(wrapperTestId)
    expect(component).toBeDefined()
    expect(component).toHaveAttribute('aria-label', 'custom-label')
    expect(component).toHaveAttribute('role', 'status')
    expect(component).toHaveAttribute('aria-busy', 'true')
    expect(component).toHaveStyle('display:flex')
    expect(component).toHaveStyle('opacity:1')
    expect(component).toHaveClass('wrapper-class')

    const svg = screen.getByTestId(svgTestId)
    expect(svg).toBeDefined()
    expect(svg).toHaveAttribute('width', '100')
    expect(svg).toHaveAttribute('height', '100')
    expect(svg).toHaveAttribute('stroke', 'red')

    svg.querySelectorAll('circle').forEach(circle => {
      expect(circle).toHaveAttribute('stroke', 'blue')
      expect(circle).toHaveAttribute('stroke-width', '5')
    })

    const secondaryGroup = screen.getByTestId(svgSecondaryGroup)
    expect(secondaryGroup).toBeDefined()
    expect(secondaryGroup).toHaveAttribute('stroke-width', '10')
  })

  test('should be hidden when visible is false', () => {
    render(<Oval visible={false} />)
    const element = screen.getByTestId(wrapperTestId)
    expect(element).not.toBeVisible()
    expect(element).toHaveStyle('display:none')
  })
})
