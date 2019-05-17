import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Card, Typography, Form, Button, Input, Icon, Row, Col } from 'antd'

const { Title, Paragraph } = Typography
const { Item } = Form

const CardContainer = styled(Card)`
  border-color: #222;
  background-color: #fff;

  .ant-card-body {
    padding-bottom: 1rem !important;
  }

  form {
    width: 400px;
  }
`

const ParagraphContainer = styled(Paragraph)`
  text-align: left;
  font-weight: 800;
  font-size: .9rem;
  color: #111;

  a {
    color: #fa4c06 !important;
  }
`

const handleSubmit = e => {
  e.preventDefault()
  props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values)
    }
  })
}

const OrderStatusComponent = (props) => {
  const { getFieldDecorator } = props.form

  return (
    <CardContainer>
      <Row>
        <Col xs={24} lg={12}>
          <Title level={2}>Order Status</Title>
            <Link to={'/order-history/'}><span>View Order History</span></Link>
            <ParagraphContainer >
              To track your order, please enter your order information below.
              rder numbers can be found in your Order Confirmation Email. If anything is unclear,
              give us a shout at <Link to={'tel'}>+1 (215) 334-5500</Link> or <Link to={'/contact-us/'}>shoot us a message.</Link>
            </ParagraphContainer>
            <Form onSubmit={handleSubmit}>
              <Item label="Order Number">
                {getFieldDecorator('emailAdress', {
                  rules: [{ required: true, message: 'Please enter your order number..' }]
                })(
                  <Input
                    prefix={<Icon type="order" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Order Number"
                  />
                )}
              </Item>
              <Item label="Last Name">
                {getFieldDecorator('user', {
                  rules: [{ required: true, message: 'Please enter your Last name.' }]
                })(
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Last Name"
                  />
                )}
              </Item>
              <Item label="Postal Code">
                {getFieldDecorator('emailAdress', {
                  rules: [{ required: true, message: 'Please enter your postal code.' }]
                })(
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Postal Code"
                  />
                )}
              </Item>
              <Item>
                <Button type="primary" htmlType="submit">
                  SUBMIT
                </Button>
              </Item>
            </Form>
          <Paragraph>
            If you do not receive an email, or if your email address has changed since you registered
            please contact <Link to={'/customer-service/'}>Customer Service.</Link>
          </Paragraph>
        </Col>
        <Col xs={24} lg={12}>
          <div style={{ padding: '2rem' }}>
            <img src={'/order-status-graphic.png'} />
          </div>
        </Col>
      </Row>
    </CardContainer>
  )
}

OrderStatusComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const OrderStatusForm = Form.create({ name: 'normal_login' })(OrderStatusComponent)

export default OrderStatusForm
