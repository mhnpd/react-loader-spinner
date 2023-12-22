import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hairball, HairballPreset } from '../../src/beta'

describe('Hairball', () => {
  test('renders with default props', () => {
    render(<Hairball />);
    expect(screen.getByTestId('hairball')).toBeInTheDocument();
  });

  test('renders with custom props', () => {
    render(
      <Hairball
        preset={HairballPreset.sunrise}
        backgroundColor="#000"
        speed={3}
        width={200}
        height={200}
        visible={true}
        ariaLabel="Custom Hairball loading"
        wrapperClass="custom-class"
      />
    );
    const hairball = screen.getByTestId('hairball');
    expect(hairball).toBeInTheDocument();
    expect(hairball).toHaveClass('custom-class');
    expect(hairball).toHaveStyle({
      backgroundColor: '#000',
    });
    expect(hairball).toHaveAttribute('aria-label', 'Custom Hairball loading');
    expect(hairball).toHaveAttribute('role', 'progressbar');
    expect(hairball).toHaveAttribute('width', '200');
    expect(hairball).toHaveAttribute('height', '200');
  });

  test('renders with preset', () => {
    render(<Hairball preset="sunrise" />);
    const hairball = screen.getByTestId('hairball');
    expect(hairball).toBeInTheDocument();
    hairball.querySelectorAll('path').forEach((path) => {
      expect(path).toHaveAttribute('fill');
    });
  });

  test('should not render when visible is false', () => {
    render(<Hairball visible={false} />);
    expect(screen.queryByTestId('hairball')).not.toBeInTheDocument();
  });
});
