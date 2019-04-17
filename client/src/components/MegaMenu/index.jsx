import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import menu from './menu'

const { menuLeft, menuRight } = menu

const MegaMenuContainer = styled.div`
  background-color: #fa4c06;
  margin: 0 -4rem;
  padding: 0 4rem;
  height: 44px;
  line-height: 0;

  a {
    display: inline-block;
    font-size: .8rem;
    font-weight: 600;
    padding: 1.35rem .5rem;
    height: 44px;
  }

  .sub-menu a {
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }

  .extra-menu a {
    color: #333;

    &:hover {
      color: #fff;
    }
  }
`

const MegaMenu = () => (
  <MegaMenuContainer>
    <Row gutter={16}>
      <Col xs={0} lg={16}>
        <div className="text-left sub-menu">
          {
            menuLeft.map((menu, index) => (
              <a key={index}>
                {menu.title.toUpperCase()}
              </a>
            ))
          }
        </div>
      </Col>
      <Col xs={0} lg={8}>
        <div className="text-right extra-menu">
          {
            menuRight.map((menu, index) => (
              <a key={index}>
                {menu.title.toUpperCase()}
              </a>
            ))
          }
        </div>
      </Col>
    </Row>
  </MegaMenuContainer>
)

export default MegaMenu
