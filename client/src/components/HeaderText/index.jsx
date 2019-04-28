import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderTextContainer = styled.h2`
  text-align: center;
  font-weight: 800;
  margin-bottom: 2rem;
`

const HeaderText = ({ text }) => (
  <>
    <HeaderTextContainer>{text}</HeaderTextContainer>
  </>
)

HeaderText.propTypes = {
  text: PropTypes.string
}

export default HeaderText
