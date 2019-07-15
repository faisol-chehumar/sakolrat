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
import './footerInfo.css'

const { footerInfo, socialGroup } = stores

const FooterInfoContainer = styled.div`
  text-align: center;
`

const RowWithExtendedMargin = styled(Row)`
  margin-bottom: 1.5rem;
`

const GhostText = styled.p`
  color: #ffffff;
  font-size: ${props => props.size || '1rem'};
  text-align: ${props => props.align || 'center'};

  a {
    color: #ffffff !important;

    &:hover {
      color: #ffffff !important;
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
    border-color: #ffffff !important;
    botder-top: 1px solid #ffffffimportant; 
  }
`

const ImageDivider = styled.div`
  width: 80px;
`

const GhostDivider = styled(Divider)`
  background: #ffffff !important;
  border-top: 1px solid #ffffff!important;
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
        {/* <Col  xs={24} lg={{ span: 12, push: 12 }}>
          <Row>
            <Col xs={24} lg={12}>
              <TitleText text={'CALL CENTER'} />
            </Col>
            <Col xs={24} lg={12}>
              <TitleText text={'02-876-6741-5'}/>
            </Col>
          </Row>
        </Col> */}
        <Col xs={24} lg={{ span: 12, push: 12 }}>
          <RowWithExtendedMargin>
            <Col xs={24} lg={12}>
              <TitleText text={'ADDRESS'} />
              <GhostText size=".85rem" align="left">เพื่อยริการที่ครบวงจอรเรามีทั้งบริการขายออนไลน์และจำหน่ายหน้าร้าน</GhostText>
              <GhostText size=".85rem" align="left">Sakolrat Equipment<br></br>Bukkhalo, Thon Buri, Bankok 10600</GhostText>
            </Col>
            <Col className="ne-title-text" xs={24} lg={12}>
              <TitleText text={'CALL CENTER'} />
            </Col>
            <Col className="ne-title-text" xs={24} lg={12}>
              <TitleText text={'02-876-6741-5'}/>
            </Col>
          </RowWithExtendedMargin> 
          <Row className="ne-row">
            <Col className="ne-col" xs={24} lg={{ span: 8, offset: 13 }}>
              <SocialGroupContainer className="ne-social-container">
                <SocialGroup className="ne-social" data={socialGroup} />
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
        <Col className="company-col" xs={24} lg={6}>
          <GhostText className="company" size=".6rem" align="right">© 2019 REVZILLA.COM ALL RIGHTS RESERVED</GhostText>
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
