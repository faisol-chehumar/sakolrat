import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import LoginForm from '../LoginForm'

const LoginModal = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        signup/Login
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
      >
        <LoginForm />
      </Modal>
    </div>
  )
}

export default LoginModal
