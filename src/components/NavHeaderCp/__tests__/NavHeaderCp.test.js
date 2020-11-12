import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {NavHeaderCp} from '../'

afterEach(cleanup)

it('should take a snapshot', () => {
  const {asFragment} = render(<NavHeaderCp />)

  expect(asFragment(<NavHeaderCp />)).toMatchSnapshot()
})
