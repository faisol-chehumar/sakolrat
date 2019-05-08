import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Carousel } from 'antd'
import styled from 'styled-components'

const CarouselContainer = styled(Carousel)`
  text-align: center;
  padding: 1rem;

  .slick-dots li,
  .slick-dots li.slick-active button {
    background-color: #333;
  }
`

const BrandSlider = ({ data }) => (
  <CarouselContainer autoplay>
    {
      data.map((page, index) => (
        <div key={index}>
          <Row>
            {
              page.map((brand, i) => (
                <Col key={i} xs={24} lg={4}>
                  <a href={brand.link}>
                    <img src={brand.logo} />
                    <p>{brand.title}</p>
                  </a>
                </Col>
              ))
            }
          </Row>
        </div>
      ))
    }
  </CarouselContainer>
)

BrandSlider.propTypes = {
  data: PropTypes.array
}

export default BrandSlider
