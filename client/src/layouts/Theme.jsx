import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'

import components from '../components/'
import store from '../stores'

const {
  Header, Footer, Content
} = Layout

const { infoContent, subscribeBox } = store
const {
  Navbar,
  InfoBlock,
  SubscribeBox,
  FooterInfo
} = components

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

  .fl {
    float: left;
  }

  .inline {
    display: inline-block;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
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
  height: auto !important;
  padding: 0 1rem !important;

  @media (min-width: 992px) {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
  }
`

const ContentContainer = styled(Content)`
  background-color: ${props => props.bg}
`

const FooterContainer = styled(Footer)`
  background: #151211 !important;
  color: #fff !important;

  h3,
  .ant-typography {
    color: #fff;
  }
`

const Theme = ({ bg = '#fff', children }) => (
  <div>
    <Layout>
      <HeaderContainer>
        <Navbar />
      </HeaderContainer>
      <ContentContainer bg={bg}>
        {children}
      </ContentContainer>
      <FooterContainer>
        <InfoBlock data={infoContent[0]} />
        <SubscribeBox data={subscribeBox[0]} />
        <FooterInfo />
      </FooterContainer>
      <GlobalStyle />
    </Layout>
  </div>
)

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  bg: PropTypes.string
}

export default Theme
