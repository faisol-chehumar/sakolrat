import React from 'react'
import { Typography } from 'antd'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Title } = Typography

const MenuVerticleContainer = styled.div`

`
const MenuVerticle = ({ data }) => (
  <MenuVerticleContainer>
    <Title level={4}>
      {data.title}
    </Title>
    <ul>
      {
        data.list.map((menu, index) => (
          <li key={index}>
            <Link to={menu.link}>
              {menu.title}
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
