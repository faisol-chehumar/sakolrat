import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InternalLink from '../InternalLink'
import { Row, Col, Card } from 'antd'

const Block = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const GrayCardContainer = styled(Card)`
  background-color: #fafafa !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .15);
`

const TitleBlock = styled(Row)`
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #d8d8d8;
`

const CustomBox = ({ children, title, linkText, linkTo }) => (
  <div>
    <TitleBlock>
      <Col xs={20}>{title}</Col>
      <Col xs={4}>
        <InternalLink
          linkTo={linkTo}
          linkText={linkText}
        />
      </Col>
    </TitleBlock>
    <GrayCardContainer>
      <Block>
        { children }
      </Block>
    </GrayCardContainer>
  </div>
)

CustomBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  title: PropTypes.string,
  linkText: PropTypes.string,
  linkTo: PropTypes.string
}

export default CustomBox
