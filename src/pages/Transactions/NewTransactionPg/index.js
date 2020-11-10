import React from 'react'

import {SETTINGS} from '../../../settings'

import './style.less'

class NewTransactionPg extends React.Component {
  _pageName = 'new-transaction-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Other Functions
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//
  render() {
    return (
      <div className={this._pageName}>{SETTINGS.NewTransactionPg.title}</div>
    )
  }
}

NewTransactionPg.propTypes = {}

NewTransactionPg.defaultProps = {}

export default NewTransactionPg
