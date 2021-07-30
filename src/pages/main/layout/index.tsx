import React from 'react'
import { Layout } from 'antd'
import LeftMemuRouter from '@/router'
import './index.scss'
const { Header, Footer, Sider, Content } = Layout

const Main: React.FC = () => {
  return (
    <Layout className='mian'>
      <Header className='mian-header'>
        <div className='mian-header-logo' />
      </Header>
      <Layout className='mian-middle'>
        <Sider>
          <LeftMemuRouter.MenuList />
        </Sider>
        <Layout>
          <Content>
            <LeftMemuRouter.RouteList />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main
