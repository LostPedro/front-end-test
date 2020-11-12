import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {InputCp} from '../'

afterEach(cleanup)

it('should take a snapshot', () => {
  const {asFragment} = render(<InputCp />)

  expect(asFragment(<InputCp />)).toMatchSnapshot()
})
