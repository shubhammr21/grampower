import React, { useState, useReducer, useEffect, lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import Axios from "axios"
Axios.defaults.baseURL = process.env.BACKENDURL || "https://blogappbackend.herokuapp.com"

//My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
const Home = lazy(() => import("./components/Home"))
// import Home from "./components/Home"
const CreatePost = lazy(() => import("./components/CreatePost"))
// import CreatePost from "./components/CreatePost"
const ViewSinglePost = lazy(() => import("./components/ViewSinglePost"))
// import ViewSinglePost from "./components/ViewSinglePost"
import FlashMessages from "./components/FlashMessages"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import Profile from "./components/Profile"
import EditPost from "./components/EditPost"
import NotFound from "./components/NotFound"
import Search from "./components/Search"
const Chat = lazy(() => import("./components/Chat"))
// import Chat from "./components/Chat"
import LoadingDotsIcon from "./components/LoadingDotsIcon"

function Main() {
  const initalState = {
    loggedIn: Boolean(.getItem("appToken")),
    flashMessages: [],
    user: {
      token: .getItem("appToken"),
      username: .getItem("appUsername"),
      avatar: .getItem("appAvatar")
    },
    isSearchOpen: false,
    isChatOpen: false,
    unReadChatCount: 0
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      // return { loggedIn: true, flashMessages: state.flashMessages }
      case "logout":
        draft.loggedIn = false
        return
      // return { loggedIn: false, flashMessages: state.flashMessages }
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
      // return { loggedIn: state.loggedIn, flashMessages: state.flashMessages.concat(action.value) }
      case "openSearch":
        draft.isSearchOpen = true
        return
      case "closeSearch":
        draft.isSearchOpen = false
        return
      case "toggleChat":
        draft.isChatOpen = !draft.isChatOpen
        return
      case "closeChat":
        draft.isChatOpen = false
        return
      case "increamentUnreadChatCount":
        draft.unReadChatCount++
        return
      case "clearUnreadChatCount":
        draft.unReadChatCount = 0
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initalState)

  useEffect(() => {
    if (state.loggedIn) {
      .setItem("appToken", state.user.token)
      .setItem("appUsername", state.user.username)
      .setItem("appAvatar", state.user.avatar)
    } else {
      .removeItem("appToken")
      .removeItem("appUsername")
      .removeItem("appAvatar")
    }
  }, [state.loggedIn])

  // const [loggedIn, setLoggedIn] = useState(Boolean(.getItem("appToken")))
  // const [flashMessages, setFlashMessages] = useState([])

  // function addFlashMessage(msg) {
  //   setFlashMessages(prev => prev.concat(msg))
  // }
  //Check if token expire or not on first render
  useEffect(() => {
    if (state.loggedIn) {
      const ourRequest = Axios.CancelToken.source()
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
      return () => ourRequest.cancel()
    }
  }, [state.requestCount])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Suspense fallback={<LoadingDotsIcon />}>
            <Switch>
              <Route path="/profile/:username">
                <Profile />
              </Route>
              <Route path="/" exact>
                {state.loggedIn ? <Home /> : <HomeGuest />}
              </Route>
              <Route path="/create-post" exact>
                <CreatePost />
              </Route>
              <Route path="/post/:id" exact>
                <ViewSinglePost />
              </Route>
              <Route path="/post/:id/edit" exact>
                <EditPost />
              </Route>
              <Route path="/about-us" exact>
                <About />
              </Route>
              <Route path="/terms" exact>
                <Terms />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
          <CSSTransition timeout={330} in={state.isSearchOpen} classNames="search-overlay" unmountOnExit>
            <div className="search-overlay">
              <Suspense fallback="">
                <Search />
              </Suspense>
            </div>
          </CSSTransition>
          <Suspense fallback="">{state.loggedIn && <Chat />}</Suspense>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
