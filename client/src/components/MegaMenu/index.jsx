import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import menu from './menu'

const { menuLeft, menuRight } = menu

const MegaMenuContainer = styled.nav`
  margin: 0 -4rem;
`

const MegaMenuBar = styled.div`
  background-color: #fa4c06;
  padding: 0 4rem;
  height: 44px;
  line-height: 0;

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    display: inline-block;
  }

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

const MegaMemuPanel = styled.div`
  background-color: #fff;
  border-bottom: 4px solid #fa4c06;
  padding: .5rem 4rem;
  color: #333;

  .cat-title {
    color: #333;
    font-size: 1rem;
    margin-right: 1rem;
  }

  .cat-link {
    font-size: .8rem;
  }
`

const MegaMenu = () => (
  <MegaMenuContainer>
    <MegaMenuBar>
      <Row gutter={16}>
        <Col xs={0} lg={16}>
          <ul className="text-left sub-menu">
            {
              menuLeft.map((menu, index) => (
                <li key={index}>
                  <a href={menu.title.replace(' ', '-')}>
                    {menu.title.toUpperCase()}
                  </a>
                </li>
              ))
            }
          </ul>
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
    </MegaMenuBar>
    <MegaMemuPanel>
      <Row>
        <Col className="text-left" xs={24}>
          <b className="cat-title">SHOP {menuLeft[0].title.toUpperCase()}</b>
          <a className="cat-link" href={menuLeft[0].title.replace(' ', '-')}>Shop All &gt;</a>
        </Col>
        <Col xs={0} lg={16}>
          <Row>

          </Row>
        </Col>
        <Col xs={0} lg={8}>

        </Col>
      </Row>
    </MegaMemuPanel>
  </MegaMenuContainer>
)

export default MegaMenu
