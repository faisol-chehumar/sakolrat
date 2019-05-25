import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Select } from 'antd'
import styled from 'styled-components'

import HeaderTitle from '../HeaderTitle'
import Button from '../Button'

const Option = Select.Option

const SelectContainer = styled(Select)`
  width: 100%;
  margin-bottom: 1rem !important;
`

const FillterCoverImg = styled.div`
  line-height: 1.5;
  padding: .5rem 2rem;

  .cover-container {
    background-color: #eee;
    height: 5rem;
    position: relative;

    .cover {
      position: absolute;
      z-index: 999;
      top: -2.5rem;
      background-image: url(default.png);
      background-size: auto 90%;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      padding-top: 12rem;
    }
  }
`

const FilterBox = ({ header, ...rest }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <Row>
      <Col xs={24}>
        <Row>
          <Col xs={0} lg={24}>
            <Card {...rest}>
              <FillterCoverImg>
                <div className="cover-container">
                  <div className="cover"></div>
                </div>
              </FillterCoverImg>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Card>
              <Row>
                <Col xs={24} lg={4}>
                  <HeaderTitle text={header} level={3} />
                </Col>
              </Row>
              <Row>
                <Col xs={24} lg={4}>
                  <SelectContainer placeholder="Type" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </SelectContainer>
                </Col>
                <Col xs={24} lg={2}>
                  <SelectContainer placeholder="Type" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </SelectContainer>
                </Col>
                <Col xs={24} lg={4}>
                  <SelectContainer placeholder="Type" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </SelectContainer>
                </Col>
                <Col xs={24} lg={10}>
                  <SelectContainer placeholder="Type" onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </SelectContainer>
                </Col>
                <Col xs={24} lg={4}>
                  <Button type="secondary" text="GO!" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

FilterBox.propTypes = {
  header: PropTypes.string
}

export default FilterBox
