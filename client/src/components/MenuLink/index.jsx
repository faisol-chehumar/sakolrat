import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { Link } from 'gatsby'
import styled from 'styled-components'

const { Item } = Menu

const MenuContainer = styled(Menu)`
  background: transparent !important;
`

const ItemContainer = styled(Item)`
  padding-left: 0 !important;
  border: 0 !important;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    border: 0 !important;
  }
`

const LinkContainer = styled(Link)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: .8rem;

  &:hover {
    color: #111 !important;
  }
`

const MenuLink = ({ data }) => (
  <MenuContainer mode="horizontal">
    {data.map((menu, index) => (
      <ItemContainer key={index}>
        <LinkContainer to={menu.split(' ').join('-')}>
          {menu}
        </LinkContainer>
      </ItemContainer>
    ))}
  </MenuContainer>
)

MenuLink.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default MenuLink
