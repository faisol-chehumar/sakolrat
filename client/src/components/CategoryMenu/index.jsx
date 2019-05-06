import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import styled from 'styled-components'

import HeaderText from '../HeaderText'

const CardContainer = styled(Card)`
  text-align: center;
  font-weight: 800;
  color: #111;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .15);
  font-size: .8rem;

  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .15);
  }

  @media (min-width: 992px) {
    font-size: .8rem;
  }
`

const CategoryMenu = ({ header, data }) => (
  <div>
    <Row>
      <Col xs={24}>
        <HeaderText text={header} />
      </Col>
    </Row>
    <Row>
      {data.map((menu, index) => (
        <Col key={index} xs={12} lg={24 / data.length}>
          <a className="block mg-sm" href={menu.link}>
            <CardContainer>
              <img src={menu.src} />
              {menu.title}
            </CardContainer>
          </a>
        </Col>
      ))}
    </Row>
  </div>
)

CategoryMenu.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array
}

export default CategoryMenu
