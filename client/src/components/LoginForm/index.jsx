import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd'

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
    background-color: #152D5A !important;
    border-color: #152D5A !important;
  }

  a {
    &:hover {
      color: #152D5A !important;
    }
  }
`

const Login = (props) => {
  const { form, login, onSwitch, close, location } = props
  const { getFieldDecorator } = form
  const [ alertMsg, setAlertMsg ] = useState(null)

  const notValidAuthenHabdle = ({ errors }) => {
    const { status, detail } = errors[0]

    return status === 404
      ? setAlertMsg('Incorrect Username or Password!')
      : setAlertMsg(detail)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (!err) {
        try {
          await login(values)

          if (location === '/auth/login') {
            navigate(`/`)
            return null
          }

          setAlertMsg(null)
          close()
        } catch (error) {
          notValidAuthenHabdle(error)
        }
      }
    })
  }

  const switchForm = () => {
    onSwitch('register')
  }

  return (
    <FormContainer onSubmit={handleSubmit} className="login-form">
      <WarningAlert desc={alertMsg} />
      <Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            autoComplete="username"
          />
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input your Password!' }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        )}
      </Item>
      <Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <a className="login-form-forgot" href="/forgot-password/">Forgot password</a>
        Or <a onClick={switchForm}>register now!!!</a>
      </Item>
    </FormContainer>
  )
}

Login.propTypes = {
  login: PropTypes.func,
  form: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  size: PropTypes.string,
  onSwitch: PropTypes.func,
  close: PropTypes.func,
  location: PropTypes.string
}

const LoginForm = Form.create({ name: 'normal_login' })(Login)

const mapStateToProps = ({
  users: { token }
}) => ({ token })

const mapDispatchToProps = ({ users: { login } }) => ({
  login: (payload) => login(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
