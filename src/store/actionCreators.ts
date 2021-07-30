import { OptionAction } from './reducers/loginReducer'
import { AxiosRequestConfig } from 'axios'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'
import Axios from '../http'
import { GET_TOKEN } from './actionTypes'

export const getTokenAction = (data: string) => {
  return {
    type: GET_TOKEN,
    value: data,
  }
}

export const loginAction = (data: AxiosRequestConfig) => {
  return async (dispatch: Dispatch) => {
    await Axios.post('login', data).then((res) => {
      const { token } = res.data
      if (token) localStorage.setItem('token', token)
      const action: OptionAction = getTokenAction(res.data.token)
      // 存储到store中
      dispatch(action)
      // 路由跳转
      dispatch(push('/'))
    })
  }
}
