import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Title } = Typography

const HeaderTitleContainer = styled.div`
  text-align: ${props => props.align || 'center'};
  background-image: ${props => props.background ? `url(${props.background})` : 'none'};

  h3.ant-typography {
    font-weight: 800;
  }
`

const HeaderTitle = ({ text, level, ...rest }) => (
  <HeaderTitleContainer {...rest}>
    <Title level={level}>
      {text}
    </Title>
  </HeaderTitleContainer>
)

HeaderTitle.propTypes = {
  text: PropTypes.string,
  level: PropTypes.number
}

export default HeaderTitle
