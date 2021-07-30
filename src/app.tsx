import React, { lazy, LazyExoticComponent } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store from '@/store'
import history from '@/store/history'
import RouterGuards from '@/router/routerGuards'

const Login: LazyExoticComponent<any> = lazy(() => import('@/pages/login'))
const Main: LazyExoticComponent<any> = lazy(() => import('@/pages/main/layout'))

function App() {
  return (
    <Provider store={store}>
      <React.Suspense fallback={<>加载中...</>}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' exact render={() => <Redirect to='/main/home' />} />
            <Route exact path='/login' component={Login} />
            <RouterGuards component={Main} />
            {/* <Route path="/main" component = { Main } /> */}
          </Switch>
        </ConnectedRouter>
      </React.Suspense>
    </Provider>
  )
}

export default App
