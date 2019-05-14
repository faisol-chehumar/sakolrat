import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import { Link } from 'gatsby'

const { Item } = Breadcrumb

const BreadcrumbShop = ({ data }) => (
  <Breadcrumb>
    {
      data.map((item, index) => (
        <Item key={index}>
          {
            item.link
              ? <Link to={item.link}>{item.title}</Link>
              : <>{item.title}</>
          }
        </Item>
      ))
    }
  </Breadcrumb>
)

BreadcrumbShop.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default BreadcrumbShop
