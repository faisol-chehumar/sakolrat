import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderCoverContainer = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  padding-bottom: 18rem;
  position: relative;
`

const HeaderCoverTitle = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: #fff;
  font-weight: 800;
  font-size: 4rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, .3), 0 3px 6px rgba(0, 0, 0, .3);
`

const HeaderCover = ({ data }) => (
  <HeaderCoverContainer {...data}>
    <HeaderCoverTitle>{data.title}</HeaderCoverTitle>
  </HeaderCoverContainer>
)

HeaderCover.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default HeaderCover
