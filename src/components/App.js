import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <div class='container'>
        <Nav />
        <div className='content'>
          {this.props.loggedIn === true ? <Home /> : <Login />}
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

function mapStateToProps ({ isAuthenticated }) {
  return {
    loggedIn: isAuthenticated !== null && isAuthenticated !== undefined
  }
}

export default connect(mapStateToProps)(App)
