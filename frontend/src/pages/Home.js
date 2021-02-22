import React, { useCallback, useRef, useState } from "react"
import Page from "../components/Page"
import { Map, GoogleApiWrapper } from "google-maps-react"
import LoadingDotsIcon from "../components/LoadingDotsIcon"
import FetchStore from "../components/FetchStore"
import { Link } from "react-router-dom"

function Home() {
  const [pageNumber, setPageNumber] = useState(1)
  const observer = useRef()

  const { isLoading, error, stores, hasMore } = FetchStore(pageNumber)

  const lastStoreRef = useCallback(node => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prePageNumber => prePageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  })

  return (
    <>
      <Page title="Home">
        <h1 className="display-2 mb-3">Available Stores</h1>
        <div className="row">
          {stores.map((store, index) => {
            if (stores.length === index + 1) {
              return (
                <div ref={lastStoreRef} key={store.id} className="col-12 col-md-6 col-lg-4 mb-5">
                  <div className="card bg-primary border-light shadow-soft">
                    <img src={store.cover} className="card-img-top rounded-top" alt="Themesberg office" />
                    <div className="card-body">
                      <span className="h6 icon-tertiary small">
                        <span className="fas fa-user mr-2"></span>
                        {store.owner_name}
                      </span>
                      <h3 className="h5 card-title mt-3">{store.name}</h3>
                      <p className="card-text truncate-overflow">{store.about}</p>
                      <Link to={`/store/${store.id}/`} className="btn btn-primary btn-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div ref={lastStoreRef} key={store.id} className="col-12 col-md-6 col-lg-4 mb-5">
                  <div className="card bg-primary border-light shadow-soft">
                    <img src={store.cover} className="card-img-top rounded-top" alt="Themesberg office" />
                    <div className="card-body">
                      <span className="h6 icon-tertiary small">
                        <span className="fas fa-user mr-2"></span>
                        {store.owner_name}
                      </span>
                      <h3 className="h5 card-title mt-3">{store.name}</h3>
                      <p className="card-text truncate-overflow">{store.about}</p>
                      <Link to={`/store/${store.id}/`} className="btn btn-primary btn-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
          })}
          {isLoading && <LoadingDotsIcon />}
        </div>

        <div className="row justify-content-center text-center pt-6">
          <div className="col-lg-8 col-xl-8">{/* <Map google={props.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176 }} /> */}</div>
        </div>
      </Page>
    </>
  )
}

export default Home
