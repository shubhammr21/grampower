import React, { useEffect } from "react"

function Alerts(props) {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <div className="mb-5">
            <span className="h5 text-center">Dismissible Alerts with Icons</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="alert alert-secondary alert-dismissible shadow-soft fade show" role="alert">
            <span className="alert-inner--icon">
              <span className="fas fa-exclamation-circle"></span>
            </span>
            <span className="alert-inner--text">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </span>
            <button type="button" className="close text-dark" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="alert alert-success alert-dismissible shadow-soft fade show" role="alert">
            <span className="alert-inner--icon">
              <span className="far fa-thumbs-up"></span>
            </span>
            <span className="alert-inner--text">
              <strong>Well done!</strong> You successfully read this important alert message.
            </span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="alert alert-info alert-dismissible shadow-soft fade show" role="alert">
            <span className="alert-inner--icon">
              <span className="far fa-bell"></span>
            </span>
            <span className="alert-inner--text">
              <strong>Heads up!</strong>This alert needs your attention, but it's not super important.
            </span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="alert alert-danger alert-dismissible shadow-soft fade show" role="alert">
            <span className="alert-inner--icon">
              <span className="fas fa-fire"></span>
            </span>
            <span className="alert-inner--text">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alerts
