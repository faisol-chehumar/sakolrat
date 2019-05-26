import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const IconContainer = styled.a`
  color: #6f6c6c;

  &:hover {
    color: #fff;
  }
`

const SocialGroup = ({ data }) => {
  const dataLength = data.length

  return (
    <Row gutter={28}>
      {
        data.map((item, index) => (
          <Col key={index} span={24 / dataLength}>
            <IconContainer href={item.link} target="_blank">
              <item.icon />
            </IconContainer>
          </Col>
        ))
      }
    </Row>
  )
}

SocialGroup.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default SocialGroup
