import React from 'react'
import { render } from '@testing-library/react'

import Layout from '.'

test('should render correctly', () => {
  const { asFragment } = render(<Layout />)
  expect(asFragment()).toMatchSnapshot()
})
