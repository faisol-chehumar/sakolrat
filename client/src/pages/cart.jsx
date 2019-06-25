import React from 'react'
import { Layout, Typography, Divider } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'

const {
  Header,
  Content
} = Layout

const { Title } = Typography

const {
  CartItems,
  EmptyCart,
  ExtraBar,
  InternalLink
} = components

const HeaderContainer = styled(Header)`
  background: transparent !important;
  padding-left: 0 !important;
  height: auto !important;

  h2 {
    display: inline-block;
  }
`

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const CartItemsContainer = styled.div`
  margin-bottom: 4rem;
`
const Cart = ({ totalItems }) => (
  <Theme bg={'#fafafa'}>
    <ExtraBar />
    <Container>
      <LayoutContainer>
        <HeaderContainer>
          <Title level={2}>
            My Account
          </Title>
          <InternalLink
            linkText="View Wish List"
            linkTo="/whish-list"
            marginLeft={'20px'}
          />
        </HeaderContainer>
        <Divider />
        <Content>
          <CartItemsContainer>{
            totalItems > 0
              ? <CartItems />
              : <EmptyCart />
          }</CartItemsContainer>
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

Cart.propTypes = {
  totalItems: PropTypes.number
}

const mapStateToProps = ({
  carts: { totalItems }
}) => ({ totalItems })

export default connect(mapStateToProps)(Cart)
