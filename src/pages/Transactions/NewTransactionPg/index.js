import React from 'react'
import {message} from 'antd'
import t from 'typy'

import {SETTINGS, IMAGES} from '../../../settings'

import {NavHeaderCp} from '../../../components/NavHeaderCp'
import {FormCp} from '../../../components/FormCp'
import {postTransaction} from '../../../services'
import './style.less'

class NewTransactionPg extends React.Component {
  _pageName = 'new-transaction-page'
  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//

  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount() {}

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//
  postTransactionRequest = async (input) => {
    const {loading} = this.state
    this.setState({loading: true})

    try {
      const response = await postTransaction(input)
      if (response) {
        this.setState(
          {
            loading: false
          },
          () => {
            console.log('response', response)
            console.log(loading)
          }
        )
      }
    } catch (e) {
      message.error(t(e, 'message').safeString)
      this.setState({loading: false})
    }
  }

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
        <div className={`${this._pageName}-form-container`}>
          <FormCp postRequest={this.postTransactionRequest} />
        </div>
      </div>
    )
  }
}

NewTransactionPg.propTypes = {}

NewTransactionPg.defaultProps = {}

export default NewTransactionPg
