import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import styled from 'styled-components'

import Button from '../Button'

const BlogPostContainer = styled(Card)`
  .ant-card-body {
    padding: .5rem;
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
              <img src={post.thumbImg} alt={post.title} width="100%" />
              <Row>
                <Col xs={24} lg={18}>
                  <figcaption className="mgt-sm">{post.caption}</figcaption>
                </Col>
                <Col xs={0} lg={6}>
                  <Button className="mgt-sm" text={'SHOP NOW'} />
                </Col>
              </Row>
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
