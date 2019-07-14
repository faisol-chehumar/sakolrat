import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Layout,
  Typography,
  Col,
  Divider,
  Card,
  Table,
  Row
} from 'antd'

import Theme from '../../layouts/Theme'
import Container from '../../layouts/Container'
import components from '../../components'

const {
  Header,
  Content
} = Layout

const {
  Title,
  Text
} = Typography

const {
  ExtraBar,
  RowBlock,
  InternalLink
} = components

const columns = [
  {
    title: 'Product',
    dataIndex: 'product'
  },
  {
    title: 'Price',
    dataIndex: 'price'
  },
  {
    title: 'QTY',
    dataIndex: 'qty'
  },
  {
    title: 'Total',
    dataIndex: 'total'
  }
]

const data = [{
  key: '1',
  product: 'Big Bike',
  price: 3200,
  qty: 1,
  total: 3200
}, {
  key: '2',
  product: 'Big Glove',
  price: 1200,
  qty: 2,
  total: 2400
}, {
  key: '3',
  product: 'Big Shirt',
  price: 200,
  qty: 5,
  total: 1000
}]

const HeaderContainer = styled(Header)`
  background: transparent !important;
  padding-left: 0 !important;
  height: auto !important;
  text-align: center;

  h2 {
    display: inline-block;
  }
`

const LayoutContainer = styled(Layout)`
  background: transparent !important;
`

const SubTitle = styled.p`
  margin-bottom: 1rem !important;
`

const TableSummary = () => (
  <Row>
    <Col offset={14} xs={10}>
      <Row>
        <Col xs={12}>
          <p>Total Summary: </p>
        </Col>
        <Col xs={12}>
          <p>12</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>Shipping Cost: </p>
        </Col>
        <Col xs={12}>
          <p>300</p>
        </Col>
      </Row>
    </Col>
  </Row>
)

const Order = ({ id }) => {
  return (
    <Theme bg={'#eee'}>
      <ExtraBar />
      <Container>
        <LayoutContainer>
          <HeaderContainer>
            <Title level={2}>
              Order Complete
            </Title>
          </HeaderContainer>
          <Content>
            <Card>
              <RowBlock>
                <Col xs={24}>
                  <Title level={4}>
                    Thank you for your order
                  </Title>
                  <SubTitle>Congratulation Your Order is Complete.</SubTitle>
                </Col>
                <Divider />
                <RowBlock>
                  <Col xs={12}>
                    <Title level={4}>
                      Shipping Address
                    </Title>
                    <p>Full Name: </p>
                    <p>Address: </p>
                    <p>Tel: </p>
                    <p>Email: </p>
                  </Col>
                  <Col xs={12}>
                    <Title level={4}>
                      Order Detail
                    </Title>
                    <p>Order Date: </p>
                    <p>Purchase Order: </p>
                  </Col>
                </RowBlock>
                <RowBlock>
                  <Col xs={12}>
                    <Title level={4}>
                      Shipping Method
                    </Title>
                    <Text>
                      Free Shipping
                    </Text>
                  </Col>
                  <Col xs={12}>
                    <Title level={4}>
                      Payment Method
                    </Title>
                    <Text>
                      Bank Transfer
                      <InternalLink
                        linkText="Waiting for approve"
                        linkTo="/comfirm-payment"
                        marginLeft="10px"
                      />
                    </Text>
                  </Col>
                </RowBlock>
              </RowBlock>
              <Divider />
              <RowBlock>
                <div>
                  <h4>Order Lists</h4>
                  <Table
                    columns={columns}
                    dataSource={data}
                    size="small"
                    footer={() => <TableSummary />}
                    pagination={false}
                  />
                </div>
              </RowBlock>
              <Divider />
              <RowBlock>
                <Col xs={24}>
                  <Title level={4}>Scan QR Code for Payment</Title>
                </Col>
                <Col xs={24} lg={8}>
                  <img src="https://promptpay.io/0877174080.png" width="300px" />
                </Col>
                <Col xs={24} lg={16}>
                  <h4>Remark</h4>
                  <ol>
                    <li>Order will shiped within 3 - 5 days</li>
                    <li>Order will shiped within 3 - 5 days</li>
                    <li>Order will shiped within 3 - 5 days</li>
                    <li>Order will shiped within 3 - 5 days</li>
                    <li>Order will shiped within 3 - 5 days</li>
                    <li>Order will shiped within 3 - 5 days</li>
                    <li>Order will shiped within 3 - 5 days</li>
                  </ol>
                  <p>
                    <InternalLink
                      linkTo="/confirm-payment"
                      linkText="Payment Noticec"
                    />
                  </p>
                  <p>
                    <InternalLink
                      linkTo="/check-order"
                      linkText="Check Your Order"
                    />
                  </p>
                </Col>
              </RowBlock>
              <Divider />
              <RowBlock>
                <Col xs={24}>
                  <div style={{ textAlign: 'center' }}>
                    <InternalLink
                      linkTo="/product"
                      linkText="Back To Shoping"
                      marginLeft="10px"
                    />
                    <InternalLink
                      linkTo="/account"
                      linkText="Back To My Account"
                      marginLeft="10px"
                    />
                    <InternalLink
                      linkTo="/print-purchase-order"
                      linkText="Print Purchase Order"
                      marginLeft="10px"
                    />
                  </div>
                </Col>
              </RowBlock>
            </Card>
          </Content>
        </LayoutContainer>
      </Container>
    </Theme>
  )
}

Order.propTypes = {
  id: PropTypes.string
}

export default Order
