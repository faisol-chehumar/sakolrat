import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'

const CarouselBanner = ({ data }) => (
  <Carousel autoplay>
    {
      data.map((img, index) => (
        <div key={index}>
          <h3>1</h3>
        </div>
      ))
    }
  </Carousel>
)

CarouselBanner.propsType = {
  data: PropTypes.object
}

export default CarouselBanner
