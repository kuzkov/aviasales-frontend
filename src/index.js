import React from 'react'
import ReactDOM from 'react-dom'

import {
	createStore,
	applyMiddleware,
  compose
} from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import App from './App'
import './index.css'

import rootReducer from './reducers/rootReducer'

const store = createStore(
	rootReducer,
	compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
)

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
)