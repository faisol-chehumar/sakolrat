import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import categories from './categories'

const menuList = Object.keys(categories)

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
    color: #fff;
    padding: 1.35rem .5rem;
    height: 44px;
  }
`

const MegaMenu = () => (
  <MegaMenuContainer>
    <Row gutter={16}>
      <Col xs={0} lg={16}>
        <div className="text-left">
          {
            menuList.map((menu, index) => (
              <a key={index}>
                {menu.toUpperCase()}
              </a>
            ))
          }
        </div>
      </Col>
      <Col xs={0} lg={8}>
        sddsd
      </Col>
    </Row>
  </MegaMenuContainer>
)

export default MegaMenu
