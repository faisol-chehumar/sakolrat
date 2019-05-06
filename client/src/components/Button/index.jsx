import React from 'react'
import PropTypes from 'prop-types'
import { Button as btn } from 'antd'
import styled from 'styled-components'

const ButtonContainer = styled(btn)`
  border: 3px solid #333;
  color: #333;
  border-radius: 0;
  font-weight: 600;

  &:hover {
    background-color: #fa4c06;
    color: #fff;
    border-color: #fa4c06;
  }
`

const Button = ({ type, text, ...rest }) => (
  <ButtonContainer {...rest}>
    { text }
  </ButtonContainer>
)

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

export default Button
