import React from 'react'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import stores from '../stores/'

const {
  HeroBanner,
  ExtraBar,
  CategoryMenu,
  BlogPost,
  FilterBox
} = components
const { categoriesMenu, heroBanners, posts, guides } = stores

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
  </Theme>
)

export default Home
