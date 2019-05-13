import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import stores from '../stores'
import components from '../components'
import { getUniqueProducts } from '../utils/moltinHelper'

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
            name
            slug
            mainImageHref
            meta {
              display_price {
                without_tax {
                  formatted
                }
              }
            }
          }
        }
      }
    }
  `)

  const uniqueProducts = getUniqueProducts(data['allMoltinProduct']['edges'], 'name')
  console.log(uniqueProducts)

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
      {uniqueProducts.length > 7 && (
        <Container>
          <ProductSlider data={uniqueProducts} />
        </Container>
      )}
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
