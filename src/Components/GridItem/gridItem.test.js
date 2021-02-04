import { render, screen } from '@testing-library/react'
import React from 'react'

import GridItem from '.'

test('should render correctly', () => {
  const { asFragment } = render(<GridItem number={1}/>)
  expect(asFragment()).toMatchSnapshot()
})

test('should render a grid item', () => {
  render(<GridItem number={1}/>)
  const linkElement = screen.getByTestId('grid-item-1')
  expect(linkElement).toBeInTheDocument()
})

test('should render a grid item with a value', () => {
  render(<GridItem number={2}/>)
  const linkElement = screen.getByTestId('grid-item-value')
  expect(linkElement).toBeInTheDocument()
})

test('should render the grid-item correctly given the correct props', () => {
  const { asFragment } = render(<GridItem number={1} isCommonMultiple/>)
  expect(asFragment()).toMatchSnapshot()
})
