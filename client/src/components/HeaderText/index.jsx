import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Title } = Typography

const HeaderTextContainer = styled.div`
  text-align: center;
  background-image: ${props => props.background ? `url(${props.background})` : 'none'};

  h3.ant-typography {
    font-weight: 800;
  }
`

const HeaderText = ({ text, level, bg }) => (
  <HeaderTextContainer background={bg}>
    <Title level={level}>
      {text}
    </Title>
  </HeaderTextContainer>
)

HeaderText.propTypes = {
  text: PropTypes.string,
  level: PropTypes.number,
  bg: PropTypes.string
}

export default HeaderText
