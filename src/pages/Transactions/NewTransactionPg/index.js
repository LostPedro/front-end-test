import React from 'react'

import {SETTINGS, IMAGES} from '../../../settings'

import {NavHeaderCp} from '../../../components/NavHeaderCp'
import {ButtonCp} from '../../../components/ButtonCp'

import './style.less'

class NewTransactionPg extends React.Component {
  _pageName = 'new-transaction-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {
      disableBtn: true
    }
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

  onClickRegisterButton = () => {
    const {history} = this.props
    history.goBack()
  }

  // -------------------------------------------------------------------------//
  // Other Functions
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//
  renderForm = () => {
    return (
      <div className={`${this._pageName}-form-container`}>
        <div />
      </div>
    )
  }

  render() {
    const {disableBtn} = this.state
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
        {this.renderForm()}
        <div className={`${this._pageName}-register-button-wrapper`}>
          <ButtonCp
            disabled={disableBtn}
            onClick={this.onClickRegisterButton}
            buttonLabel={SETTINGS.NewTransactionPg.registerButtonLabel}
            type="submit"
          />
        </div>
      </div>
    )
  }
}

NewTransactionPg.propTypes = {}

NewTransactionPg.defaultProps = {}

export default NewTransactionPg
