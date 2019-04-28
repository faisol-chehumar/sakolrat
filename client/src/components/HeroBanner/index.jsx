import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'
import styled from 'styled-components'

const HeroBannerContainer = styled.div`
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

const HeroBanner = ({ data }) => (
  <Carousel autoplay>
    {
      data.map((img, index) => (
        <a key={index} href={img.link}>
          <HeroBannerContainer imgSrc={img.src}>
            <h1>{img.title}</h1>
          </HeroBannerContainer>
        </a>
      ))
    }
  </Carousel>
)

HeroBanner.propTypes = {
  data: PropTypes.array
}

export default HeroBanner
