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
  const handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  const { getFieldDecorator } = props.form
  const loginHandle = (e) => {
    props.onSwitchForm('login')
  }

  return (
    <div>
      <p>
        Join TeamZilla to access order details,  save bikes to your garage, and earn ZillaCash with
        every order.
      </p>
      <FormContainer onSubmit={handleSubmit} className="login-form">
        <Item>
          {getFieldDecorator('emailAdress', {
            rules: [{ required: true, message: 'Please enter your email address.' }]
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email Address" />
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
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Please enter a matching password.' }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
          )}
        </Item>
        <Item>
          {getFieldDecorator('subscribe', {
            valuePropName: 'checked',
            initialValue: false
          })(
            <Checkbox>Sign up for news, promos and offers</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            CREATE ACCOUNT
          </Button>
          Or Already have an account? <a onClick={loginHandle}>Log In</a>
        </Item>
      </FormContainer>
    </div>
  )
}

const RegisterForm = Form.create({ name: 'normal_login' })(Login)

Login.propTypes = {
  form: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  size: PropTypes.string
}

export default RegisterForm
