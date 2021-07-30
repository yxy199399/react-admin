import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history))
)
const store = createStore(reducers, enhancer)

export default store
