import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "../Axios"
import DispatchContext from "../DispatchContext"

function Login() {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("/account/login/", { username, password })
        .then(response => {
          const token = response.data.key
          localStorage.setItem("token", response.data.key)
          appDispatch({ type: "login" })
          appDispatch({ type: "flashMessage", level: "success", value: "You are success fully logged in" })
          // async function fetchUserData() {
          //   try {
          //     await Axios.get(`/account/user`, {
          //       headers: {
          //         Authorization: `token ${token}`
          //       }
          //     })
          //       .then(response => {
          //         localStorage.setItem("username", response.data.username)
          //         localStorage.setItem("email", response.data.email)
          //         localStorage.setItem("userId", response.data.pk)
          //         // localStorage.setItem("firstName", response.data.firs_name)
          //         // localStorage.setItem("lastName", response.data.last_name)
          //       })
          //       .catch(err => {
          //         console.log("err.response")
          //         console.log(err.response)
          //       })
          //     // setState(draft => {draft.profileData = response.data})
          //   } catch (e) {
          //     console.log("There was a problem.", e)
          //   }
          // }
          // fetchUserData()
        })
        .catch(error => {
          appDispatch({ type: "flashMessage", level: "danger", value: error.response.data.non_field_errors[0] })
        })
    } catch (e) {
      console.log("There was a problem.")
    }
  }
  return (
    <>
      <div className="text-center pb-0">
        <span>Login here using your username and password</span>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="mt-2">
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword777">Password</label>
              <div className="input-group mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <span className="fas fa-unlock-alt"></span>
                  </span>
                </div>
                <input onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword777" placeholder="Password" type="password" aria-label="Password" required />
              </div>
            </div>
            {/* <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck545" />
                        <label className="form-check-label" htmlFor="defaultCheck545">
                          Remember me
                        </label>
                      </div>
                      <div>
                        <a href="#" className="small text-right">
                          Lost password?
                        </a>
                      </div>
                    </div> */}
          </div>
          <button type="submit" className="btn btn-block btn-primary">
            Sign in
          </button>
        </form>
        {/* <div className="mt-3 mb-4 text-center">
                  <span className="font-weight-normal">or login with</span>
                </div>
                <div className="btn-wrapper my-4 text-center">
                  <button className="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                    <span aria-hidden="true" className="fab fa-facebook-f"></span>
                  </button>
                  <button className="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                    <span aria-hidden="true" className="fab fa-twitter"></span>
                  </button>
                  <button className="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                    <span aria-hidden="true" className="fab fa-github"></span>
                  </button>
                </div> */}
      </div>
    </>
  )
}

export default Login
