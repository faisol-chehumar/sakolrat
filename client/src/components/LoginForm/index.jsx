import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd'

import Moltin from '../../utils/moltin'
import WarningAlert from '../WarningAlert'

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
    background-color: #fa4c06 !important;
    border-color: #fa4c06 !important;
  }

  a {
    &:hover {
      color: #fa4c06 !important;
    }
  }
`

const Login = (props) => {
  const { getFieldDecorator } = props.form
  const [ alertMsg, setAlertMsg ] = useState(null)

  const notValidAuthenHabdle = ({ errors }) => {
    const { status, detail } = errors[0]

    return status === 404
      ? setAlertMsg('Incorrect Username or Password!')
      : setAlertMsg(detail)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      const { username, password } = values
      if (!err) {
        try {
          const result = await Moltin.Customers.Token(username, password)
          console.log(result)
          setAlertMsg(null)
        } catch (error) {
          notValidAuthenHabdle(error)
        }
      }
    })
  }

  const registerHandle = (e) => {
    props.onSwitchForm('register')
  }

  return (
    <FormContainer onSubmit={handleSubmit} className="login-form">
      <WarningAlert desc={alertMsg} />
      <Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input your Password!' }
          ]
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        )}
      </Item>
      <Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: false
        })(
          <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot" href="/forgot-password/">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a onClick={registerHandle}>register now!!!</a>
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
  size: PropTypes.string,
  onSwitchForm: PropTypes.func
}

export default LoginForm
