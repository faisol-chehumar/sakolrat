import React from 'react'
import { Layout } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from '../components/Navbar'
const {
  Header, Footer, Content
} = Layout

const GlobalStyle = createGlobalStyle`
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

const Index = () => (
  <div>
    <Layout>
      <HeaderContainer>
        <Header>
          <Navbar />
        </Header>
      </HeaderContainer>
      <Content>Content</Content>
      <Footer>Footer</Footer>
      <GlobalStyle />
    </Layout>
  </div>
)

export default Index
