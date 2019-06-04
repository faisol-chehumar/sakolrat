import React from 'react'
import { Menu, Dropdown, Icon, message, Avatar } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const UserAvatarContainer = styled.div`
  span {
    margin-left: 1rem;
  }
`

const UserAvatar = styled(Avatar)`
  background-color: #fff !important;
`

const handleMenuClick = (e) => {
  message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Link to="/me"><Icon type="profile" /> View Profile</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/settings"><Icon type="setting" /> Settings</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/logout"><Icon type="logout" /> Logout</Link>
    </Menu.Item>
  </Menu>
)

const UserDropdownMenu = ({ username, avatar }) => (
  <Dropdown overlay={menu}>
    <UserAvatarContainer>
      <UserAvatar src={avatar} alt="My Account" />
      <span>{username} </span><Icon type="down" />
    </UserAvatarContainer>
  </Dropdown>
)

UserDropdownMenu.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string
}

export default UserDropdownMenu
