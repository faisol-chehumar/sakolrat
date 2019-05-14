import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RatingContainer = styled.div`
text-align: left;

  .anticon-star {
    color: #ff9b00;
  }

  .voteCount {
    margin-left: 1rem;
  }
`

const Rating = ({ score, ...rest }) => (
  <RatingContainer {...rest}>
    {
      Array(5).fill('').map((_, index) => (
        <Icon key={index} type="star" theme={index + 1 <= score ? 'filled' : 'outlined' } />
      ))
    }
    <span className="voteCount">[250]</span>
  </RatingContainer>
)

Rating.propTypes = {
  score: PropTypes.number
}

export default Rating
