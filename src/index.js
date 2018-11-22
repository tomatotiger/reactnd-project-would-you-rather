import React from 'react'
import ReactDOM from 'react-dom'
import 'pure-css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <div>Hello World!</div>
  </Provider>,
  document.getElementById('root')
)
