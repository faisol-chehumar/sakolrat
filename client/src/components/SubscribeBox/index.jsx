import React from 'react'
import { Row, Col, Typography, Input, Button } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const { Title, Text } = Typography

const SubscribeBoxContainer = styled.div`
  color: ${props => props.color};
  background-color: #fa4c06 !important;
  padding: 4rem .5rem 3rem !important;
  margin: 2rem -3rem;

  .ant-col {
    text-align: center;
  }

  .subscribe-title,
  .subscribe-paragraph {
    color: #fff;
  }

  .subscribe-link {

    &:active,
    &:hover {
      color: #ff6629 !important;
    }
  }
`

const SubscribeBox = ({ data, ...rest }) => (
  <SubscribeBoxContainer {...rest}>
    <Row>
      <Col xs={24} lg={8}>
        <Title className="subscribe-title" level={4}>
          {data.title}
        </Title>
        <Text className="subscribe-subTitle">
          {data.subTitle}
        </Text>
      </Col>
      <Col xs={24} lg={8}>
        <Input className="subscribe-input" placeholder="Enter your email address" />
      </Col>
      <Col xs={24} lg={8}>
        <Button className="subscribe-btn" href="/" type="primary" size="large">
          Subscribe
        </Button>
      </Col>
    </Row>
  </SubscribeBoxContainer>
)

SubscribeBox.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  rest: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default SubscribeBox
