import React, { useState } from 'react'
import { Steps } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Step } = Steps

const StepsContainer = styled(Steps)`
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
`

const CheckoutStep = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const onChange = (value) => {
    console.log(value)
    setCurrentStep(value)
  }

  return (
    <StepsContainer current={currentStep} onChange={onChange}>
      <Step title="SHIPPING ADDRESS" />
      <Step title="SHIPPING METHOD" />
      <Step title="BILLING" />
      <Step title="REVIEW" />
    </StepsContainer>
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
