import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'
import styled from 'styled-components'

const HeroBanner = styled.div`
  background-image: url( ${props => props.imgSrc.xs} );
  height: 22rem;
  background-size: cover;
  background-position: center top;

  @media (min-width: 992px) {
    height: 26rem;
    background-image: url( ${props => props.imgSrc.lg} );
    background-size: contain;
  }
`

const CarouselBanner = ({ data }) => (
  <Carousel autoplay>
    {
      data.map((img, index) => (
        <a key={index} href={img.link}>
          <HeroBanner imgSrc={img.src}>
            <h1>{img.title}</h1>
          </HeroBanner>
        </a>
      ))
    }
  </Carousel>
)

CarouselBanner.propTypes = {
  data: PropTypes.array
}

export default CarouselBanner
