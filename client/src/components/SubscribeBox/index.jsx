import React from 'react'
import { Row, Col, Typography, Input, Button } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import HeaderText from '../HeaderText'

const { Text } = Typography

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

const SubscribeInput = styled(Input)`
  height: 3.5rem;
`

const SubscribeButton = styled(Button)`
  margin-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 3.5rem;
  line-height: 1.5 !important;
  background-color: #222;
  color: #fff;
  border-color: #111 !important;

  &:hover {
    background-color: #3c3c3c;
  }
`

const SubscribeBox = ({ data, ...rest }) => (
  <SubscribeBoxContainer {...rest}>
    <Row>
      <Col xs={24} lg={6} offset={3}>
        <HeaderText
          className="subscribe-title"
          text={data.title}
          level={4}
        />
        <Text className="subscribe-subTitle">
          {data.subTitle}
        </Text>
      </Col>
      <Col xs={24} lg={8}>
        <SubscribeInput className="subscribe-input" placeholder="Enter your email address" />
      </Col>
      <Col xs={24} lg={4}>
        <SubscribeButton
          className="subscribe-btn"
          href="/"
          type="primary"
          size="large"
          block
        >
          Subscribe
        </SubscribeButton>
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
