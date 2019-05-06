import React from 'react'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components/'
import stores from '../stores/'

const { HeroBanner, ExtraBar, CategoryMenu } = components
const { heroBanners, categoriesMenu } = stores

const Home = () => (
  <Theme>
    <HeroBanner data={heroBanners} />
    <ExtraBar />
    <Container size="md">
      <CategoryMenu
        header="SHOP BY RIDING STYLE"
        data={categoriesMenu}
      />
    </Container>
  </Theme>
)

export default Home
