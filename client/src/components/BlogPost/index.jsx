import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import styled from 'styled-components'

import Button from '../Button'

const BlogPostContainer = styled(Card)`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .15);
  transition: 450ms ease-in-out;

  img {
    transition: 450ms ease-in-out;
  }

  .ant-card-body {
    padding: .5rem;
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

const BlogPost = ({ data }) => (
  <Row>
    {
      data.map((post, index) => (
        <Col key={index} xs={24} lg={12}>
          <a className="block mg-sm" href={post.link}>
            <BlogPostContainer>
              <figure>
                <div className="thumb-img">
                  <img src={post.thumbImg} alt={post.title} width="100%" />
                </div>
                <Row>
                  <Col xs={24} lg={18}>
                    <figcaption className="mgt-sm">{post.caption}</figcaption>
                  </Col>
                  <Col xs={0} lg={6}>
                    <Button className="mgt-sm" text={'SHOP NOW'} />
                  </Col>
                </Row>
              </figure>
            </BlogPostContainer>
          </a>
        </Col>
      ))
    }
  </Row>
)

BlogPost.propTypes = {
  data: PropTypes.array
}

export default BlogPost
