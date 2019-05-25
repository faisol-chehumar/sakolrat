import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleTextContainer = styled.span`
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
`

const TitleText = ({ text }) => <TitleTextContainer>{text}</TitleTextContainer>

TitleText.propTypes = {
  text: PropTypes.string
}

export default TitleText
