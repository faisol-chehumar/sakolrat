import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal, Row, Col } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Moltin from '../../utils/moltin'
import InternalLink from '../InternalLink'
import ProductUpdateButton from '../ProductUpdateButton'
import ProductQtySelect from '../ProductQtySelect'

const PriceTag = styled.p`
  font-size: 1.5rem;
`

const EditItemModal = ({ item }) => {
  const [visible, setVisible] = useState(false)
  const [brand, setBrand] = useState([])
  const [brandLogo, setBrandLogo] = useState(null)
  const [productQuantity, setProductQuantity] = useState(0)

  const showModal = (e) => {
    e.preventDefault()
    setVisible(true)
  }

  const closeModal = e => {
    setVisible(false)
  }

  useEffect(() => {
    const fetchRelateData = async () => {
      if (brand.length <= 0) {
        const product = await Moltin.Products.Get(item.productId)
        const brandId = product.data.relationships.brands.data[0].id
        const brandData = await Moltin.Brands.Get(brandId)
        const brandImgageSrc = brandData.data['image-url']
        const brandImage = await Moltin.Files.Filter({ eq: { file_name: `${brandImgageSrc}.jpg` } }).All()

        setBrand([brandData])
        setBrandLogo(brandImage)
        setProductQuantity(item.qty)
      }
    }

    fetchRelateData()

    return () => {
      fetchRelateData()
    }
  })

  return (
    <>
      <InternalLink
        linkTo="#"
        linkText="Edit"
        onClick={showModal}
      />
      <Modal
        title={item.name}
        visible={visible}
        width={600}
        onOk={showModal}
        onCancel={closeModal}
        footer={null}
      >
        <Row>
          <Col xs={12}>
            <img src={item.image} width="100%" />
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <PriceTag><b>{item.pricePerUnit}</b></PriceTag>
              </Col>
              <Col xs={12}>
                {brandLogo && (
                  <img
                    src={
                      brandLogo.data.length > 0
                        ? brandLogo.data[0].link.href
                        : 'https://www.revzilla.com//images/sites/cycle_gear/support/sprites/brand_logos@1x/alpinestars-9a1a98ec20702c0b7666afd611fa1f5a.png'
                    }
                    width="80px"
                  />
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ProductQtySelect
                  quantity={productQuantity}
                  updateProductQty={setProductQuantity}
                />
              </Col>
              <Col xs={12}>
                <ProductUpdateButton
                  id={item.id}
                  quantity={productQuantity}
                  onUpdateComplete={closeModal}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

EditItemModal.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  users: { token }
}) => ({ token })

export default connect(mapStateToProps)(EditItemModal)
