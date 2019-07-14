import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

import InternalLink from '../InternalLink'
import Button from '../Button'

const { Title } = Typography

const EmptyCartContainer = styled.div`
  text-align: center;

  img {
    width: 5rem;
    margin-bottom: 1rem;
  }
`

const EmptyCart = () => (
  <EmptyCartContainer>
    <img src="https://www.revzilla.com/images/sites/revzilla/pages/cart/empty_cart.svg" />
    <Title level={4}>
      Your Cart is Empty
    </Title>
    <p>
      If you have an account with us, please <InternalLink linkText="log in" linkTo="/auth/login" /> to see items you previously added.
    </p>
    <Button
      type="primary"
      text="START SHOPPING"
      width={'15rem'}
    />
  </EmptyCartContainer>
)

export default EmptyCart
