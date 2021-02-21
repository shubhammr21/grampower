import React, { useContext } from "react"
import Axios from "../Axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function HeaderLoggedIn() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  async function handleLogout() {
    await Axios.post("/account/logout/", {
      headers: {
        Authorization: `token ${appState.user.token}`
      }
    })
      .then(response => {
        appDispatch({ type: "logout" })
        appDispatch({ type: "flashMessage", level: "success", value: response.data.detail })
      })
      .catch(err => {
        appDispatch({ type: "flashMessage", level: "danger", value: err.response.data.detail })
      })
  }
  return (
    <>
      <div className="nav-wrapper position-relative">
        <p className="nav-link-inner-text text-dark mb-0 mx-3">
          Welcome <span className="font-weight-bold">{appState.user.username}</span>
        </p>
      </div>
      <button onClick={handleLogout} className="btn btn-primary text-secondary mr-3">
        <i className="far fa-paper-plane mr-2"></i> Sign Out
      </button>
    </>
  )
}

export default HeaderLoggedIn
