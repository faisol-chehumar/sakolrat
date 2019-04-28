import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContainerBlock = styled.div`
  padding: 2rem 8rem;
`

const Container = ({ children }) => (
  <ContainerBlock>
    {children}
  </ContainerBlock>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Container
