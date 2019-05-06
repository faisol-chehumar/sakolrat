import React from 'react'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import stores from '../stores/'

const { HeroBanner, ExtraBar, CategoryMenu, BlogPost } = components
const { categoriesMenu, heroBanners, posts } = stores

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
  </Theme>
)

export default Home
