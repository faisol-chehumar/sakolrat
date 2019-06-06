import React from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const UserAvatarContainer = styled.div`
  span {
    margin-left: 1rem;
  }
`

const UserAvatar = styled(Avatar)`
  background-color: #fff !important;
`

const MenuDropdown = ({ logout }) => {
  const handleMenuClick = e => {
    if (e.key === '3') {
      logout()
    }
    console.log('click', e)
  }

  return (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/me"><Icon type="profile" /> View Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/settings"><Icon type="setting" /> Settings</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="logout" /> Logout
      </Menu.Item>
    </Menu>
  )
}

const UserDropdownMenu = ({ username, avatar, logout }) => (
  <Dropdown overlay={<MenuDropdown logout={logout} />}>
    <UserAvatarContainer>
      <UserAvatar src={avatar} alt="My Account" />
      <span>{username} </span><Icon type="down" />
    </UserAvatarContainer>
  </Dropdown>
)

UserDropdownMenu.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  logout: PropTypes.func
}

MenuDropdown.propTypes = {
  logout: PropTypes.func
}

const mapDispatchToProps = ({ users: { logout } }) => ({
  logout: () => logout()
})

export default connect(null, mapDispatchToProps)(UserDropdownMenu)
