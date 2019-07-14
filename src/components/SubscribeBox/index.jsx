import React from 'react'
import { Row, Col, Typography, Input, Button } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import HeaderTitle from '../HeaderTitle'

const { Text } = Typography

const SubscribeBoxContainer = styled.div`
  background-color: #152D5A !important;
  padding: 4rem .5rem 3rem !important;
  margin: 2rem -3.2rem;

  .ant-typography {
    color: #fff !important;
  }

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
  margin-top: 1rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`

const SubscribeButton = styled(Button)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 3.5rem;
  line-height: 1.5 !important;
  background-color: #222;
  color: #fff;
  border-color: #111 !important;
  margin-top: 1rem;

  &:hover {
    background-color: #3c3c3c;
  }

  @media (min-width: 992px) {
    margin-left: 1rem;
    margin-top: 0;
  }
`

const SubscribeBox = ({ data, ...rest }) => (
  <SubscribeBoxContainer {...rest}>
    <Row>
      <Col xs={{ span: 24 }} lg={{ span: 6, offset: 3 }}>
        <HeaderTitle
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
