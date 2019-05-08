import React from 'react'
import PropTypes from 'prop-types'
// import { Row, Col } from 'antd'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderContainer = styled(Slider)`
  text-align: center;
`

const BrandSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }
    ]
  }

  return (
    <SliderContainer {...settings}>
      {
        data.map((brand, index) => (
          <a key={index}>
            <img src={brand.logo} />
            {brand.title}
          </a>
        ))
      }
    </SliderContainer>
  )
}

BrandSlider.propTypes = {
  data: PropTypes.array
}

export default BrandSlider
