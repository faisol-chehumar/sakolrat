import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import CustomBox from '../../CustomBox'
import Button from '../../Button'

const RecentOrder = () => (
  <CustomBox
    title="Recent Orders"
    linkText="Contact Customer Service"
    linkTo="/customer-service"
  >
    <p>
      <b>We can&apos;t find any previous orders.</b>
    </p>
    <Button
      type="primary"
      text="START SHOPPING"
      width="10rem"
    />
  </CustomBox>
)

RecentOrder.propTypes = {
  customerDetail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

const mapStateToProps = ({
  users: { customerDetail }
}) => ({ customerDetail })

export default connect(mapStateToProps)(RecentOrder)
