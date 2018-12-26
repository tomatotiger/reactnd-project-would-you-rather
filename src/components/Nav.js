import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { logout } from '../actions/auth'

const Nav = props => {
  const { authedUserInfo, onLogout } = props
  return (
    <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
      <ul className='pure-menu-list'>
        <li className='pure-menu-item pure-menu-selected'>
          <Link to='/' className='pure-menu-link'>
            Home
          </Link>
        </li>
        <li className='pure-menu-item'>
          <Link to='/new' className='pure-menu-link'>
            New Question
          </Link>
        </li>
        <li className='pure-menu-item'>
          <Link to='/leader-board' className='pure-menu-link'>
            Leader Board
          </Link>
        </li>
        <li className='pure-menu-item'>
          <div className='nav-user'>
            {authedUserInfo === null ? (
              <div className='loader' />
            ) : (
              <div>
                Hello, {authedUserInfo.name}
                <img
                  className='avatar-small'
                  src={`/images/avatars/${authedUserInfo.avatarURL}`}
                  alt={authedUserInfo.name}
                />
              </div>
            )}
          </div>
        </li>
        <li className='pure-menu-item'>
          <button className='logout-button' onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  onLogout: PropTypes.func.isRequired,
  authedUserInfo: PropTypes.object
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser]
  return { authedUserInfo: user || null }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
)
