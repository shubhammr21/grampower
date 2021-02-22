import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "../Axios"
import DispatchContext from "../DispatchContext"

function Register() {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password1, setPassword1] = useState()
  const [password2, setPassword2] = useState()

  async function handleSubmit(e) {
    console.log("clicked")
    e.preventDefault()
    try {
      await Axios.post("/account/registration/", { username, email, password1, password2 })
        .then(response => {
          console.log(response.data)
          //   localStorage.setItem("token", response.data.key)
          appDispatch({ type: "login" })
          appDispatch({ type: "flashMessage", value: "You are successfully registered with us!" })
        })
        .catch(error => {
          console.log(error.response)
        })
    } catch (e) {
      console.log("There was a problem.")
    }
  }
  return (
    <>
      <div className="text-center pb-0">
        <span>Register here using your email.</span>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputIcon333">Username</label>
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fas fa-user"></span>
                </span>
              </div>
              <input onChange={e => setUsername(e.target.value)} className="form-control" id="exampleInputIcon333" placeholder="username" type="text" aria-label="Username" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputIcon999">Your email</label>
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </span>
              </div>
              <input onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputIcon999" placeholder="example@company.com" type="email" aria-label="email adress" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleInputPassword345">Password</label>
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-unlock-alt"></span>
                  </span>
                </div>
                <input onChange={e => setPassword1(e.target.value)} className="form-control" id="exampleInputPassword345" placeholder="Password" type="password" aria-label="Password" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleConfirmPassword712">Confirm Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-unlock-alt"></span>
                  </span>
                </div>
                <input onChange={e => setPassword2(e.target.value)} className="form-control" id="exampleConfirmPassword712" placeholder="Confirm password" type="password" aria-label="Password" required />
              </div>
            </div>
          </div>
          <button className="btn btn-block btn-primary">Sign in</button>
        </form>
      </div>
    </>
  )
}

export default Register
