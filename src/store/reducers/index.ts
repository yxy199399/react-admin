import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import loginReducer from './loginReducer'
import history from '../history'

let reducers = combineReducers({
  loginReducer,
  router: connectRouter(history),
})
export default reducers
