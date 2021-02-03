import { render, screen } from '@testing-library/react';

import Grid from './index'

test('should show a grid', () => {
  render(<Grid />);
  const linkElement = screen.getByTestId("grid");
  expect(linkElement).toBeInTheDocument();
})
