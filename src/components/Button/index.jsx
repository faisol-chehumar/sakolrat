import React from 'react'
import PropTypes from 'prop-types'
import { Button as btn } from 'antd'
import styled from 'styled-components'

const buttonStyle = {
  primary: {
    border: 'none',
    color: '#fff',
    background: '#152D5A'
  },
  secondary: {
    border: '#eee',
    color: '#fff',
    background: '#c7c7c6'
  },
  defaut: {
    border: '3px solid #333',
    color: '#333',
    background: 'transparent'
  }
}

const ButtonContainer = styled(btn)`
  border: ${props => props.type ? buttonStyle[props.type].border : buttonStyle.defaut.border};
  color: ${props => props.type ? buttonStyle[props.type].color : buttonStyle.defaut.color};
  border-radius: 0;
  font-weight: 600;
  width: ${props => props.width ? props.width : '100%'};
  background-color: ${props => props.type ? buttonStyle[props.type].background : buttonStyle.defaut.background};

  &:hover {
    background-color: #152D5A;
    color: #fff;
    border-color: #152D5A;
  }
`

const Button = ({ text, ...rest }) => (
  <ButtonContainer {...rest}>
    { text }
  </ButtonContainer>
)

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

export default Button
