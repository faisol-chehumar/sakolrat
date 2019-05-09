import React from 'react'
import { Typography, Button } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Title, Paragraph } = Typography

const InfoBlockContainer = styled.div`
  color: ${props => props.color};

  .info-title,
  .info-paragraph {
    color: #fff;
  }
`

const InfoBlock = ({ data, ...rest }) => (
  <InfoBlockContainer {...rest}>
    <Title className="info-title" level={4}>
      {data.title}
    </Title>
    <Paragraph className="info-paragraph">
      {data.paragraph}
    </Paragraph>
    <a className="info-link" href={data.link}>
      Read more
    </a>
  </InfoBlockContainer>
)

InfoBlock.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  rest: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default InfoBlock
