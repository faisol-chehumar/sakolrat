import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Form,
  Divider,
  Button,
  Typography,
  Input,
  message
} from 'antd'
import { connect } from 'react-redux'
import { navigate } from 'gatsby'

const { Item } = Form
const { Title } = Typography
const { TextArea } = Input

const FromContainer = styled.div`
  .ant-form-item-label {
    line-height: 1
  }
`

const ReviewForm = ({
  form,
  checkoutData,
  currentStep,
  length,
  action,
  customer,
  checkoutAsync,
  deleteCart
}) => {
  // const { completeCheckoutData, setCompleteCheckoutData } = useState({})
  const { setCheckoutData, setCurrentStep } = action

  const prev = () => {
    setCheckoutData(checkoutData)
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        const customerId = customer.customer_id
        const result = await checkoutAsync({
          ...checkoutData,
          customerId,
          review: values.review
        })

        console.log(result)
        deleteCart()
        navigate(`/order/${result.data.id}`)
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

  return (
    <FromContainer>
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
      >
        <Title level={4}>Write a Review</Title>
        <Item>
          {getFieldDecorator('review')(
            <TextArea rows={4} />
          )}
        </Item>
        <Divider />
        {currentStep === length - 1 && (
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => message.success('Processing complete!')}
            block
          >
            Done
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

const WrappedReviewForm = Form.create({ name: 'reviewAddress' })(ReviewForm)

ReviewForm.propTypes = {
  form: PropTypes.object,
  checkoutData: PropTypes.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  action: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  currentStep: PropTypes.number,
  length: PropTypes.number,
  checkoutAsync: PropTypes.func,
  customer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  deleteCart: PropTypes.func
}

const mapDispatchToProps = ({
  carts: { checkoutAsync, deleteCart }
}) => ({ checkoutAsync, deleteCart })

const mapStateToProps = ({
  users: { customer }
}) => ({ customer })

export default connect(mapStateToProps, mapDispatchToProps)(WrappedReviewForm)
