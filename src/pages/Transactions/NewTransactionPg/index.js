import React from 'react'

import {SETTINGS, IMAGES} from '../../../settings'

import {NavHeaderCp} from '../../../components/NavHeaderCp'

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
  onClickGoBack = () => {
    const {history} = this.props
    history.goBack()
  }

  // -------------------------------------------------------------------------//
  // Other Functions
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//
  render() {
    return (
      <div className={this._pageName}>
        <NavHeaderCp
          title={SETTINGS.NewTransactionPg.title}
          onClickLeft={this.onClickGoBack}
          leftIcon={
            <img
              className={`${this._pageName}-back-icon`}
              src={IMAGES.icons.backArrow}
              alt={SETTINGS.NewTransactionPg.backIcon}
            />
          }
        />
      </div>
    )
  }
}

NewTransactionPg.propTypes = {}

NewTransactionPg.defaultProps = {}

export default NewTransactionPg
