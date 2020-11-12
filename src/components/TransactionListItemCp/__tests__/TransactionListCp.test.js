import React from 'react'
import {render, cleanup} from '@testing-library/react'
import {TransactionListItemCp} from '../'

afterEach(cleanup)

it('should take a snapshot', () => {
  const {asFragment} = render(<TransactionListItemCp />)

  expect(asFragment(<TransactionListItemCp />)).toMatchSnapshot()
})
