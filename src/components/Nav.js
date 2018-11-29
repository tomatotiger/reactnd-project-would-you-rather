import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
        <ul className='pure-menu-list'>
          <li className='pure-menu-item pure-menu-selected'>
            <a href='#' className='pure-menu-link'>
              Home
            </a>
          </li>
          <li className='pure-menu-item'>
            <a href='#' className='pure-menu-link'>
              New Question
            </a>
          </li>
          <li className='pure-menu-item'>
            <a href='#' className='pure-menu-link'>
              Leader Board
            </a>
          </li>
          <li className='pure-menu-item'>
            <div className='nav-user'>
              Hello, Player! <img />
            </div>
          </li>
          <li className='pure-menu-item'>
            <a className='pure-menu-link' href='#'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
