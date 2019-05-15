import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import styled from 'styled-components'

import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'

const LoginButton = styled(Button)`
  background-color: #fa4c06 !important;
  border-color: #fa4c06 !important;
`

const LoginModal = () => {
  const [visible, setVisible] = useState(false)
  const [formState, setFormState] = useState('login')

  const showModal = () => {
    setVisible(true)
  }

  const closeModal = e => {
    setVisible(false);
  }

  const modalHandle = input => {
    setFormState(input)
  }

  return (
    <div>
      <LoginButton type="primary" onClick={showModal}>
        Signup/Login
      </LoginButton>
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
            ? <LoginForm onSwitchForm={modalHandle} />
            : <RegisterForm onSwitchForm={modalHandle} />
        }
      </Modal>
    </div>
  )
}

export default LoginModal
