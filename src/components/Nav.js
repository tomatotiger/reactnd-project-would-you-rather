import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { logout } from '../actions/auth'

const Nav = props => {
  const { authedUserInfo, onLogout, location } = props
  const path = location.pathname
  return (
    <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
      <ul className='pure-menu-list'>
        <li className='pure-menu-item pure-menu-selected'>
          <Link
            to='/'
            className='pure-menu-link'
          >
            Home
          </Link>
        </li>
        <li className='pure-menu-item'>
          <Link
            to='/add'
            className={`pure-menu-link  ${path === '/add' && 'menu-selected'}`}
          >
            New Question
          </Link>
        </li>
        <li className='pure-menu-item'>
          <Link
            to='/leaderboard'
            className={`pure-menu-link  ${path === '/leaderboard' &&
              'menu-selected'}`}
          >
            Leader Board
          </Link>
        </li>
        {authedUserInfo === null ? (
          <li className='pure-menu-item'>
            <div className='loader' />
          </li>
        ) : (
          <li className='pure-menu-item'>
            <div className='nav-user'>
              Hello, {authedUserInfo.name}
              <img
                className='avatar-small'
                src={`/images/avatars/${authedUserInfo.avatarURL}`}
                alt={authedUserInfo.name}
              />
              <button className='logout-button' onClick={onLogout}>
                Logout
              </button>
            </div>
          </li>
        )}
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
