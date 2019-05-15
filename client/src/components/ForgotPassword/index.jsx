import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Typography, Form, Button, Input, Icon } from 'antd'
import { Link } from 'gatsby'

const { Title, Paragraph } = Typography
const { Item } = Form

const CardContainer = styled(Card)`
  border-color: #222;
  background-color: #fff;

  .ant-card-body {
    padding-bottom: 1rem !important;
  }
`

const ParagraphContainer = styled(Paragraph)`
  text-align: center;
  font-weight: 800;
  font-size: .9rem;
  color: #111;
`

const handleSubmit = e => {
  e.preventDefault()
  props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values)
    }
  })
}

const ForgotPassword = (props) => {
  const { getFieldDecorator } = props.form

  return (
    <CardContainer>
      <Title level={2}>Forgot Password</Title>
      <ParagraphContainer >
        If you have forgotten your RevZilla.com password, simply provide your email address below.
        We will NOT email you your password, instead, you will receive instructions that will allow
        you to set a new password on your account. Please contact customer service if you continue
        to have difficulty accessing your account.
      </ParagraphContainer>
      <Form layout="inline" onSubmit={handleSubmit}>
          <Item label="Email Adress">
            {getFieldDecorator('emailAdress', {
              rules: [{ required: true, message: 'Please enter your email address.' }]
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email Address"
              />
            )}
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Reset Password
            </Button>
          </Item>
        </Form>
      <Paragraph>
        If you do not receive an email, or if your email address has changed since you registered
        please contact <Link to={'/customer-service/'}>Customer Service.</Link>
      </Paragraph>
    </CardContainer>
  )
}

ForgotPassword.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const ForgotPasswordForm = Form.create({ name: 'normal_login' })(ForgotPassword)

export default ForgotPasswordForm
