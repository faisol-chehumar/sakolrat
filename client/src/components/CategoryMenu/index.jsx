import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

import HeaderText from '../HeaderText'

const CategoryMenu = ({ header, data }) => (
  <div>
    <Row>
      <Col xs={24}>
        <HeaderText text={header} />
      </Col>
    </Row>
    <Row>
      {data.map((menu, index) => (
        <Col key={index} lg={24 / data.length}>
          {menu.title}
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
