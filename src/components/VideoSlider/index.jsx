import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const { Title } = Typography

const VideoSilderContainer = styled.div`
  background-color: #222;
  color: #fff;
  max-width: 100%;

  .slick-slider {
    margin: 0 auto !important;
    width: 100% !important;
  }

  @media (min-width: 768px) {
    padding: 8rem 0 !important;
    margin: 0 auto !important;
  }
`

const SliderContainer = styled(Slider)`
  text-align: center;
  margin-bottom: 1rem;
  max-width: 100%;

  .slick-dots {
    bottom: -35px !important;
  }

  .slick-prev, .slick-next {
    bottom: 50px !important;
  }

  @media (min-width: 768px) {
    max-width: 640px;
  }
`

const TitleContainer = styled(Title)`
  text-align: center;
  margin-bottom: 2rem !important;
  font-weight: 800 !important;
  color: #fff !important;
`

const VideoTitle = styled(Title)`
  color: #fff !important;
  margin-top: 1.5rem;
  font-size: 1rem !important;
  font-weight: 400 !important;
`

const VideoText = styled.p`
  font-size: .8rem !important;
  font-weight: 400 !important;
  color: #d4d4d4;
`

const CaptionContainer = styled.div`
  padding: 1rem !important;
`

const VideoSlider = ({ data, slideShow = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1 || slideShow[1],
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1 || slideShow[0],
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }
    ]
  }

  return (
    <VideoSilderContainer>
      <TitleContainer level={4}>
        WATCH
      </TitleContainer>
      <SliderContainer {...settings}>
        {
          data.map((video, index) => (
            <>
              <iframe
                key={index}
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${video.link}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              >
              </iframe>
              <CaptionContainer>
                <VideoTitle level={4}>{video.title}</VideoTitle>
                <VideoText>{video.text}</VideoText>
              </CaptionContainer>
            </>
          ))
        }
      </SliderContainer>
    </VideoSilderContainer>
  )
}

VideoSlider.propTypes = {
  data: PropTypes.array,
  slideShow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ])
}

export default VideoSlider
