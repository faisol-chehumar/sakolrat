import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContainerBlock = styled.div`
  padding: 1rem .5rem;

  @media (min-width: 992px) {
    padding: 2rem 10rem;
  }
`

const Container = ({ children, size }) => (
  <ContainerBlock>
    {children}
  </ContainerBlock>
)

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  size: PropTypes.string
}

export default Container
