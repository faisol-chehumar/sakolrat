import React from 'react'
import { Row, Col, Typography } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InternalLink from '../../InternalLink'

const { Title } = Typography

const Block = styled.div`
  margin-bottom: 2rem;
`

const UserBox = ({ customerDetail: { data } }) => {
  return (
    <Row>
      <Col xs={12} lg={8}>
        <Block>
          <Title level={3}>
            User Name
          </Title>
          <p>
            <b>Email: </b> { data.email }
          </p>
          <p>
            <b>Password: </b> *******
          </p>
          <InternalLink
            linkTo="/account"
            linkText="Edit"
          />
        </Block>
      </Col>
      <Col xs={12} lg={16}>
        <Block>
          <p>Part of TeamZilla since 2019</p>
        </Block>
        <Row>
          <Col xs={24} lg={12}>
            <Block>
              <p>Shipping:</p>
              <InternalLink
                linkTo="/shipping-address"
                linkText="Add your primary shipping address"
              />
            </Block>
          </Col>
          <Col xs={24} lg={12}>
            <p>Payment Info:</p>
            <InternalLink
              linkTo="/payment-methods"
              linkText="Add Payment Information"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

UserBox.propTypes = {
  customerDetail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  users: { customerDetail }
}) => ({ customerDetail })

export default connect(mapStateToProps)(UserBox)
