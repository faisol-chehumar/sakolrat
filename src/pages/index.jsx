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
import { Slider } from 'antd';

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
      <div className="ne-read">
        <img src={readImage} width="100%" />
      </div>
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
