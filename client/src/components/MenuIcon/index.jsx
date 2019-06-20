import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuIconContainer = styled.div`
  line-height: 0;
  display: inline-block;
  margin: 0;

  a {
    color: #fff;
    font-size: 0.8rem;
    display: block;
    position: relative;
    /*margin-left: 1rem;*/
  }

  span {
    display: block;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
  }

  .anticon {
    font-size: 1.4rem;
    padding: 0.8rem;
    margin-bottom: 0.5rem;

    &:hover {
      background-color: #312f2e;
    }
  }
`

const MenuIcon = ({
  type,
  link,
  text = null,
  effect = null
}) => (
  <MenuIconContainer>
    <Link to={link}>
      <Icon type={type} />
      {text && <span>{text}</span>}
    </Link>
  </MenuIconContainer>
)

MenuIcon.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  effect: PropTypes.bool
}

export default MenuIcon
