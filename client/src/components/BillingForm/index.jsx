import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Radio,
  Divider,
  Button,
  Typography,
  Row,
  Col
} from 'antd'

const { Item } = Form
const { Title } = Typography

const FromContainer = styled.div`
  .ant-form-item-label {
    line-height: 1
  }
`

const RadioButtonContainer = styled(Row)`
  margin-bottom: 1rem;
`

const BillingForm = ({ form, checkoutData, currentStep, length, action }) => {
  const { setCheckoutData, setCurrentStep } = action

  const [paymentMethod, setPaymentMethod] = useState({
    ...checkoutData.payment_method
  })

  useEffect(() => {
    console.log(checkoutData)
    setPaymentMethod(checkoutData.payment_method)

    return () => {
      setPaymentMethod(checkoutData.payment_method)
    }
  })

  const next = () => { setCurrentStep(currentStep + 1) }

  const prev = () => {
    setCheckoutData(checkoutData)
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        setCheckoutData({
          ...checkoutData,
          payment_method: values.paymentMethod
        })

        next()
      }
    })
  }

  const { getFieldDecorator } = form

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 }
    }
  }

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  }

  return (
    <FromContainer>
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
      >
        <Title level={4}>Billing & Paymen</Title>
        <Item>
          {getFieldDecorator('paymentMethod', {
            initialValue: paymentMethod
          })(
            <Radio.Group>
              <RadioButtonContainer>
                <Col xs={10}>
                  <Radio style={radioStyle} value="promptPay">
                    <img
                      src="https://qr-generator.digio.co.th/static/media/promptpay.75db5c8f.jpg"
                      width="100px"
                      style={{ marginLeft: '1rem' }}
                    />
                  </Radio>
                </Col>
              </RadioButtonContainer>
              <RadioButtonContainer>
                <Col xs={10}>
                  <Radio style={radioStyle} value="linePay">
                    <img
                      src="https://static1.squarespace.com/static/59bf8dc3e5dd5b141a2ba135/t/5b98d0a44ae23713a409f416/1534834575736/linepay_logo_v2_th.png"
                      width="100px"
                      style={{ marginLeft: '1rem' }}
                    />
                  </Radio>
                </Col>
              </RadioButtonContainer>
              <RadioButtonContainer>
                <Col xs={16}>
                  <Radio style={radioStyle} value="bankTransfer">
                    <img
                      src="http://9prakun.com/images/scb.png"
                      width="100px"
                      style={{ marginLeft: '1rem' }}
                    />
                  </Radio>
                </Col>
              </RadioButtonContainer>
            </Radio.Group>
          )}
        </Item>
        <Divider />
        {currentStep < length - 1 && (
          <Button
            style={{ background: '#fa4c06', borderColor: '#fa4c06' }}
            type="primary"
            htmlType="submit"
            block
          >
            CONTINUE
          </Button>
        )}
        {currentStep > 0 && (
          <Button
            style={{ background: '#eee', color: '#333', borderColor: '#555', marginTop: '1rem' }}
            onClick={() => prev()}
            block
          >
            BACK
          </Button>
        )}
      </Form>
    </FromContainer>
  )
}

const WrappedBillingForm = Form.create({ name: 'billingAddress' })(BillingForm)

BillingForm.propTypes = {
  form: PropTypes.object,
  checkoutData: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  action: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  currentStep: PropTypes.number,
  length: PropTypes.number
}

export default WrappedBillingForm
