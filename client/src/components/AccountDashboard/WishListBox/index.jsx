import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CustomBox from '../../CustomBox'

const WishListBox = () => (
  <CustomBox
    title="Wish List"
    linkText="View Full Wish List"
    linkTo="/wish-list"
  >
    <p><b>You have 0 items in your Wish List.</b></p>
    <p>Better get shopping!</p>
  </CustomBox>
)

WishListBox.propTypes = {
  customerDetail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  users: { customerDetail }
}) => ({ customerDetail })

export default connect(mapStateToProps)(WishListBox)
