import React from 'react'
import { Layout, Typography } from 'antd'
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

const EmptyCartContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`
const Cart = ({ cartItem, totalItems }) => (
  <Theme bg={'#eee'}>
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
        <Content>
          <EmptyCartContainer>{
            totalItems > 0
              ? <div>Hello</div>
              : <EmptyCart />
          }</EmptyCartContainer>
        </Content>
      </LayoutContainer>
    </Container>
  </Theme>
)

Cart.propTypes = {
  cartItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  totalItems: PropTypes.number
}

const mapStateToProps = ({
  carts: { cartItem, totalItems }
}) => ({ cartItem, totalItems })

export default connect(mapStateToProps)(Cart)
