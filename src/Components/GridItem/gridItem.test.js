import { render, screen } from '@testing-library/react';

import GridItem from './';

test('renders a grid item', () => {
  render(<GridItem number="1"/>);
  const linkElement = screen.getByTestId("grid-item-1");
  expect(linkElement).toBeInTheDocument();
});
