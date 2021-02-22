import React, { useContext, useEffect, useState } from "react"
import Page from "../components/Page"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"

function CreateStore(props) {
  const [name, setName] = useState("")
  const [cover, setCover] = useState(null)
  const [about, setAbout] = useState("")
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  async function handleSubmit(e) {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("file", cover)
    formData.append("about", about)
    e.preventDefault()
    try {
      await Axios.post("/store/create/", formData, {
        headers: {
          Authorization: `token ${appState.user.token}`
        }
      })
        .then(response => {
          console.log(response)
          appDispatch({ type: "flashMessage", value: "Cograts, you created a new post." })
          // props.history.push(`/store/${response.data}`)
        })
        .catch(err => {
          console.log(err)
          console.log(err.response.data)
        })
      //Redirect to new post URL
    } catch (e) {
      console.log("There was a problem.")
    }
  }
  return (
    <Page title="Create Store">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="text-muted mb-1">
            <small>Name</small>
          </label>
          <input onChange={e => setName(e.target.value)} autoFocus name="name" id="name" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>

        <div className="custom-file">
          <input onChange={e => setCover(e.target.files[0])} type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label" htmlFor="customFile">
            Choose cover
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="about" className="text-muted mb-1">
            <small>About</small>
          </label>
          <textarea onChange={e => setAbout(e.target.value)} autoFocus name="about" id="about" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off"></textarea>
        </div>

        <button className="btn btn-primary">Save New Store</button>
      </form>
    </Page>
  )
}

export default CreateStore