import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import styled from 'styled-components'

import Rating from '../Rating'

const { Meta } = Card

const CardContainer = styled(Card)`
  margin: .25rem;

  .ant-card-meta-title {
    margin-bottom: 1rem;
  }

  .price {
    font-weight: 800;
    text-align: left;
    font-size: 1.5rem;
  }
`

const ProductCard = ({ data }) => (
  <a href={data.link}>
    <CardContainer
      hoverable
      cover={<img alt={data.title} src={data.thumbImg} />}
    >
      <Meta
        title={data.title}
      />
      <p className="price">{data.price}</p>
      <Rating score={data.rating} />
    </CardContainer>
  </a>
)

ProductCard.propTypes = {
  data: PropTypes.object
}

export default ProductCard
