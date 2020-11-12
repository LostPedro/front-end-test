import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {ButtonCp} from '../'

afterEach(cleanup)

it('should take a snapshot', () => {
  const {asFragment} = render(<ButtonCp />)

  expect(asFragment(<ButtonCp />)).toMatchSnapshot()
})
