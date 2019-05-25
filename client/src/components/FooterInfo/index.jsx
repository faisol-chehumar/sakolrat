import React from 'react'
import { Row, Col, Button } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../../layouts/Container'
import MenuVerticle from '../MenuVerticle'
import TitleText from '../TitleText'

import stores from '../../stores'

const { footerInfo } = stores

const FooterInfoContainer = styled.div`
  text-align: center;
`

const RowWithExtendedMargin = styled(Row)`
  margin-bottom: 1.5rem;
`

const GhostText = styled.p`
  color: #827c7c !important;
`

const GhostButton = styled(Button)`
  margin-bottom: 1rem;
`

const FooterInfo = ({ data }) => (
  <Container>
    <FooterInfoContainer>
      <Row>
        <Col xs={24} lg={{ span: 12, push: 12 }}>
          <RowWithExtendedMargin>
            <Col xs={24} lg={12}>
              <TitleText text={'NEED HELP ?'} />
            </Col>
            <Col xs={24} lg={12}>
              <p>
                <b><a href="tel:tel:+1 (215) 334-5500">+1 (215) 334-5500</a></b>
              </p>
            </Col>
          </RowWithExtendedMargin>
          <Row>
            <Col xs={24} lg={12}>
              <TitleText text={'ALWAYS LOOKING TO IMPROVE'} />
              <GhostText disabled>Tell us what you love or what we need to fix.</GhostText>
            </Col>
            <Col xs={24} lg={12}>
              <GhostButton ghost>LEAVE FEEDBACK</GhostButton>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={24}>
              ddd
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
