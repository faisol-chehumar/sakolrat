import React from 'react'
import { Typography } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from '../../layouts/Container'
import './InfoBlock.css'


const { Title, Paragraph } = Typography

const InfoBlockContainer = styled.div`
  color: ${props => props.color};
  background-color: #fff;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  margin-top: 4rem;
  margin-bottom: 4rem;

  .info-title,
  .info-paragraph {
    color: #fff;
  }

  .info-link {

    &:active,
    &:hover {
      color: #ff6629;
    }
  }
`

const InfoBlock = ({ data, ...rest }) => (
  <Container>
    <InfoBlockContainer {...rest}>
      <Title className="info-title" level={4}>
        {data.title}
      </Title>
      <Paragraph className="info-paragraph">
        {data.paragraph}
      </Paragraph>
      <Link className="info-link" to={data.link}>
        Read more
      </Link>
    </InfoBlockContainer>
  </Container>
  
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
