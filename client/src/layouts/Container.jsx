import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContainerBlock = styled.div`
  padding: ${props => props.size === 'xs'
    ? '2rem 8rem'
    : props.size === 'md'
      ? '2rem 8rem' : null};
`

const Container = ({ children, size }) => (
  <ContainerBlock size="xs">
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
