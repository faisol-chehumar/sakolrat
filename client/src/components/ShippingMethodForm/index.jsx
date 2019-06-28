import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Radio,
  Divider,
  Button,
  Typography
} from 'antd'

const { Item } = Form
const { Title } = Typography

const FromContainer = styled.div`
  .ant-form-item-label {
    line-height: 1
  }
`

const ShippingMethodForm = ({ form, checkoutData, currentStep, length, action }) => {
  const { setCheckoutData, setCurrentStep } = action

  const [radioButton, setRadioButton] = useState(1)

  const [customer, setCustomer] = useState({
    ...checkoutData.customer
  })

  const [shippingAddress, setShippingAddress] = useState({
    ...checkoutData.shipping_address
  })

  useEffect(() => {
    setCustomer(checkoutData.customer)
    setShippingAddress(checkoutData.shipping_address)

    return () => {
      setCustomer(checkoutData.customer)
      setShippingAddress(checkoutData.shipping_address)
    }
  })

  const next = () => { setCurrentStep(currentStep + 1) }

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const { customerName, email, ...addressInfo } = values

        setCheckoutData({
          ...checkoutData,
          customer: {
            name: customerName,
            email
          },
          shipping_address: {
            ...addressInfo
          }
        })

        next()
      }
    })
  }

  // const onChange = e => {
  //   console.log('radio checked', e.target.value)
  //   setRadioButton(e.target.value)
  // }

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
        <Title level={4}>Shipping Method</Title>
        <Item label={<div style={{ textAlign: 'left' }}><b>Choose a Shipping Option</b></div>}>
          {getFieldDecorator('shippingMethod')(
            <Radio.Group>
              <Radio style={radioStyle} value="free_shipping">Free Shipping</Radio>
              <Radio style={radioStyle} value="100">EMS</Radio>
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
      </Form>
    </FromContainer>
  )
}

const WrappedShippingMethodForm = Form.create({ name: 'shippingAddress' })(ShippingMethodForm)

ShippingMethodForm.propTypes = {
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

export default WrappedShippingMethodForm
