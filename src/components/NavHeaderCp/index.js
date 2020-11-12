import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

export const NavHeaderCp = ({
  _componentName,
  title,
  onClickLeft,
  onClickRight,
  leftIcon,
  rightIcon
}) => {
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
    <div className={_componentName}>
      <div
        className={`${_componentName}-nav-icon-wrapper`}
        aria-hidden="true"
        role="button"
        onClick={onClickLeft}>
        {leftIcon}
      </div>

      <span className={`${_componentName}-nav-header-title`}>{title}</span>

      <div
        className={`${_componentName}-nav-icon-wrapper`}
        aria-hidden="true"
        role="button"
        onClick={onClickRight}>
        {rightIcon}
      </div>
    </div>
  )
}

// Component props and default prop values
NavHeaderCp.propTypes = {
  _componentName: PropTypes.string,
  title: PropTypes.string,
  onClickLeft: PropTypes.func,
  onClickRight: PropTypes.func,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element
}

NavHeaderCp.defaultProps = {
  _componentName: 'nav-header-component',
  title: '',
  onClickLeft: () => {},
  onClickRight: () => {},
  leftIcon: <div />,
  rightIcon: <div />
}
