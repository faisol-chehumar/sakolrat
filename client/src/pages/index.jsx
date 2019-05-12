import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import stores from '../stores'
import components from '../components'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'

const {
  brands,
  categoriesMenu,
  guides,
  heroBanners,
  posts,
  productSlide
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
            id
            name
            description
          }
        }
      }
    }
  `)

  return (
    <Theme>
      <HeroBanner data={heroBanners} />
      <ExtraBar />
      <Container>
        <CategoryMenu
          header="SHOP BY RIDING STYLE"
          data={categoriesMenu}
        />
      </Container>
      <Container>
        <BlogPost data={posts} />
      </Container>
      <Container className="mgt-sm">
        <FilterBox
          className="bdt-primary"
          header="SHOP BY BIKE"
        />
      </Container>
      <Container>
        <BlogPost data={guides} type={'hero-text'}/>
      </Container>
      <Container>
        <BrandSlider data={brands} />
      </Container>
      <Container>
        <ProductSlider data={productSlide} />
      </Container>
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
