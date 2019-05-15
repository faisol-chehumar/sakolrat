import React from 'react'
import { Typography, Divider, Checkbox, Slider } from 'antd'
import styled from 'styled-components'

const { Title } = Typography

const SidebarFilterContainer = styled.div`
  padding-right: 3rem;
`

const SubHeader = styled(Title)`
  font-size: .8rem !important;
`

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`)
}

const SidebarFilter = (props) => (
  <SidebarFilterContainer>
    <Title level={3}>
      Filter
    </Title>
    <Divider />
    <SubHeader level={4}>
      Shop By
    </SubHeader>
    {
      ['New', 'Sale'].map((item, index) => (
        <div key={index}><Checkbox onChange={onChange}>{item}</Checkbox></div>
      ))
    }
    <Divider />
    <SubHeader level={4}>
      Brand
    </SubHeader>
    {
      ['Yoshimura', 'AVG', 'Bell', 'Arai'].map((item, index) => (
        <div key={index}><Checkbox onChange={onChange}>{item}</Checkbox></div>
      ))
    }
    <Divider />
    <SubHeader level={4}>
      Departments
    </SubHeader>
    {
      ['Gear', 'Parts', 'Helmet', 'Tools', 'Accessories'].map((item, index) => (
        <div key={index}><Checkbox onChange={onChange}>{item}</Checkbox></div>
      ))
    }
    <Divider />
    <SubHeader level={4}>
      Price Range
    </SubHeader>
    <Slider range min={100} max={20000} defaultValue={[100, 5000]} />
    <Divider />
    <SubHeader level={4}>
      Color
    </SubHeader>
    {
      ['Red', 'Blue', 'Green', 'Yellow', 'Pink'].map((item, index) => (
        <div key={index}>
          <Checkbox onChange={onChange}>
            <span style={{ borderRadius: '50%', marginRight: '.5rem', display: 'inline-block', width: '12px', height: '12px', backgroundColor: item }} />
            {item}
          </Checkbox>
        </div>
      ))
    }
  </SidebarFilterContainer>
)

export default SidebarFilter
