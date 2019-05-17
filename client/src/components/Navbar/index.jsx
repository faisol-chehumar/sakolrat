import React, { useState } from 'react'
import { Drawer, Row, Col, Icon, Input } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from '../Logo'
import MenuIcon from '../MenuIcon'
import MegaMenu from '../MegaMenu'
import LoginModal from '../LoginModal'
// import {
//   MenuIcon,
//   MegaMenu,
//   LoginModal
// } from '../../components'

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
  background-color: #000;
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
  line-height: 5rem;

  i {
    color: #fff;
  }

  .sub-header {
    background-color: #333;
    margin: 0 -15px;
    padding: 0 1rem !important;
    width: 109%;
  }

  @media (min-width: 992px) {
    line-height: 7rem;

    input {
      height: 3rem;
    }

    .sub-header {
      background-color: transparent;
    }
  }
`

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const onOpen = () => setVisible(true)
  const onCLose = () => setVisible(false)

  return (
    <DarkHeader>
      <UtilityBar>
        <Row>
          <Col xs={0} lg={6} xl={5} offset={1}>
            <Link to="/customer-service">
              Contact Our Team:
              <b>+1 (215) 334-5500</b>
            </Link>
          </Col>
          <Col
            xs={0}
            lg={{ span: 3, offset: 4 }}
            xl={{ span: 2, offset: 9 }}
          >
            <LoginModal />
          </Col>
          <Col xs={0} lg={3} xl={2}>
            <Link to="/order-status">
              Order Status
            </Link>
          </Col>
          <Col xs={0} lg={3} xl={2}>
            <Link to="/customer-service">
              Customer Service
            </Link>
          </Col>
          <Col xs={0} lg={3} xl={2}>
            <Link
              className="a-hilight"
              to="/zillacash-reward"
            >
              Earn Zilla cash
            </Link>
          </Col>
        </Row>
      </UtilityBar>
      <MainMenu>
        <Row gutter={16}>
          <Col xs={2} lg={0}>
            <Icon
              type="menu-fold"
              onClick={onOpen}
            />
          </Col>
          <Col xs={8} lg={4}>
            <Logo className="logo" />
          </Col>
          <Col xs={4} lg={0} offset={6}>
            <MenuIcon
              type='phone'
              link='/phone'
            />
          </Col>
          <Col xs={4} lg={0}>
            <MenuIcon
              type='shopping-cart'
              link='/cart'
            />
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 9, offset: 5 }}
            xl={{ span: 10, offset: 6 }}
          >
            <div className="sub-header">
              <Input
                placeholder="Search Product or Part #"
                suffix={
                  <Icon type="search" className="certain-category-icon black clickable" />
                }
              />
            </div>
          </Col>
          <Col xs={0} lg={6} xl={4}>
            <div className="menu-group">
              <MenuIcon
                type="tool"
                link="/garage"
                text="Garage"
              />
              <MenuIcon
                type="star"
                link="/whislist"
                text="Whislist"
              />
              <MenuIcon
                type="shopping-cart"
                link="/cart"
                text="Cart"
              />
            </div>
          </Col>
        </Row>
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

export default Navbar
