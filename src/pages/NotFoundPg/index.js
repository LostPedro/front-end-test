import React from 'react'
import {Layout, Result} from 'antd'
import './style.less'
import {SETTINGS, KEYS} from '../../settings'
import {ButtonCp} from '../../components/ButtonCp'

export default class NotFoundPg extends React.Component {
  _pageName = 'not-found-page'

  // -------------------------------------------------------------------------//
  // Component Lifecycle
  // -------------------------------------------------------------------------//
  constructor(props) {
    super(props)

    this.state = {}
  }

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  onClickGoHome = () => {
    const {history} = this.props

    history.push({
      pathname: `${KEYS.pageKeys.transactionList}`
    })
  }

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//

  render() {
    return (
      <Layout className={this._pageName}>
        <Result
          status="404"
          title="404"
          subTitle={SETTINGS.NotFoundPg.title}
          extra={
            <div className={`${this._pageName}-button-wrapper`}>
              <ButtonCp
                onClick={this.onClickGoHome}
                buttonLabel={SETTINGS.NotFoundPg.goHome}
              />
            </div>
          }
        />
      </Layout>
    )
  }
}
