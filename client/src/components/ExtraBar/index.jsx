import React from 'react'
import { Row, Col, Carousel } from 'antd'
import styled from 'styled-components'

import data from './data'

const ExtraBarContainer = styled.div`
  background-color: #fff;
  text-align: center;
  padding-top: .5rem;
  padding-bottom: .5rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.33);
  margin-bottom: .5rem;

  p {
    font-size: .8rem;
    font-weight: 600;
    margin-bottom: 0;
  }

  .icon {
    margin-right: .5rem;
  }
`

const ExtraBar = () => (
  <Row>
    <Col lg={0}>
      <ExtraBarContainer className="container">
        <Carousel effect="fade" dots={false} autoplay>
          {data.map((item, index) => (
            <p key={index}>
              <item.icon className="icon" size=".9rem" />
              {item.desc}
            </p>
          ))}
        </Carousel>
      </ExtraBarContainer>
    </Col>
    <Col xs={0} lg={24}>
      <ExtraBarContainer className="container">
        <Row>
          {data.map((item, index) => (
            <Col xs={24 / data.length} key={index}>
              <p>
                <item.icon className="icon" size=".9rem" />
                {item.desc}
              </p>
            </Col>
          ))}
        </Row>
      </ExtraBarContainer>
    </Col>
  </Row>
)

export default ExtraBar
