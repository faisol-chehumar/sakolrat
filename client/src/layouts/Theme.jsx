import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'

import components from '../components/'

const {
  Header, Footer, Content
} = Layout

const { Navbar } = components

const GlobalStyle = createGlobalStyle`
  a {
    color: #fa4c06;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .ant-layout-header {
    background-color: transparent !imporatnt;
  }

  .a-hilight {
    color: #67aa43 !important;

    &:hover {
      color: #518535 !important;
    }
  }

  .black {
    color: #333 !important;
  }

  .block {
    display: block;
  }

  .clickable {
    cursor: pointer;
  }

  .container {
    padding: 1rem;
  }

  .mg-sm {
    margin: 1rem;
  }

  .mgt-sm {
    margin-top: 1rem;
  }

  .thumb-img {
    overflow: hidden;
  }

  .bdt-primary {
    border-top: 2px solid #fa4c06;
  }

  .bg-white {
    background-color: #fff;
  }

  @media (max-width: 992px) {
    .container {
      padding-left: 2rem;
    }

    .mg-sm {
      margin: .5rem;
    }
  }
`

const HeaderContainer = styled(Header)`
  font-size: 1.5rem;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  height: auto !important;
  background-color: #151211 !important;

  @media (min-width: 992px) {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
  }
`

// const FooterContainer = styled(Footer)

const Theme = ({ children }) => (
  <div>
    <Layout>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <Content className="bg-white">
        {children}
      </Content>
      <Footer>
        Footer
      </Footer>
      <GlobalStyle />
    </Layout>
  </div>
)

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Theme
