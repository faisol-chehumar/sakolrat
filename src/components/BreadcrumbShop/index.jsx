import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const { Item } = Breadcrumb

const defaultBreadcrumb = [
  {
    title: 'home',
    link: '/'
  },
  {
    title: 'products',
    link: '/products'
  }
]

const mapStateToProps = ({
  currentBreadcrumb
}) => ({ currentBreadcrumb })

const mapDispatchToProps = dispatch => {
  return { setCurrentBreadcrumb: (breadcrumb) => dispatch({
    type: `SET_CURRENT_BREADCRUMB`,
    payload: breadcrumb
  }) }
}

const BreadcrumbShop = (props) => {
  const { currentBreadcrumb } = props
  return (
    <Breadcrumb>
      {
        defaultBreadcrumb.map((item, index) => (
          <Item key={index}>
            {
              item.link !== currentBreadcrumb
                ? <Link to={item.link}>{item.title.toUpperCase()}</Link>
                : <>{item.title}</>
            }
          </Item>
        ))
      }
    </Breadcrumb>
  )
}

BreadcrumbShop.propTypes = {
  currentBreadcrumb: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbShop)
