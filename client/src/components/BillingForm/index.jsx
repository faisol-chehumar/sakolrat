import React from 'react'
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

const BillingForm = ({ form, checkoutData, currentStep, length, action }) => {
  const { setCheckoutData, setCurrentStep } = action

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
        <Title level={4}>Billing Method</Title>
        <Item label={<div style={{ textAlign: 'left' }}><b>Choose a Billing Option</b></div>}>
          {getFieldDecorator('billingMethod')(
            <Radio.Group>
              <Radio style={radioStyle} value="free_billing">
                Free Billing
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
