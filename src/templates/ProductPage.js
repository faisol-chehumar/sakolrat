import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, navigate } from 'gatsby'
import get from 'lodash/get'
import { Row, Col, Select, Typography, Button, Tabs, Table, Divider } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import queryString from 'query-string'

import Theme from '../layouts/Theme'
import Container from '../layouts/Container'
import components from '../components'

const { Paragraph } = Typography
const { Rating, BreadcrumbShop, HeaderTitle } = components

const Option = Select.Option
const TabPane = Tabs.TabPane

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

const ProductBadge = styled.div`
  padding: .2rem 2rem;
  display: inline-block;
  background-color: #00adff;
  color: #fff;
`

const ProductPageTemplate = (props) => {
  const data = props.data
  const product = get(data, 'allMoltinProduct.edges[0].node')
  const {
    name,
    sku,
    video,
    mainImageHref,
    description,
    price: [ { amount, currency } ]
  } = product

  const videoEmbeded = video ? queryString.parse(video.split('?')[1]) : null

  const columns = [
    {
      title: 'PRODUCT STYLE',
      dataIndex: 'productStyle'
    },
    {
      title: 'REVZILLA ITEM #',
      dataIndex: 'revzillaItem'
    },
    {
      title: 'MFR. PRODUCT #',
      dataIndex: 'mfrProduct'
    },
    {
      title: 'AVAILABILITY',
      dataIndex: 'availability'
    }
  ]

  const dataTable = [
    {
      productStyle: 'Vance & Hines Fuelpak FP3 Autotuner For Harley 2011-2019',
      revzillaItem: '944854',
      mfrProduct: '66005',
      availability: 'In Stock: Ships within 24 hours'
    }
  ]

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
            <ThumbImg>
              <img src={mainImageHref} alt={name} width="100%" />
            </ThumbImg>
            {
              video && <div style={{ padding: '2rem' }}>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoEmbeded.v}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                >
                </iframe>
              </div>
            }
          </Col>
          <Col xs={24} lg={14}>
            <ProductBadge>STAFF PICK</ProductBadge>
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
              <div>
                <Select
                  defaultValue="1"
                  style={{ width: 120, marginRight: '1rem' }}
                  onChange={handleSelect}
                >
                  {Array(10).fill('').map((_, index) => (
                    <Option key={index} value={index + 1}>{index + 1}</Option>
                  ))}
                </Select>
                <Button
                  onClick={addToCartHandle}
                  style={{
                    marginRight: '1rem',
                    backgroundColor: '#152D5A',
                    color: '#fff'
                  }}
                >
                  หยิบลงตะหร้า
                </Button>
                <Button
                  onClick={() => navigate('/cart')}
                  style={{
                    marginRight: '1rem',
                    backgroundColor: '#152D5A',
                    color: '#fff'
                  }}
                >
                  ชำระเงิน
                </Button>
                <a href="/"><span>Add To Wish List</span></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Tabs defaultActiveKey="1" style={{ marginTop: '2rem' }}>
              <TabPane tab="Product Detail" key="1">
                <div>
                  <h4>Vance and Hines Fuelpack FP 3 For Harley CAN Bus</h4>
                  <p>
                    The Fuel Pack FP-3 is revolutionizing fuel management for Harley-Davidson CANBus models.
                    Connecting wirelessly by Bluetooth to any iPhone or Android smartphone,
                    FP-3 makes it simple to recalibrate a host of engine parameters.
                    Mapping for exhaust systems and other performance upgrades is available
                    from the expansive library of calibrations being developed by V&H. The FP-3
                    also boasts an Autotune feature that changes the air/fuel ratio which means
                    your bike actually gets better over time. It lets you select from 3 different
                    decel-pop reduction levels to help with that often annoying and sometimes
                    unsettling sound. With the Fuelpak module plugged-in, live sensor data can be viewed
                    through your smartphone or tablet to display speed, RPM, fuel economy, power, torque,
                    cylinder head temperature, voltage, gear selection, speedometer calibration
                    and other vital information through the free V&H application user interface.
                  </p>
                </div>
                <div>
                  <h4>Features</h4>
                  <ul>
                    <li>Recalibrates the ECM by flash tuning</li>
                    <li>Autotune feature for added tuning precision</li>
                    <li>Can display a variety of live sensor data while riding</li>
                    <li>Can be removed from bike if live data or autotuning is not needed</li>
                    <li>Easy to follow installation instructions included</li>
                    <li>6 Pin CAN/Bus connector</li>
                    <li>V&H part # 66005</li>
                    <li>Made in the USA</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <b>Note: This item cannot be returned once the package has been opened</b>
                    Manufacturing issues can be handled through Vance & Hines directly.
                  </p>
                </div>
              </TabPane>
              <TabPane tab="Part Number" key="2">
                <Table columns={columns} dataSource={dataTable} size="small" pagination={false} />
              </TabPane>
              <TabPane tab="Fitment" key="3">
                <div>
                  <h4 className="center">THIS PRODUCT FITS</h4>
                  <Divider orientation="left">HARLEY DAVIDSON</Divider>
                  <Row>
                    <Col xs={24} lg={12}>
                      <dl>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                      </dl>
                    </Col>
                    <Col xs={24} lg={12}>
                      <dl>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                        <dt>Dyna Fat Bob FXDF 2012-2017</dt>
                      </dl>
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="Shipping & Returns" key="4">
                <div>
                  <h4>Shipping</h4>
                  <p>
                    Orders $39.99 and over qualify for our fast free shipping offer. Click Here for FREE Shipping Terms
                    and Conditions.
                    Please see our International Orders page for orders shipping outside the US.
                    We show real-time availability on this product page when you select the size/color item you want.
                    Most items will ship the same business day an order is placed, however if an item requires
                    additional processing time a message will be shown indicating such.
                    See our full Shipping Policy for further details.
                  </p>
                  <h4>Returns</h4>
                  <p>
                    If your order arrives and it is not right, we will fix it, NO NONSENSE, we promise.
                    Doesn&apos;t fit or just not happy with it? You can return any new, unused
                    and unaltered item within 30 business days of delivery receipt of your item.
                    We will issue a full refund to your original payment method.
                    See our full Return Policy for all of the pertinent details.
                  </p>
                </div>
              </TabPane>
            </Tabs>
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
