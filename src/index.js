import React from 'react'
import ReactDOM from 'react-dom'
import 'purecss/build/pure.css'
import 'purecss/build/grids-core.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './app.css'

import reducer from './reducers'
import App from './components/App'
import middleware from './middlewares'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
