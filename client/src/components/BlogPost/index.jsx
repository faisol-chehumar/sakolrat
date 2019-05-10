import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Button from '../Button'

const BlogPostContainer = styled(Card)`
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

const BlogPost = ({ data, type }) => (
  <Row>
    {
      data.map((post, index) => (
        <Col key={index} xs={24} lg={12}>
          <Link className="block mg-sm" to={post.link}>
            <BlogPostContainer type={type}>
              <figure>
                <div className="thumb-img">
                  <img src={post.thumbImg} alt={post.title} width="100%" />
                  <span className="micro-text">
                    {type === 'hero-text' ? post.title : null}
                  </span>
                </div>
                {
                  !type && (
                    <Row>
                      <Col xs={24} lg={18}>
                        <figcaption className="mgt-sm">{post.caption}</figcaption>
                      </Col>
                      <Col xs={0} lg={6}>
                        <Button className="mgt-sm" text={'SHOP NOW'} href={post.link} />
                      </Col>
                    </Row>
                  )
                }
              </figure>
            </BlogPostContainer>
          </Link>
        </Col>
      ))
    }
  </Row>
)

BlogPost.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string
}

export default BlogPost
