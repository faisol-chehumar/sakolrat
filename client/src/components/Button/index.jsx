import React from 'react'
import PropTypes from 'prop-types'
import { Button as btn } from 'antd'
import styled from 'styled-components'

const ButtonContainer = styled(btn)`
  border: ${props => props.type === 'secondary' ? '#eee' : '3px solid #333'};
  color: ${props => props.type === 'secondary' ? '#fff' : '#333'};
  border-radius: 0;
  font-weight: 600;
  width: 100%;
  background-color: ${props => props.type === 'secondary' ? '#c7c7c6' : 'transparent'};

  &:hover {
    background-color: #fa4c06;
    color: #fff;
    border-color: #fa4c06;
  }
`

const Button = ({ type, text, ...rest }) => (
  <ButtonContainer {...rest} type="secondary">
    { text }
  </ButtonContainer>
)

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

export default Button
