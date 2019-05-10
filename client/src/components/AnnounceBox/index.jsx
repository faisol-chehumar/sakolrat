import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Card, Typography } from 'antd'

const { Paragraph } = Typography

const CardContainer = styled(Card)`
  border-color: #222;
  background-color: transparent;

  .ant-card-body {
    padding-bottom: 1rem !important;
  }
`

const ParagraphContainer = styled(Paragraph)`
  text-align: center;
  font-weight: 800;
  font-size: .9rem;
  color: #111;
`

const AnnounceBox = ({ data }) => (
  <CardContainer>
    {console.log(data)}
    <ParagraphContainer>
      {
        data.map((line, index) => (
          <p key={index}>
            {line}dfdf
          </p>
        ))
      }
    </ParagraphContainer>
  </CardContainer>
)

AnnounceBox.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default AnnounceBox
