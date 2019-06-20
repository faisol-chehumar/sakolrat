import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col, Typography, Select, Divider } from 'antd'
import styled from 'styled-components'

const { Option } = Select
const { Title } = Typography

const ProductBlock = styled(Row)`
  margin-bottom: .5rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #ddd;
`

const ProductName = styled(Title)`
  font-size: .8rem !important;
`

const ProductInfo = styled.p`
  margin-bottom: .2rem;
  font-size: .8rem !important;
`

const ProductImg = styled.img`
  border: 1px solid #ddd;
`

const HorizonMenu = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  a {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const QtySelect = styled(Select)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const CartItems = ({ cartItem }) => (
  cartItem.map((item, index) => (
    <ProductBlock x={console.log(item)} key={index} gutter={15}>
      <Col xs={8}>
        <ProductImg src={item.image} width="100%" />
      </Col>
      <Col xs={16}>
        <ProductName level={4}>{item.name}</ProductName>
        <ProductInfo>SKU: {item.sku || '-'}</ProductInfo>
        <ProductInfo>Color: {item.color || '-'}</ProductInfo>
        <ProductInfo>Size: {item.size || '-'}</ProductInfo>
      </Col>
      <Col xs={16} offset={8}>
        <QtySelect
          defaultValue={item.qty}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          {
            Array(10).fill('').map((_, index) => (
              <Option
                value={index}
                key={index}
              >
                {index}
              </Option>
            ))
          }
        </QtySelect>
      </Col>
      <Col xs={16} offset={8}>
        <b>{`${item.currency} ${item.amount || '-'}` }</b>
      </Col>
      <Col xs={24}>
        <HorizonMenu>
          <a href="#">Edit</a>
          <Divider type="vertical" />
          <a href="#">Remove</a>
          <Divider type="vertical" />
          <a href="#">Move to Wish Lish</a>
        </HorizonMenu>
      </Col>
    </ProductBlock>
  ))
)

CartItems.propTypes = {
  cartItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  carts: { cartItem }
}) => ({ cartItem })

export default connect(mapStateToProps)(CartItems)
