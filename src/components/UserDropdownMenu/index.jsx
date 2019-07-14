import React from 'react'
import { Menu, Dropdown, Icon, Avatar } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const UserAvatarContainer = styled.div`
  color: #222;
`

const UserAvatar = styled(Avatar)`
  background-color: #fff !important;
`

const MenuDropdown = ({ logout }) => {
  const handleMenuClick = e => {
    if (e.key === '3') {
      logout()
    }
  }

  return (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/account/dashboard"><Icon type="profile" /> View Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/account/order"><Icon type="setting" /> Order</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="logout" /> Logout
      </Menu.Item>
    </Menu>
  )
}

const UserDropdownMenu = ({ username, avatar, logout }) => (
  <Dropdown
    id="tes"
    overlay={<MenuDropdown logout={logout} />}
    overlayClassName="user-menu-dropdown"
    getPopupContainer={triggerNode => triggerNode.parentNode}
  >
    <UserAvatarContainer>
      <UserAvatar
        src={avatar}
        alt="My Account"
        style={{ width: 30, height: 30, marginTop: 10, marginBottom: 15 }}
      />
      <p style={{ fontSize: '.8rem' }}>{username}</p>
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
