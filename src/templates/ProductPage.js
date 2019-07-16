import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  graphql,
  Link
  // navigate
} from 'gatsby'
import get from 'lodash/get'
import {
  Row,
  Col,
  Select,
  Typography,
  Button,
  // Tabs,
  // Table,
  // Divider,
  Icon
} from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
// import queryString from 'query-string'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'
import './productpage.css'
import userHelp from '../../static/user-help.png'

const { Paragraph } = Typography
const { Rating, BreadcrumbShop, HeaderTitle } = components

const Option = Select.Option
// const TabPane = Tabs.TabPane

const ThumbImg = styled.div`
  padding: 2rem;
`

const MetaData = styled.div`
  margin-bottom: 1rem;
`

const Price = styled.span`
  font-weight: 800;
  font-size: 1.8rem;
`

// const ProductBadge = styled.div`
//   padding: .2rem 2rem;
//   display: inline-block;
//   background-color: #00adff;
//   color: #fff;
// `

const ProductPageTemplate = (props) => {
  const data = props.data
  const product = get(data, 'allMoltinProduct.edges[0].node')
  const {
    name,
    sku,
    // video,
    mainImageHref,
    description,
    price: [ { amount, currency } ]
  } = product

  // const videoEmbeded = video ? queryString.parse(video.split('?')[1]) : null

  // const columns = [
  //   {
  //     title: 'PRODUCT STYLE',
  //     dataIndex: 'productStyle'
  //   },
  //   {
  //     title: 'REVZILLA ITEM #',
  //     dataIndex: 'revzillaItem'
  //   },
  //   {
  //     title: 'MFR. PRODUCT #',
  //     dataIndex: 'mfrProduct'
  //   },
  //   {
  //     title: 'AVAILABILITY',
  //     dataIndex: 'availability'
  //   }
  // ]

  // const dataTable = [
  //   {
  //     productStyle: 'Vance & Hines Fuelpak FP3 Autotuner For Harley 2011-2019',
  //     revzillaItem: '944854',
  //     mfrProduct: '66005',
  //     availability: 'In Stock: Ships within 24 hours'
  //   }
  // ]

  const [quantity, setQuantity] = useState(1)

  const [curBreadcum] = useState([
    {
      title: 'HOME',
      link: '/'
    },
    {
      title: 'SHOP',
      link: '/product/'
    }
  ])

  const addToCartHandle = (e) => {
    e.preventDefault()

    props.addItem({
      id: product.id,
      quantity: quantity
    })
  }

  const handleSelect = (qty) => {
    setQuantity(qty)
  }

  return (
    <Theme>
      <Container>
        <Row>
          <Col xs={24} lg={10}>
            <BreadcrumbShop data={curBreadcum} />
            <ThumbImg className="ne-image-product">
              <img src={mainImageHref} alt={name} width="100%" />
            </ThumbImg>
            <div className="ne-video">
              <iframe
                height="350px"
                width="100%"
                src="https://www.youtube.com/embed/7g1R_LD0yyY?controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </Col>
          <Col xs={24} lg={12} className="ne-product-title">
            <div className="ne-staff-pick">STAFF PICK</div>
            <HeaderTitle leve={2} text={name} align="left" />
            <MetaData>
              <div style={{ marginBottom: '1rem' }}>
                Item: XXX | SKU: {sku}
              </div>
              <div>
                <Rating
                  className="inline"
                  score={4}
                  style={{ marginRight: '1rem' }}
                />
                <div className="inline">
                  | 216 Q&As | <Link to="/write-review">Write a Review</Link>
                </div>
              </div>
            </MetaData>
            <Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {description} <Link to="/">Read more</Link>
            </Paragraph>
            <Price>{`${currency} ${amount}`}</Price>
            <div>
              <p><b>In Stock</b> Ships within 24 hours</p>
            </div>
            <Select
              defaultValue="1"
              style={{ width: 120, marginRight: '1rem' }}
              onChange={handleSelect}
            />
            <Price>฿ {amount}</Price>
            <div className="ne-select-product">
              <p><b>In Stock</b>Ships within 24 hours</p>
              <div>
                <Select className="ne-select" defaultValue="1" style={{ width: 120 }} onChange={handleSelect}>
                  {Array(10).fill('').map((_, index) => (
                    <Option key={index} value={index + 1}>{index + 1}</Option>
                  ))}
                </Select>
                <Button className="ne-button" onClick={addToCartHandle}>Add To Cart</Button>
                <Button className="ne-button" onClick={addToCartHandle}>Pay Now</Button>
              </div>
              <a className="ne-view-all" href="/"><span>Add To Wish List</span></a>
            </div>
            <div className="ne-help">
              <Row className="ne-row">
                <Col className="ne-col" xs={24} lg={6}>
                  <div>
                    <img src={userHelp} width="100px" />
                  </div>
                </Col>
                <Col className="ne-col" xs={24} lg={12}>
                  <div>
                    <h2><b>NEE HELP ?</b></h2>
                    <h3>Speak to one of our Gear Geeks:</h3>
                    <div className="ne-contact">
                      <Row>
                        <Col className="ne-phone" xs={24} lg={12}><Icon className="ne-icon-phone" type="phone" theme="filled" /><span>+1 (215) 334-5500</span></Col>
                        <Col className="ne-email" xs={24} lg={12}><Icon className="ne-icon-mail" type="mail" theme="filled" /><span>Email Us</span></Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Theme>
  )
}

ProductPageTemplate.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  addItem: PropTypes.func
}

const mapStateToProps = ({
  carts: { cartId }
}) => ({ cartId })

const mapDispatchToProps = ({
  carts: { addItem }
}) => ({
  addItem: (payload) => addItem(payload)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageTemplate)

export const pageQuery = graphql`
  query ProductQuery($id: String!) {
    allMoltinProduct(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          name
          description
          video
          price {
            amount
            currency
            includes_tax
          }
          mainImageHref
          # mainImage {
          #   childImageSharp {
          #     sizes(maxWidth: 400) {
          #       ...GatsbyImageSharpSizes
          #     }
          #   }
          # }
          mainImage {
            url
          }
          slug
          sku
          categories {
            id
            name
          }
        }
      }
    }
  }
`
