import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ProductCard from '../ProductCard'

const SliderContainer = styled(Slider)`
  text-align: center;
  margin-bottom: 1rem;

  .slick-dots {
    bottom: -35px !important;
  }
`

const ProductSlider = ({ data, slideShow = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6 || slideShow[1],
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2 || slideShow[0],
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          centerPadding: '60px'
        }
      }
    ]
  }

  return (
    <div>
      <SliderContainer {...settings}>
        {
          data.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))
        }
      </SliderContainer>
    </div>
  )
}

ProductSlider.propTypes = {
  data: PropTypes.array,
  slideShow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ])
}

export default ProductSlider
