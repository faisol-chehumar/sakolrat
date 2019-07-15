import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Rating from '../Rating'

const { Meta } = Card

const CardContainer = styled(Card)`
  margin: .25rem;
  padding: 1rem;

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
  <Link
    to={`/product/${data.slug}/`}
  >
    <CardContainer
      hoverable
      cover={<img alt={data.title} src={data.mainImageHref} />}
    >
      <Meta
        title={data.name}
      />
      <p className="price">
        <span style={{ fontSize: '.8rem' }}>{data.price[0].currency === 'USD' ? '$' : 'THB'} </span>
        {data.price[0].amount || 0}
      </p>
      <Rating score={data.rating || 4} />
    </CardContainer>
  </Link>
)

ProductCard.propTypes = {
  data: PropTypes.object
}

export default ProductCard
