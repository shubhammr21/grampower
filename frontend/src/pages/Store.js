import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Axios from "../Axios"
import LoadingDotsIcon from "../components/LoadingDotsIcon"
import Page from "../components/Page"
import DispatchContext from "../DispatchContext"

function Store(props) {
  const appDispatch = useContext(DispatchContext)
  const [isLoading, setIsLoading] = useState(true)
  const [store, setStore] = useState()
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        await Axios.get(`/api/store/${id}/`)
          .then(response => {
            setStore(response.data)
            setIsLoading(false)
          })
          .catch(err => {
            console.log(err.response.data)
            appDispatch({ type: "flashMessage", level: "danger", value: `${err.response.data.detail}` })
          })
      } catch (e) {
        console.log("There was a problem")
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <Page>
        <LoadingDotsIcon />
      </Page>
    )
  }

  return (
    <>
      <Page title={store.name}>
        {/* style={{ backgroundImage: `url(${store.cover})` }} */}
        <div className="card bg-primary border-light shadow-soft mb-5">
          <div className="card-header p-3">
            <img src={store.cover} className="card-img-top rounded" alt={store.name} />
          </div>
          <div className="card-body pt-2">
            <div className="media d-flex align-items-center justify-content-between">
              <div className="post-group">
                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                  <i className="far fa-user"></i> {store.owner_name}
                </a>
              </div>
              <div className="d-flex align-items-center">
                <span className="small">
                  <span className="far fa-calendar-alt mr-2"></span>
                  {store.timestamp}
                </span>
              </div>
            </div>
            <h3 className="h5 card-title mt-4">{store.name}</h3>
            <p className="card-text">{store.about}</p>
          </div>
        </div>
        <div className="card bg-primary shadow-inset border-light mb-5 ">
          <div className="card-body p-5">
            <h3 className="h4 card-title mb-3">Photo Gallery</h3>
            <div className="d-flex align-items-center scrolling-wrapper">
              <div className="row photos"></div>
              {store.photos.map(photo => {
                return (
                  <div key={photo.id} className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href={photo.image.full_size} data-lightbox="photos">
                      <img className="img-fluid" src={photo.image.thumbnail} />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="card bg-primary shadow-inset border-light mb-5">
          <div className="card-body p-5">
            <h3 className="h4 card-title mb-3">Product Range</h3>
            <div className="d-flex align-items-center">
              <div className="row justify-content-start">
                {store.products.map((product, index) => {
                  return (
                    <div key={index} className="mb-2">
                      <span className="badge badge-lg badge-secondary text-uppercase mx-1">{product.name} &nbsp;</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-primary shadow-inset border-light">
          <div className="card-body p-5">
            <h3 className="h4 card-title mb-3">Store hours</h3>
            <div className="d-flex align-items-center">
              <table className="table table-striped">
                <tr>
                  <th className="border-0" scope="col">
                    Day
                  </th>
                  <th className="border-0" scope="col">
                    Open Time
                  </th>
                  <th className="border-0" scope="col">
                    Close Time
                  </th>
                </tr>
                {store.store_hour.map(time => {
                  return (
                    <tr key={time.id}>
                      <th scope="row">{time.day}</th>
                      <td>{time.open_time}</td>
                      <td>{time.close_time}</td>
                    </tr>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Store
