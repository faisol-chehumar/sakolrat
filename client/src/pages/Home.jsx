import React from 'react'

import CarouselBanner from '../components/Carousel'
import Theme from '../layouts/Theme'

import heroBanners from '../stores/hero-banners.js'

const Home = () => (
  <Theme>
    <CarouselBanner data={heroBanners} />
  </Theme>
)

export default Home
