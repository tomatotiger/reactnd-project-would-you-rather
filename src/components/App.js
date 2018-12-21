import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    const { authedUser } = this.props
    return (
      <Router>
        <div>
          <Route path='/login' exact component={Login} />
          <PrivateRoute
            path='/'
            exact
            authedUser={authedUser}
            component={Wrapper(Home)}
          />
          <PrivateRoute
            path='/question/:id'
            exact
            authedUser={authedUser}
            component={Wrapper(QuestionPage)}
          />
          <PrivateRoute
            path='/new'
            exact
            authedUser={authedUser}
            component={Wrapper(NewQuestion)}
          />
          <PrivateRoute
            path='/leader-board'
            exact
            authedUser={authedUser}
            component={Wrapper(LeaderBoard)}
          />
        </div>
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, authedUser, ...args }) => {
  return (
    <Route
      {...args}
      render={props =>
        authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

// components that don't need to authed should hava loadingBar and Nav
const Wrapper = Component => {
  return (props) => (
    <div className='body'>
      <LoadingBar style={{ zIndex: '4', backgroundColor: 'grey' }} />
      <Nav />
      <div className='container'>
        <Component {...props} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })
export default connect(mapStateToProps)(App)
