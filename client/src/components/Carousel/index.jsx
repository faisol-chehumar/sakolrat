import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'
import styled from 'styled-components'

const HeroBanner = styled.div`
  background-image: url( ${props => props.imgSrc} );
`

const CarouselBanner = ({ data }) => (
  <Carousel autoplay>
    {
      data.map((img, index) => (
        <HeroBanner key={index} imgSrc={img.src}>
          <h1>{img.title}</h1>
        </HeroBanner>
      ))
    }
  </Carousel>
)

CarouselBanner.propTypes = {
  data: PropTypes.array
}

export default CarouselBanner
