import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Typography, Icon } from 'antd'
import styled from 'styled-components'

import stores from '../stores'
import components from '../components'
import { getUniqueProducts } from '../utils/productHelper'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'

const { Title } = Typography

const {
  brands,
  categoriesMenu,
  guides,
  heroBanners,
  news,
  posts,
  productList,
  videos
} = stores

const {
  BrandSlider,
  HeroBanner,
  ExtraBar,
  CategoryMenu,
  BlogPost,
  FilterBox,
  ProductSlider,
  VideoSlider,
  NewsCard
  // InternalLink
} = components

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`

const TitleCustom = styled(Title)`
  text-align: center;
  margin: 1rem 0 !important;
  font-weight: 800 !important;
`

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
      <Container>
        <CategoryMenu
          header="SHOP BY RIDING STYLE"
          data={categoriesMenu}
        />
      </Container>
      {uniqueProducts.length > 0 && (
        <Container>
          <TitleContainer>
            <Title level={2}>สินค้าของเรา</Title>
            <Link to="/products">สินค้าทั้งหมด</Link>
          </TitleContainer>
          <ProductSlider data={uniqueProducts}/>
          <div style={{ height: '2rem' }} />
          <ProductSlider data={productList}/>
        </Container>
      )}
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
        <BlogPost data={posts} />
      </Container>
      <VideoSlider data={videos} />
      <Container>
        <TitleContainer>
          <Title level={2}>READ</Title>
        </TitleContainer>
        <NewsCard data={news} />
        <Link to="/brands">
          <TitleCustom level={4}>
            VIEW ALL ARTICLES <Icon type="arrow-right" />
          </TitleCustom>
        </Link>
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
