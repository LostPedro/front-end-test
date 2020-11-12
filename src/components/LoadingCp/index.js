import React from 'react'
import {Spin} from 'antd'
import PropTypes from 'prop-types'

import './style.less'

export const LoadingCp = ({_componentName, visible, solid}) => {
  // -------------------------------------------------------------------------//
  // Hooks
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Effects
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Other functions
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Rendering
  // -------------------------------------------------------------------------//

  return (
    <>
      <div
        className={visible ? _componentName : `${_componentName}-fade`}
        style={{
          backgroundColor: solid ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.75)'
        }}>
        <Spin spinning size="large" />
      </div>
    </>
  )
}

// Component props and default prop values
LoadingCp.propTypes = {
  _componentName: PropTypes.string,
  visible: PropTypes.bool,
  solid: PropTypes.bool
}

LoadingCp.defaultProps = {
  _componentName: 'loading-component',
  visible: false,
  solid: false
}
