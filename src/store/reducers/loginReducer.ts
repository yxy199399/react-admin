import { GET_TOKEN } from '../actionTypes'
import { Reducer, Action } from 'redux'

export interface OptionAction extends Action<string> {
  value: any
}

export interface State {
  token: string
}

const defaultState: State = {
  token: '',
}

const loginReducer: Reducer<State, OptionAction> = (
  state: State = defaultState,
  action: OptionAction
) => {
  if (action.type === GET_TOKEN) {
    let newState: State = JSON.parse(JSON.stringify(state))
    newState.token = action.value
    return newState
  }
  return state
}

export default loginReducer
