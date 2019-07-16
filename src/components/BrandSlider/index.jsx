import React from 'react'
import { Typography, Icon } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// import { Row, Col } from 'antd'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const { Title } = Typography

const SliderContainer = styled(Slider)`
  text-align: center;
  margin-bottom: 1rem;

  .slick-prev:before, .slick-next:before {
    color: #222 !important;
  }
`

const TitleContainer = styled(Title)`
  text-align: center;
  margin-bottom: 1rem !important;
  font-weight: 800 !important;
`

const BrandSlider = ({ data, slideShow = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6 || slideShow[1],
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4 || slideShow[0],
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }
    ]
  }

  return (
    <div>
      <SliderContainer {...settings}>
        {
          data.map((brand, index) => (
            <a key={index}>
              <img src={brand.logo} />
            </a>
          ))
        }
      </SliderContainer>
      <Link to="/brands">
        <TitleContainer level={4}>
          SHOP ALL BRANDS <Icon type="arrow-right" />
        </TitleContainer>
      </Link>
    </div>
  )
}

BrandSlider.propTypes = {
  data: PropTypes.array,
  slideShow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ])
}

export default BrandSlider
