import React, { useState } from 'react'
import { Steps, Row, Col, Card } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ShippingAddressForm from '../ShippingAddressForm'
import ShippingMethodForm from '../ShippingMethodForm'
import BillingForm from '../BillingForm'
import ReviewForm from '../ReviewForm'

const { Step } = Steps

const StepsCardContainer = styled(Card)`
  .ant-steps {
    margin-bottom: 1.5rem;
  }

  .ant-steps-item-icon,
  .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title::after {
    background-color: #4d4b4a !important;
  }

  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-title,
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-description {
    color: #4d4b4a !important;
  }

  .ant-steps-icon {
    color: #fff !important;
  }

  .ant-steps-item-process .ant-steps-item-icon,
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-icon {
    border-color: #333;
  }

  .ant-steps-item-finish .ant-steps-item-icon,
  .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title::after,
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-title,
  .ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-description,
  .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title::after {
    border-color: #4d4b4a !important;
  }

  .steps-content {
    margin-top: 16px;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
`

const CheckoutStep = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [checkoutData, setCheckoutData] = useState({
    customer: {},
    billing_address: null,
    shipping_address: {}
    // payment_method: {}
  })

  const steps = [
    {
      title: 'SHIPPING ADDRESS',
      content: ShippingAddressForm
    },
    {
      title: 'SHIPPING METHOD',
      content: ShippingMethodForm
    },
    {
      title: 'BILLING',
      content: BillingForm
    },
    {
      title: 'REVIEW',
      content: ReviewForm
    }
  ]

  const CurrentPage = steps[currentStep].content

  return (
    <StepsCardContainer>
      <Row>
        <Col xs={24}>
          <Steps current={currentStep}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col xs={24}>
          <CurrentPage
            currentStep={currentStep}
            length={steps.length}
            checkoutData={checkoutData}
            action={{ setCurrentStep, setCheckoutData }}
          />
        </Col>
      </Row>
    </StepsCardContainer>
  )
}

CheckoutStep.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  currentStep: PropTypes.number
}

export default CheckoutStep
