import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const RouterGuards = (props: { component: React.FC }) => {
  const token = localStorage.getItem('token')
  if (token) {
    return <Route path='/main' component={props.component} />
  }
  return <Redirect to='/login' />
}

export default RouterGuards
