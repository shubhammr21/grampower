import React, { useEffect, Suspense } from "react"
import { render } from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import FlashMessages from "./components/FlashMessages"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import NotFound from "./components/NotFound"
import LoadingDotsIcon from "./components/LoadingDotsIcon"
import { useImmerReducer } from "use-immer"
import Store from "./pages/Store"
import CreateStore from "./pages/CreateStore"

function Index() {
  const initalState = {
    loggedIn: Boolean(localStorage.getItem("token")),
    flashMessages: [],
    user: {
      userId: localStorage.getItem("userId"),
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token")
    }
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        return
      case "logout":
        draft.loggedIn = false
        return
      case "flashMessage":
        draft.flashMessages.push({ msg: action.value, level: action.level })
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initalState)

  useEffect(() => {
    if (!state.loggedIn) {
      console.log("in logout section")
      localStorage.removeItem("username", state.user.username)
      localStorage.removeItem("email", state.user.email)
      localStorage.removeItem("userId", state.user.pk)
      localStorage.removeItem("token")
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Suspense fallback={<LoadingDotsIcon />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/store/:id" exact>
                <Store />
              </Route>
              <Route path="/create" exact>
                <CreateStore />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

render(<Index />, document.getElementById("app"))
