import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'

import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'
import UserDropdownMenu from '../UserDropdownMenu'

const LoginButton = styled(Button)`
  background-color: #fa4c06 !important;
  border-color: #fa4c06 !important;
`

const LoginModal = (props) => {
  const { token } = props
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState('login')

  const showModal = () => {
    setVisible(true)
  }

  const closeModal = e => {
    setVisible(false)
  }

  const switchFormHandle = input => {
    setFormState(input)
  }

  return (
    <div>
      { token === null ? (
        <LoginButton type="primary" onClick={showModal}>
          Signup/Login
        </LoginButton>
      ) : (
        <UserDropdownMenu
          username="My Account"
          avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      )}
      <Modal
        title={formState === 'login' ? 'LOG IN' : 'CREATE ACCOUNT'}
        visible={visible}
        width={300}
        onOk={showModal}
        onCancel={closeModal}
        footer={null}
      >
        {
          formState === 'login'
            ? <LoginForm onSwitch={switchFormHandle} close={closeModal} />
            : <RegisterForm onSwitch={switchFormHandle} close={closeModal} />
        }
      </Modal>
    </div>
  )
}

LoginModal.propTypes = {
  token: PropTypes.string,
  customer: PropTypes.object
}

const mapStateToProps = ({
  users: { token }
}) => ({ token })

export default connect(mapStateToProps)(LoginModal)
