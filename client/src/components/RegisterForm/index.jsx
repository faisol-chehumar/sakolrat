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
  const [confirmDirty, setConfirmDirty] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const customer = {
          name: values.email,
          email: values.email,
          password: values.password
        }

        Moltin.Customers.Create(customer).then(customer => {
          console.log(`Moltin was create  ${customer}`)
        })
      }
    })
  }

  const switchFormHandle = (e) => {
    props.switchHandler('login')
  }

  const checkDuplicateEmail = async email => {
    const result = await Moltin.Customers.Filter({ eq: { email } }).All()

    return result.data.length
  }

  const validateEmail = async (rule, email, callback) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const error = 'Invalid format of Email.'
    const emailError = 'Duplicate Email'

    if (!isValidEmail) {
      callback(error)
    } else {
      const isDuplicateEmail = await checkDuplicateEmail(email)

      if (isDuplicateEmail) {
        callback(emailError)
      }
      callback()
    }
  }

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      props.form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  const compareToFirstPassword = (rule, value, callback) => {
    const invalidPassword = 'Two passwords that you enter is inconsistent!'

    if (value && value !== props.form.getFieldValue('password')) {
      callback(invalidPassword)
    } else {
      callback()
    }
  }

  const handleConfirmBlur = e => {
    const value = e.target.value
    setConfirmDirty({ confirmDirty: confirmDirty || !!value })
  }

  return (
    <div>
      <p>
        Join TeamZilla to access order details, save bikes to your garage, and earn ZillaCash with
        every order.
      </p>
      <FormContainer onSubmit={handleSubmit} className="login-form">
        <Item>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please enter your email address.' },
              { validator: validateEmail }
            ]
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email Address" />
          )}
        </Item>
        <Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your Password!' },
              { validator: validateToNextPassword }
            ]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Item>
        <Item hasFeedback>
          {getFieldDecorator('confirmPassword', {
            rules: [
              { required: true, message: 'Please enter a matching password.' },
              { validator: compareToFirstPassword }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              onBlur={handleConfirmBlur}
              type="password"
              placeholder="Confirm Password"
            />
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
          Or Already have an account? <a onClick={switchFormHandle}>Log In</a>
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
  size: PropTypes.string,
  switchHandler: PropTypes.func
}

export default RegisterForm
