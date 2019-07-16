import React, { useState } from 'react'
import { Drawer, Row, Col, Icon, Input } from 'antd'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import MenuIcon from '../MenuIcon'
import MegaMenu from '../MegaMenu'
import Cart from '../Cart'
import SocialGroup from '../SocialGroup'
import LoginModal from '../LoginModal'
import Container from '../../layouts/Container'

import stores from '../../stores'
import './navber.css'

const { socialGroup } = stores

const DarkHeader = styled.div`
  color: #fff;

  div {
    text-align: center;
  }

  .logo {
    margin-top: -0.5rem;
  }
`

const UtilityBar = styled.div`
  background-color: #152D5A;
  line-height: 3rem;
  margin: 0 -4rem;
  font-size: 0.8rem;

  a {
    color: #8f8e8d;

    &:hover {
      color: #fff;
    }
  }

  b {
    color: #fff;
    font-size: 0.9rem;
  }
`

const MainMenu = styled.div`
  /*line-height: 5rem;*/

  i {
    color: #222;
  }

  .sub-header {
    background-color: #333;
    margin: 0 -16px;
    padding: 0 1rem !important;
    width: 110%;
  }

  @media (min-width: 768px) {
    .sub-header {
      width: 104.5%;
    }
  }

  @media (min-width: 992px) {
    /*line-height: 7rem;*/

    input {
      height: 3rem;
    }

    .sub-header {
      background-color: transparent;
    }
  }
`

const Navbar = ({ productQuery, token }) => {
  const [visible, setVisible] = useState(false)
  // const [
  //   // searchInput,
  //   // setSearchInput
  // ] = useState(productQuery)

  const onOpen = () => setVisible(true)
  const onCLose = () => setVisible(false)

  const searchHandle = e => {
    if (e.key === 'Enter') {
      console.log(e.target.value)
      navigate(`/products?q=${e.target.value}`)
    }
  }

  // const searchOnChangeHandle = e => setSearchInput(e.target.value)

  return (
    <DarkHeader className="ne-nav">
      <UtilityBar className="navber">
        <Container className="ne-container">
          <Row className="ne-navber-row">
            <Col className="ne-navber-col"
              xs={0}
              lg={{ span: 4, offset: 2 }}
              xl={{ span: 3, offset: 1 }}
            >
              <SocialGroup className="ne-nevber-social" data={socialGroup} />
            </Col>
            <Col
              xs={0}
              lg={{ span: 7, offset: 9 }}
              xl={{ span: 7, offset: 13 }}
            >
              <Link to="/customer-service">
                สอบถามเพิ่มเติม: <b>+1 (215) 334-5500</b>
              </Link>
            </Col>
          </Row>
        </Container>

      </UtilityBar>
      <MainMenu>
        <Container className="ne-container-her">
          <Row gutter={16} style={{ margin: '2rem 0' }}>
            <Col xs={2} lg={0}>
              <Icon
                type="menu-fold"
                onClick={onOpen}
              />
            </Col>
            <Col xs={8} lg={4}>
              <Logo
                className="logo"
              />
            </Col>
            <Col xs={4} lg={0} offset={5}>
              <MenuIcon
                type='phone'
                link='/phone'
              />
            </Col>
            <Col xs={4} lg={0}>
              <Cart />
            </Col>
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 9, offset: 5 }}
              xl={{ span: 10, offset: 5 }}
            >
              <div className="sub-header">
                <Input
                  placeholder="Search Product or Part #"
                  suffix={
                    <Icon type="search" className="certain-category-icon black clickable" />
                  }
                  onKeyPress={(value) => searchHandle(value)}

                />
              </div>
            </Col>
            <Col xs={0} lg={6} xl={4}>
              <div className="menu-group">
                <Row>
                  <Col xs={6}>
                    <Cart text="View Cart" />
                  </Col>
                  <Col xs={6} className="ne-login-register">
                    <LoginModal style={{ padding: '1rem' }} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

      </MainMenu>
      <MegaMenu />
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onCLose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </DarkHeader>
  )
}

Navbar.propTypes = {
  productQuery: PropTypes.string,
  token: PropTypes.string
}

const mapStateToProps = ({
  users: { token },
  products: { productQuery }
}) => ({ token, productQuery })

export default connect(mapStateToProps)(Navbar)
