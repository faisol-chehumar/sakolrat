import React, { useState } from 'react'
import { Steps, message, Button, Row, Col, Card, Divider } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ShippingForm from '../ShippingForm'

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

const steps = [
  {
    title: 'SHIPPING ADDRESS',
    content: 'First-content'
  },
  {
    title: 'SHIPPING METHOD',
    content: 'Second-content'
  },
  {
    title: 'BILLING',
    content: 'Last-content'
  },
  {
    title: 'REVIEW',
    content: 'Last-content'
  }
]

const CheckoutStep = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const next = () => {
    setCurrentStep(currentStep + 1)
  }

  const prev = () => {
    setCurrentStep(currentStep - 1)
  }

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
          {/* {steps[currentStep].content} */}
          <ShippingForm />
        </Col>
        <Divider />
        <Col xs={24}>
          {currentStep < steps.length - 1 && (
            <Button style={{ background: '#fa4c06', borderColor: '#fa4c06' }} block type="primary" onClick={() => next()}>
              CONTINUE
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button block type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {currentStep > 0 && (
            <Button style={{ background: '#eee', color: '#333', borderColor: '#555', marginTop: '1rem' }} block onClick={() => prev()}>
              BACK
            </Button>
          )}
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
