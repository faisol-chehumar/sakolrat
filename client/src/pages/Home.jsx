import React from 'react'

import stores from '../stores/'
import components from '../components/'
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

// console.log(brands)

const Home = () => (
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

export default Home
