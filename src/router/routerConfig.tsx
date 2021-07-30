import { lazy, LazyExoticComponent } from 'react'

export interface IRouter {
  path: string
  key: string
  component?: LazyExoticComponent<any>
  exact: boolean
  title?: string
  icon?: string
  children?: IRouter[]
}

const routerConfig: IRouter[] = [
  {
    path: '/main/home',
    key: 'mainHome',
    title: '首页',
    exact: true,
    component: lazy(() => import('../pages/main/home')),
  },
  {
    path: '/main/users',
    title: '用户管理',
    key: 'mainUsers',
    exact: false,
    children: [
      {
        path: '/main/users/list',
        key: 'mainUsersList',
        title: '用户列表',
        exact: true,
        component: lazy(() => import('../pages/main/users/list')),
      },
    ],
  },
  {
    path: '/main/roles',
    key: 'mainRoles',
    title: '角色管理',
    exact: true,
    component: lazy(() => import('../pages/main/roles')),
  },
]

export default routerConfig
