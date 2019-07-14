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

  const [shippingMethod, setShippingMethod] = useState({
    ...checkoutData.shipping_method
  })

  useEffect(() => {
    setShippingMethod(checkoutData.shipping_method)

    return () => {
      setShippingMethod(checkoutData.shipping_method)
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
      console.log(values)
      if (!err) {
        console.log('Received values of form: ', values)

        setCheckoutData({
          ...checkoutData,
          shipping_method: values.shippingMethod
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
        <Title level={4}>Shipping Method</Title>
        <Item label={<div style={{ textAlign: 'left' }}><b>Choose a Shipping Option</b></div>}>
          {getFieldDecorator('shippingMethod', {
            initialValue: shippingMethod,
            rules: [
              {
                required: true,
                message: 'Please Select Your Shipping Method.'
              }
            ]
          })(
            <Radio.Group>
              <Radio style={radioStyle} value="free_shipping">
                Free Shipping
              </Radio>
              <Radio style={radioStyle} value="ems">
                EMS
              </Radio>
            </Radio.Group>
          )}
        </Item>
        <Divider />
        {currentStep < length - 1 && (
          <Button
            style={{ background: '#152D5A', borderColor: '#152D5A' }}
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
