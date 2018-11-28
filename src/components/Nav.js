import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <div class='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
        <ul class='pure-menu-list'>
          <li class='pure-menu-item pure-menu-selected'>
            <a href='#' class='pure-menu-link'>
              Home
            </a>
          </li>
          <li class='pure-menu-item'>
            <a href='#' class='pure-menu-link'>
              New Question
            </a>
          </li>
          <li class='pure-menu-item'>
            <a href='#' class='pure-menu-link'>
              Leader Board
            </a>
          </li>
          <li class='pure-menu-item'>
            <div className='nav-user'>
              Hello, Player! <img />
            </div>
          </li>
          <li class='pure-menu-item'>
            <a class='pure-menu-link' href=''>
              Logout
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
