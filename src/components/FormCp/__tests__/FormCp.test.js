import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {FormCp} from '../'

afterEach(cleanup)

it('should take a snapshot', () => {
  const {asFragment} = render(<FormCp />)

  expect(asFragment(<FormCp />)).toMatchSnapshot()
})
