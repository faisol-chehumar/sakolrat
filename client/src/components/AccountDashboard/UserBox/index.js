import React from 'react'
import { Row, Col, Typography } from 'antd'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { Title } = Typography

const Block = styled.div`
  margin-bottom: 1rem;
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
          <Link to="/account">Edit</Link>
        </Block>
        <Block>
          <h4><b>Riding Style</b></h4>
          <Link to="/account/riding-style">Choos Your Riding Style</Link>
        </Block>
      </Col>
      <Col xs={12} lg={8}>
        2
      </Col>
      <Col xs={12} lg={8}>
        3
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
