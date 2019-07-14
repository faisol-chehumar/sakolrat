import React from 'react'
import { Row, Col, Button, Divider } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../../layouts/Container'
import MenuVerticle from '../MenuVerticle'
import TitleText from '../TitleText'
import SocialGroup from '../SocialGroup'

import stores from '../../stores'

const { footerInfo, socialGroup } = stores

const FooterInfoContainer = styled.div`
  text-align: center;
`

const RowWithExtendedMargin = styled(Row)`
  margin-bottom: 1.5rem;
`

const GhostText = styled.p`
  color: #333 !important;
  font-size: ${props => props.size || '1rem'};
  text-align: ${props => props.align || 'center'};

  a {
    color: #333 !important;

    &:hover {
      color: #333 !important;
    }
  }
`

const GhostButton = styled(Button)`
  margin-bottom: 1rem;
`

const SocialGroupContainer = styled.div`
  margin-top: .5rem;
  margin-bottom: .5rem;

  @media (min-width: 992px) {
    margin-top: 4rem;
  }
`

const BrandDivider = styled(Divider)`

  &::before,
  &::after {
    border-color: #484848 !important;
  }
`

const ImageDivider = styled.div`
  width: 80px;
`

const GhostDivider = styled(Divider)`
  background: #484848 !important;
`

const FooterInfo = ({ data }) => (
  <Container>
    <FooterInfoContainer>
      <BrandDivider>
        <ImageDivider>
          <img
            src="/SAKOLRAT-LOGO.png"
            alt="Brand Logo"
            width="100%"
          />
        </ImageDivider>
      </BrandDivider>
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
              <GhostText size=".85rem">Tell us what you love or what we need to fix.</GhostText>
            </Col>
            <Col xs={24} lg={12}>
              <GhostButton ghost>LEAVE FEEDBACK</GhostButton>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={{ span: 8, offset: 13 }}>
              <SocialGroupContainer>
                <SocialGroup data={socialGroup} />
              </SocialGroupContainer>
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
      <GhostDivider />
      <Row>
        <Col xs={24} lg={6}>
          <GhostText size=".6rem" align="left">© 2019 REVZILLA.COM ALL RIGHTS RESERVED</GhostText>
        </Col>
        <Col xs={24} lg={3}>
          <GhostText size=".6rem" align="left">
            <Link to={'/customer-service-hacker-tested-and-secured/'}>
              SECURE SHOPPING
            </Link>
          </GhostText>
        </Col>
        <Col xs={24} lg={3}>
          <GhostText size=".6rem" align="left">
            <Link to={'/customer-service-hacker-tested-and-secured/'}>
              PRIVACY POLICY
            </Link>
          </GhostText>
        </Col>
        <Col xs={24} lg={3}>
          <GhostText size=".6rem" align="left">
            <Link to={'/customer-service-hacker-tested-and-secured/'}>
              TERMS AND CONDITIONS
            </Link>
          </GhostText>
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
