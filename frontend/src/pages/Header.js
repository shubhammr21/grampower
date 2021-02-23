import React, { useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedIn from "../components/HeaderLoggedIn"
import HeaderLoggedOut from "../components/HeaderLoggedOut"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function Header(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  function handlePop(e) {
    e.preventdefault()
    appDispatch({ type: "flashMessage", level: "danger", value: `Please Login to create` })
  }

  return (
    <>
      <header className="header-global">
        <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary">
          <div className="container position-relative">
            <Link to={"/"} className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4">
              <img className="navbar-brand-dark" src="https://grampower.com/static/images/gp-logo.svg" alt="Logo light" />
              <img className="navbar-brand-light" src="https://grampower.com/static/images/gp-logo.svg" alt="Logo dark" />
            </Link>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="./index.html" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                      <img src="https://grampower.com/static/images/gp-logo.svg" alt="Gram Power Logo" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <a href="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item">
                  {appState.loggedIn ? (
                    <Link to={"/create"} className="nav-link disabled-link">
                      <span className="nav-link-inner-text">Create Store</span>
                    </Link>
                  ) : (
                    <span className="nav-link-inner-text">Login to create your store</span>
                  )}
                </li>

                <li className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">
                    <span className="nav-link-inner-text">Support</span>
                    <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg">
                    <div className="col-auto px-0" data-dropdown-content>
                      <div className="list-group list-group-flush">
                        <a href="/docs/api/" className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                          <span className="icon icon-sm icon-secondary">
                            <span className="fas fa-file-alt"></span>
                          </span>
                          <div className="ml-4">
                            <span className="text-dark d-block">
                              Documentation<span className="badge badge-sm badge-secondary ml-2">v1.0</span>
                            </span>
                            <span className="small">Examples and guides</span>
                          </div>
                        </a>
                        <a href="/docs/api/" className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                          <span className="icon icon-sm icon-secondary">
                            <span className="fas fa-file-alt"></span>
                          </span>
                          <div className="ml-4">
                            <span className="text-dark d-block">
                              Documentation<span className="badge badge-sm badge-secondary ml-2">v1.0</span>
                            </span>
                            <span className="small">Examples and guides</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
            <div className="d-flex align-items-center">
              <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
