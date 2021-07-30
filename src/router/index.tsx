import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Menu } from 'antd'
import routerConfig, { IRouter } from './routerConfig'
interface RouterList {
  MenuList: React.FC
  RouteList: React.FC
}

// 路由菜单
const MenuList = () => {
  const menuList = (routerConfig: IRouter[]) => {
    return routerConfig.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} title={item.title}>
            {menuList(item.children)}
          </Menu.SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        )
      }
    })
  }
  return (
    <Menu theme='dark' mode='inline'>
      {menuList(routerConfig)}
    </Menu>
  )
}

// 路由配置
const RouteList = () => {
  const routerList = (routerConfig: IRouter[]): IRouter[] => {
    return routerConfig.reduce((res: IRouter[], item: IRouter) => {
      return res.concat(item.children ? routerList(item.children) : item)
    }, [])
  }
  return (
    <Switch>
      {routerList(routerConfig).map((item, index) => {
        return (
          <Route
            exact={item.exact}
            key={item.key + index}
            path={item.path}
            component={item.component}
          />
        )
      })}
    </Switch>
  )
}
const LeftMemuRouter: RouterList = {
  MenuList,
  RouteList,
}

export default LeftMemuRouter
