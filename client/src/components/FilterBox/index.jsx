import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Icon, Select } from 'antd'
import styled from 'styled-components'

import HeaderText from '../HeaderText'
import Button from '../Button'

const Option = Select.Option

const TagAction = styled.a`
  background-color: #333;
  color: #fff;
  padding: .5rem 1rem;
  position: absolute;
  display: block;
  left: 0;
  top: -38px;
  border-radius: 3px;

  b {
    margin-right: .5rem;
    margin-left: .5rem;
  }
`

const SelectContainer = styled(Select)`
  width: 100%;
  margin-bottom: 1rem !important;
`

const FilterBox = ({ header, ...rest }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <Row>
      <Col xs={24} lg={0}>
        <Card {...rest}>
          <TagAction href="https://www.revzilla.com/#">
            <Icon type="setting" />
            <b>
              Garage
            </b>
            <span>
              Log In to Access Saved Bikes
            </span>
          </TagAction>
          <HeaderText text={header} />
          <SelectContainer placeholder="Type" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </SelectContainer>
          <SelectContainer placeholder="Type" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </SelectContainer>
          <SelectContainer placeholder="Type" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </SelectContainer>
          <SelectContainer placeholder="Type" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </SelectContainer>
          <Button text="GO!" />
        </Card>
      </Col>
      <Col xs={0} lg={24}>
      </Col>
    </Row>
  )
}

FilterBox.propTypes = {
  header: PropTypes.string
}

export default FilterBox
