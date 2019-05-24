import React from 'react'
import { Typography } from 'antd'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import linkBuilder from '../../utils/linkBuider.js'

const { Title } = Typography

const MenuTitle = styled(Title)`
  text-transform: uppercase;
`

const MenuVerticleContainer = styled.div`
  a {
    color: #6f6c6c;

    &:hover {
      color: #fff;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    text-transform: capitalize;
  }

  li {
    padding: .5rem 0;
  }

  @media (min-width: 992px) {
    text-align: left;
  }
`
const MenuVerticle = ({ data }) => (
  <MenuVerticleContainer>
    <MenuTitle level={4}>
      {data.title}
    </MenuTitle>
    <ul>
      {
        data.lists.map((menu, index) => (
          <li key={index}>
            <Link to={linkBuilder(menu)}>
              {menu}
            </Link>
          </li>
        ))
      }
    </ul>
  </MenuVerticleContainer>
)

MenuVerticle.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default MenuVerticle
