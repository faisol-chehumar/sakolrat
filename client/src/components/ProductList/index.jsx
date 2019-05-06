import React, { useState, useEffect } from 'react'
import request from '../../utils/request'

const ProductList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await request.get('/products')
      setData([
        ...data,
        res.data
      ])
      console.log(res.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      Product List
    </div>
  )
}

export default ProductList
