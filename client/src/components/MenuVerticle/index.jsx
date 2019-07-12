import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import linkBuilder from '../../utils/linkBuider.js'
import TitleText from '../TitleText'

const MenuVerticleContainer = styled.div`
  & > a {
    color: #fff;

    &:hover {
      color: #fff;
    }
  }

  li > a {
    color: #6f6c6c;

    &:hover {
      color: #222;
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
    <Link to={linkBuilder(data.title)}>
      <TitleText text={data.title} />
    </Link>
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
