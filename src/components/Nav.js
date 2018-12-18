import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

class Nav extends Component {
  render () {
    const { authedUserInfo } = this.props
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
              {authedUserInfo === undefined ? (
                <div className='sweet-loading'>
                  <PacmanLoader color={'#2fbea4'} loading={true} size={13} />
                </div>
              ) : (
                <div>
                  Hello, {authedUserInfo.name}
                  <img
                    className='avatar-small'
                    src={authedUserInfo.avatarURL}
                  />
                </div>
              )}
            </div>
          </li>
          <li className='pure-menu-item'>
            <a href='' className='pure-menu-link'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return { authedUserInfo: users[authedUser] }
}

export default connect(mapStateToProps)(Nav)
