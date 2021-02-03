import { render, screen } from '@testing-library/react';

import Grid from './index'

test('should show a grid', () => {
  render(<Grid />);
  const element = screen.getByTestId("grid");
  expect(element).toBeInTheDocument();
})

test('should show correct grid items in the grid', () => {
    render(<Grid itemAmount={3}/>);

    const gridItem1 = screen.getByTestId("grid-item-1");
    const gridItem2 = screen.getByTestId("grid-item-3");

    expect(gridItem1).toBeInTheDocument();
    expect(gridItem2).toBeInTheDocument();
})

test('should NOT show more grid items than the item amount', () => {
    render(<Grid itemAmount={3}/>);

    const gridItem = screen.queryByTestId("grid-item-4");
    expect(gridItem).not.toBeInTheDocument();

})
