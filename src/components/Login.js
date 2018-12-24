import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../actions/auth'

class Login extends Component {
  state = { uid: null, redirectToReferrer: false }

  onChange = e => {
    const uid = e.target.value
    this.setState({ uid })
  }

  login = (onLogin, uid) => {
    onLogin(uid)
    this.setState({redirectToReferrer: true})
  }

  render () {
    const { defaultOption, users, onLogin } = this.props
    const { uid, redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        Welcome to the Would You Rather App! Please sign in to continue
        <img src='' alt='Would You... ' />
        Sign in
        <select value={uid || defaultOption} onChange={this.onChange}>
          {Object.values(users).map(u => (
            <option value={u.id} key={u.id}>
              {u.name}
            </option>
          ))}
        </select>
        <button onClick={() => this.login(onLogin, uid || defaultOption)}>Sign in</button>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users,
    defaultOption: users ? Object.keys(users)[0] : null
  }
}

function mapDispatchToProps (dispatch) {
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
