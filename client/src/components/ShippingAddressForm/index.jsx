import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Input,
  Cascader,
  Select,
  Checkbox,
  Tooltip,
  Icon,
  Divider,
  Button
} from 'antd'

const { Option } = Select
const { Item } = Form

const IconContainer = styled(Icon)`
  margin-left: 1rem;
`

const countries = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

const ShippingForm = ({ form, checkoutData, currentStep, length, action }) => {
  const { setCheckoutData, setCurrentStep } = action

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

  const { getFieldDecorator } = form

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  }

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '+66'
  })(
    <Select style={{ width: 70 }}>
      <Option value="+66">+66</Option>
      <Option value="+67">+67</Option>
    </Select>
  )

  return (
    <div>
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
      >
        <Item label="Firstname - Lastname">
          {getFieldDecorator('customerName', {
            rules: [
              {
                required: true,
                message: 'Please input your Firstname and Lastname!'
              }
            ],
            initialValue: customer.name
          })(<Input />)}
        </Item>
        <Item label="Country">
          {getFieldDecorator('countries', {
            initialValue: shippingAddress.countries,
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual countries' }
            ]
          })(<Cascader options={countries} />)}
        </Item>
        <Item label="Address Line 1">
          {getFieldDecorator('addressLine1', {
            initialValue: shippingAddress.addressLine1,
            rules: [
              {
                required: true,
                message: 'Please input your address.'
              }
            ]
          })(<Input />)}
        </Item>
        <Item label="Address Line 2">
          {getFieldDecorator('addressLine2', {
            initialValue: shippingAddress.addressLine2
          })(<Input />)}
        </Item>
        <Item label="Postal Code">
          {getFieldDecorator('postalCode', {
            initialValue: shippingAddress.postalCode,
            rules: [{ required: true, message: 'Please input your Postal Code!' }]
          })(<Input style={{ width: '100%' }} />)}
        </Item>
        <Item label="Phone Number" extra="In case we need to contact you about your order.">
          {getFieldDecorator('phone', {
            initialValue: shippingAddress.phone,
            rules: [{ required: true, message: 'Please input your phone number!' }]
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Item>
        <Item label="E-mail" extra="Order confirmation and tracking information will be sent to this email address.">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ],
            initialValue: customer.email
          })(<Input />)}
        </Item>
        <Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            initialValue: shippingAddress.agreement,
            valuePropName: 'checked'
          })(
            <Checkbox>
              Get moto news and exclusive offers straight to your inbox!
              <Tooltip title="You can unsubscribe at any time in My Account or from Marketing emails in your inbox.">
                <IconContainer type="question-circle" />
              </Tooltip>
            </Checkbox>
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
    </div>
  )
}

const WrappedShippingForm = Form.create({ name: 'shippingAddress' })(ShippingForm)

ShippingForm.propTypes = {
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

export default WrappedShippingForm
