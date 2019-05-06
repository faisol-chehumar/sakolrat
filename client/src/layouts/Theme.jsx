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

  .block {
    display: block;
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

const HeaderContainer = styled.div`
  font-size: 1.5rem;

  header {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height: auto;
    background-color: #151211;
  }

  @media (min-width: 992px) {
    header {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
`

const Theme = ({ children }) => (
  <div>
    <Layout>
      <HeaderContainer>
        <Header>
          <Navbar />
        </Header>
      </HeaderContainer>
      <Content>
        {children}
      </Content>
      <Footer>Footer</Footer>
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
