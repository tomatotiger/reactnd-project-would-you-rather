import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {FaHandPointUp} from 'react-icons/fa/index'

import { login } from '../actions/auth'

class Login extends Component {
  state = { uid: null, redirectToReferrer: false }

  static propTypes = {
    users: PropTypes.array,
    onLogin: PropTypes.func.isRequired
  }

  onChange = e => {
    const uid = e.target.value
    this.setState({ uid })
  }

  login = (onLogin, uid) => {
    onLogin(uid)
    this.setState({ redirectToReferrer: true })
  }

  render () {
    const { users, onLogin } = this.props
    const { uid, redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer) return <Redirect to={from} />
    if (users === null) {
      return 'Loading...'
    }
    if (users.length === 0) {
      return 'No users for playing. Please Create some users first.'
    }
    const defaultOption = users[0].id
    return (
      <div className='login-box pure-form pure-form-stacked'>
        <div className='title'>
          <h5>Welcome to the Would You Rather App!</h5>
          <p>Please sign in to continue</p>
        </div>
        <div className='login-content'>
          <FaHandPointUp className='login-icon' />
          <h3>Sign in</h3>
          <select value={uid || defaultOption} onChange={this.onChange}>
            {Object.values(users).map(u => (
              <option
                value={u.id}
                key={u.id}
                className='users-select'
                style={{
                  backgroundImage: `url(/images/avatars/${u.avatarURL})`
                }}
              >
                {u.name}
              </option>
            ))}
          </select>
          <button
            className='pure-button'
            onClick={() => this.login(onLogin, uid || defaultOption)}
          >
            Sign in
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users === null ? null : Object.values(users)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: uid => {
      dispatch(login(uid))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
