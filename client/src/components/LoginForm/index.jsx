import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd'

const { Item } = Form

const FormContainer = styled(Form)`
 &.login-form {
    max-width: 300px;
  }
 .login-form-forgot {
    float: right;
  }
 .login-form-button {
    width: 100%;
  }
`

const Login = (props) => {
  // const [ usernameError, setUsernameError ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <FormContainer onSubmit={handleSubmit} className="login-form">
      <Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }]
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
      </Item>
      <Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(
          <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot" href="">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Item>
    </FormContainer>
  )
}

const LoginForm = Form.create({ name: 'normal_login' })(Login)

Login.propTypes = {
  form: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  size: PropTypes.string
}

export default LoginForm
