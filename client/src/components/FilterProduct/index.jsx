import React, { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

const FilterProduct = () => {
  const [ sortBy ] = useState([
    'Featured',
    'Rating',
    'Brand',
    'Best Sellers',
    'Newest Arrivals',
    'Price: Low to High',
    'Price: High to Low'
  ])

  return (
    <Select defaultValue="Featured" style={{ width: 200 }}>
      {sortBy.map((sort, index) => (
        <Option key={index} value={sort}>{sort}</Option>
      ))}
    </Select>
  )
}

export default FilterProduct
