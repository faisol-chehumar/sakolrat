import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import styled from 'styled-components'

import InternalLink from '../InternalLink'
import InternalLinkRegular from '../InternalLinkRegular'

import stores from '../../stores'
import linkBuilder from '../../utils/linkBuider.js'

const { Title } = Typography

const { needHelpBox } = stores

const TitleInline = styled(Title)`
  display: inline-block;
`

const NeedHelpBox = () => (
  <Card>
    <Row>
      <Col xs={24}>
        <TitleInline level={4}>
          Need Help? Call
        </TitleInline>
        <InternalLink
          linkTo="tel:+1 (215) 334-5500"
          linkText=" +1 (215) 334-5500"
        />
      </Col>
      {
        needHelpBox.map((state, index) => (
          <Col xs={12} lg={8} key={index}>
            <InternalLinkRegular
              linkText={state.toUpperCase()}
              linkTo={linkBuilder(state)}
            />
          </Col>
        ))
      }
    </Row>
  </Card>
)

export default NeedHelpBox
