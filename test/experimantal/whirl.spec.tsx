import React from 'react';
import { render, screen } from '@testing-library/react';
import { Whirl } from '../../src/beta'

describe('Whirl', () => {
  test('renders Whirl component', () => {
    render(<Whirl />);
    const svgElement = screen.getByTestId('whirl');
    expect(svgElement).toBeInTheDocument();
  });

  test('applies wrapperClass correctly', () => {
    render(<Whirl wrapperClass="test-class" />);
    const svgElement = screen.getByTestId('whirl');
    expect(svgElement).toHaveClass('test-class');
  });

  test('applies wrapperStyle correctly', () => {
    render(<Whirl wrapperStyle={{ backgroundColor: 'red' }} />);
    const svgElement = screen.getByTestId('whirl');
  expect(svgElement).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  test('does not render when visible is false', () => {
    render(<Whirl visible={false} />);
    const svg = screen.queryByTestId('whirl');
    expect(svg).not.toBeInTheDocument();
  });
});

