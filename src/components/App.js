import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <div>
        <LoadingBar style={{ 'z-index': '4', backgroundColor: 'grey' }} />
        <div className='container'>
          {this.props.loading === true ? null : (
            <div>
              <Nav />
              <div className='content'>
                <Home />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

// TODO: add auth
// function PrivateRoute ({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         props.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   )
// }

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
