import React, { useEffect, lazy, Suspense } from "react"
import { render } from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import App from './components/App';
//My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home"
import Footer from "./components/Footer"
// import About from "./components/About"
import Terms from "./components/Terms"
// const Home = lazy(() => import("./components/Home"))
import FlashMessages from "./components/FlashMessages"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import NotFound from "./components/NotFound"
import LoadingDotsIcon from "./components/LoadingDotsIcon"
import Axios from "./Axios"
import { useImmerReducer } from "use-immer"

function Index() {
  const initalState = {
    loggedIn: Boolean(localStorage.getItem("refresh_token")),
    flashMessages: [],
    user: {
      access_token: localStorage.getItem("access_token"),
      refresh_token: localStorage.getItem("refresh_token")
    }
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        login()
        return
      case "logout":
        draft.loggedIn = false
        logout()
        return
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initalState)
  function login() {
    Axios.defaults.headers["Authorization"] = "Bearer " + state.user.access
    localStorage.setItem("access_token", state.user.access)
    localStorage.setItem("refresh_token", state.user.refresh)
  }
  function logout() {
    Axios.post("accounts/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token")
    })
      .then(() => {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        Axios.defaults.headers["Authorization"] = null
      })
      .catch(error => {
        console.log(error.response)
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        Axios.defaults.headers["Authorization"] = null
      })
  }

  /* useEffect(() => {
    if (state.loggedIn) {
      async function fetchResults() {
        try {
          const response = await Axios.post("/checkToken", { token: state.user.token }, { cancelToken: ourRequest.token })
          if (!response.data) {
            dispatch({ type: "logout" })
            dispatch({ type: "flashMessage", value: "Your session has expired" })
          }
        } catch (e) {
          console.log("There was a problem or the request was cancelled.")
        }
      }
      fetchResults()
    }
  }, [state.requestCount])
 */
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Suspense fallback={<LoadingDotsIcon />}>
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
          <Theme />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

render(<Index />, document.getElementById("root"))
