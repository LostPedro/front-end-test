import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {LoadingCp} from '../'

afterEach(cleanup)

it('should take a snapshot', () => {
  const {asFragment} = render(<LoadingCp />)

  expect(asFragment(<LoadingCp />)).toMatchSnapshot()
})
