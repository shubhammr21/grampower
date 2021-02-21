import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Modal } from "react-bootstrap"
import DispatchContext from "../DispatchContext"
import Login from "../pages/Login"
import Register from "../pages/Register"

function HeaderLoggedOut(props) {
  const [loginShow, setLoginShow] = useState(false)
  const handleCloseLogin = () => setLoginShow(false)
  const handleShowLogin = () => setLoginShow(true)

  const [registerShow, setRegisterShow] = useState(false)
  const handleCloseRegister = () => setRegisterShow(false)
  const handleShowRegiseter = () => setRegisterShow(true)

  const appDispatch = useContext(DispatchContext)
  return (
    <>
      <Button onClick={handleShowRegiseter} className="btn btn-primary text-secondary mr-3">
        <i className="fas fa-user-plus mr-2"></i> Register
      </Button>
      <Button onClick={handleShowLogin} className="btn btn-primary text-secondary mr-3">
        <i className="fas fa-sign-in-alt mr-2"></i> Login
      </Button>
      <Modal show={loginShow} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <h2 className="h4">Sign in to our platform</h2>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
      <Modal size="lg" show={registerShow} onHide={handleCloseRegister} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <h2 className="mb-0 h5">Create Account</h2>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default HeaderLoggedOut
