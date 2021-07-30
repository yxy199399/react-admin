import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import store from '@/store'
import { State } from '@/store/reducers/loginReducer'
import { loginAction } from '@/store/actionCreators'

type LoginProps = Pick<State, 'token'>

class Login extends React.Component<LoginProps> {
  onFinish(values: any) {
    // values.h1 = 1
    const action = loginAction(values)
    store.dispatch(action as any)
  }
  render() {
    return (
      <Form
        style={{
          width: '500px',
          height: '300px',
          margin: '20px',
        }}
        onFinish={this.onFinish}
      >
        <Form.Item
          label='username'
          name='username'
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='password'
          name='password'
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            登录
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const stateToProps = (state: State) => {
  return {
    token: state.token,
  }
}

export default connect(stateToProps)(Login)
