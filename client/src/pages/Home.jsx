import React from 'react'

import Theme from '../layouts/Theme'
import HeroBanner from '../components/HeroBanner'
import ExtraBar from '../components/ExtraBar'

import heroBanners from '../stores/hero-banners.js'

const Home = () => (
  <Theme>
    <HeroBanner data={heroBanners} />
    <ExtraBar />
  </Theme>
)

export default Home
