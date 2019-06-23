import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col, Typography, Divider } from 'antd'
import styled from 'styled-components'

import EditItemModal from '../EditItemModal'
import InternalLink from '../InternalLink'
import ProductQtySelect from '../ProductQtySelect'

const { Title } = Typography

const ProductBlock = styled.div`
  margin-bottom: .5rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #ddd;

  @media(min-width: 992px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`

const ProductName = styled(Title)`
  font-size: .8rem !important;

  @media(min-width: 992px) {
    font-size: 1rem !important;
  }
`

const ProductInfo = styled.p`
  margin-bottom: .2rem;
  font-size: .8rem !important;

  @media(min-width: 992px) {
    font-size: .9rem !important;
  }
`

const ProductImg = styled.img`
  border: 1px solid #ddd;
`

const HorizonMenu = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  a {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const CartItems = ({ cartItem, deleteItem }) => {
  const removeItemHandle = (itemId) => (e) => {
    e.preventDefault()
    deleteItem({ itemId: itemId })
  }

  return (
    cartItem.map((item, index) => (
      <ProductBlock key={index}>
        <Row gutter={15}>
          <Col xs={8} lg={4}>
            <ProductImg src={item.image} width="100%" />
          </Col>
          <Col xs={16} lg={20}>
            <Row>
              <Col xs={24} lg={12}>
                <ProductName level={4}>{item.name}</ProductName>
                <ProductInfo>SKU: {item.sku || '-'}</ProductInfo>
                <ProductInfo>Color: {item.color || '-'}</ProductInfo>
                <ProductInfo>Size: {item.size || '-'}</ProductInfo>
                <ProductInfo><b>In Stock:</b> Ships within 24 hours</ProductInfo>
              </Col>
              <Col xs={0} lg={4}>
                <b>{`${item.currency} ${item.pricePerUnit || '-'}` }</b>
              </Col>
              <Col xs={24} lg={4}>
                <ProductQtySelect quantity={item.qty} />
              </Col>
              <Col xs={24} lg={4}>
                <b>{`${item.currency} ${item.amount || '-'}` }</b>
              </Col>
              <Col xs={0} lg={24}>
                <HorizonMenu>
                  <EditItemModal item={item} />
                  <Divider type="vertical" />
                  <InternalLink
                    onClick={removeItemHandle(item.id)}
                    linkText="Remove"
                    linkTo="#"
                  />
                  <Divider type="vertical" />
                  <InternalLink
                    linkTo="/whish-list"
                    linkText="Move to Wish Lish"
                  />
                </HorizonMenu>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={0}>
            <HorizonMenu>
              <a href="#">Edit</a>
              <Divider type="vertical" />
              <a onClick={removeItemHandle(item.id)}>Remove</a>
              <Divider type="vertical" />
              <a href="#">Move to Wish Lish</a>
            </HorizonMenu>
          </Col>
        </Row>
      </ProductBlock>
    ))
  )
}

CartItems.propTypes = {
  cartItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  deleteItem: PropTypes.func
}

const mapStateToProps = ({
  carts: { cartItem }
}) => ({ cartItem })

const mapDispatchToProps = ({ carts: { deleteItem } }) => ({
  deleteItem: (payload) => deleteItem(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
