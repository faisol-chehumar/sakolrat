import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import stores from '../stores'
import components from '../components'
import { getUniqueProducts } from '../utils/productHelper'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import '../assets/css/custom.css'
import sliderImage from '../../static/slider.png'
import readImage from '../../static/read.png'
import gas from '../../static/gas.png'
import { Row, Col, Icon } from 'antd';

const {
  brands,
  categoriesMenu,
  guides,
  heroBanners,
  posts
} = stores

const {
  BrandSlider,
  HeroBanner,
  ExtraBar,
  CategoryMenu,
  BlogPost,
  FilterBox,
  ProductSlider
} = components

const Home = ({ location }) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            name
            slug
            mainImageHref
            mainImage {
              url
            }
            price {
              amount
              currency
              includes_tax
            }
          }
        }
      }
    }
  `)

  const products = data['allMoltinProduct']['edges'].map(product => product.node)
  const uniqueProducts = getUniqueProducts(products, 'name')

  return (
    <Theme>
      <HeroBanner data={heroBanners} />
      <ExtraBar />
      <Container className="ne-block-category">
        <CategoryMenu
          header="SHOP BY RIDING STYLE"
          data={categoriesMenu}
        />
      </Container>
      {uniqueProducts.length > 0 && (
        <Container className="ne-block-product">
          <ProductSlider data={uniqueProducts} />
        </Container>
      )}
      <div className="slider-image">
        <img src={sliderImage} width="100%"/>
      </div>
      <div>
        <img src={readImage} width="100%" />
      </div>
      {/* <div>
        <Container className="ne-read">
          <Row className="read">
            <h1>READ</h1>
            <Col className="ne-content" xs={24} lg={8}>
              <img src={gas} width="100%"/>
              <h2>RevZilla was founded by a core team of riders who were frustrated with</h2>
              <h4>RevZilla was</h4>
              <Row>
                <Col xs={24} lg={12}>
                  <h5>10/09/2019</h5>
                </Col>
              </Row>
            </Col>
            <Col className="ne-content" xs={24} lg={8}>
              <img src={gas} width="100%"/>
              <h2>RevZilla was founded by a core team of riders who were frustrated with</h2>
              <h4>RevZilla was</h4>
              <Row>
                <Col xs={24} lg={12}>
                  <h5>10/09/2019</h5>
                </Col>
              </Row>
            </Col>
            <Col className="ne-content" xs={24} lg={8}>
              <img src={gas} width="100%"/>
              <h2>RevZilla was founded by a core team of riders who were frustrated with</h2>
              <h4>RevZilla was</h4>
              <Row>
                <Col xs={24} lg={12}>
                  <h5>10/09/2019</h5>
                </Col>
                <Col xs={24} lg={12}>
                  <Icon className="ne-icon-phone" type="IoMdBluetooth" theme="filled" /> 
                  <Icon className="ne-icon-phone" type="phone" theme="filled" /> 
                  <span>comment</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/*<Container className="mgt-sm ne-filter">
        <FilterBox
          className="bdt-primary"
          header="SHOP BY BIKE"
        />
      </Container>
      <Container className="ne-blog-post">
        <BlogPost data={guides} type={'hero-text'}/>
      </Container>
       <Container className="ne-brand-slider">
        <BrandSlider data={brands} />
      </Container>
      <Container className="ne-blog-post">
        <BlogPost data={posts} />
      </Container> */}
    </Theme>
  )
}

Home.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Home
