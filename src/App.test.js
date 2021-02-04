import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders the app', () => {
  const { asFragment } = render(<App />)

  expect(asFragment(<App />)).toMatchSnapshot()
})
