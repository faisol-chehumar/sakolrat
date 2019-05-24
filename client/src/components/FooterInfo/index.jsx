import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../../layouts/Container'
import MenuVerticle from '../MenuVerticle'

import stores from '../../stores'

const { footerInfo } = stores

const { Text, Title } = Typography

const FooterInfoContainer = styled.div`
  text-align: center;
`

const GhostText = styled(Text)`
  color: #827c7c !important
`

const GhostButton = styled(Button)`
  margin-bottom: 1rem;
`

const FooterInfo = ({ data }) => (
  <Container>
    <FooterInfoContainer>
      <Row>
        <Col xs={24} lg={{ span: 12, push: 12 }}>
          <Row>
            <Col xs={24} lg={12}>
              <Title level={4}>NEED HELP?</Title>
            </Col>
            <Col xs={24} lg={12}>
              <p>
                <b><a href="tel:+1 (215) 334-5500">+1 (215) 334-5500</a></b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <Title level={4}>ALWAYS LOOKING TO IMPROVE</Title>
              <p>
                <GhostText disabled>Tell us what you love or what we need to fix.</GhostText>
              </p>
            </Col>
            <Col xs={24} lg={12}>
              <GhostButton ghost>LEAVE FEEDBACK</GhostButton>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={24}>
              <Title level={4}>ALWAYS LOOKING TO IMPROVE</Title>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={{ span: 12, pull: 12 }}>
          <Row>
            <Col xs={24} lg={12}>
              <MenuVerticle data={footerInfo[0]} />
            </Col>
            <Col xs={24} lg={12}>
              <MenuVerticle data={footerInfo[1]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </FooterInfoContainer>
  </Container>
)

FooterInfo.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default FooterInfo
