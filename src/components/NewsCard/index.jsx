import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Typography } from 'antd'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import Button from '../Button'

const { Title } = Typography

const NewsCardContainer = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .15);
  transition: 450ms ease-in-out;
  position: relative;

  img {
  transition: 450ms ease-in-out;
  }

  figure {
  margin-bottom: ${props => props.type === 'hero-text' ? 0 : null};
  }

  .ant-card-body {
  padding: .5rem;
  }

  .micro-text {
  position: absolute;
  color: #fff;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-weight: 800;
  font-size: 1.3rem;
  text-shadow: 0 0 3px rgba(0,0,0,.3), 0 3px 6px rgba(0,0,0,.3);
  }

  &:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .15);

  img {
    transform: scale(1.01);
  }
  }

  @media (min-width: 992px) {
  .ant-card-body {
    padding: 1rem;
  }
  }
`

const NewsCard = ({ data, type }) => (
  <Row>
    {
      data.map((post, index) => (
        <Col key={index} xs={24} lg={8}>
          <Link className="block mg-sm" to={post.link} x={console.log(post)}>
            <NewsCardContainer type={type}>
              <figure>
                <div className="thumb-img">
                  <img src={post.thumbImg} alt={post.title} width="100%" />
                  <span className="micro-text">
                    {type === 'hero-text' ? post.title : null}
                  </span>
                </div>
                <figcaption style={{ padding: '2rem' }} className="mgt-sm">
                  <Title level={3}>{post.title}</Title>
                  <p>{post.caption}</p>
                  <Row>
                    <Col xs={8}>
                      <small>Jul 05, 2019</small>
                    </Col>
                    <Col xs={8}>
                      <small>LIKE: 113</small>
                    </Col>
                    <Col xs={8}>
                      <small>COMMENTS: 354</small>
                    </Col>
                  </Row>
                </figcaption>
              </figure>
            </NewsCardContainer>
          </Link>
        </Col>
      ))
    }
  </Row>
)

NewsCard.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string
}

export default NewsCard
