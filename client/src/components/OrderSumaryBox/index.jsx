import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Row, Col, Divider, Popover, Icon } from 'antd'

const { Title } = Typography

const OrderSumaryBox = ({ subTotal, estimatedShipping }) => (
  <div>
    <Row>
      <Col xs={24}>
        <Title level={4}>Order Summary</Title>
      </Col>
      <Col xs={18}>
        Subtotal
      </Col>
      <Col xs={6}>
        ${subTotal}
      </Col>
      <Col xs={18}>
        Estimated Shipping
      </Col>
      <Col xs={6}>
        ${estimatedShipping}
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col xs={18}>
        <b>Estimated Total </b>
        <Popover
          content="
            Input your shipping address during checkout to
            view delivery options and prices."
        >
          <Icon type="question-circle" />
        </Popover>
      </Col>
      <Col xs={6}>
        <b>${subTotal + estimatedShipping}</b>
      </Col>
    </Row>
    <Divider />
  </div>
)

OrderSumaryBox.propTypes = {
  subTotal: PropTypes.number,
  estimatedShipping: PropTypes.number
}

export default OrderSumaryBox
