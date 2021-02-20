import React, { useEffect } from "react"

function AlertsLarge(props) {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <div className="mt-6 mb-5">
            <span className="h5 text-center">Alerts with additional content</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="alert alert-secondary shadow-soft mb-4 mb-lg-5" role="alert">
            <span className="alert-inner--icon icon-lg">
              <span className="fas fa-exclamation-circle"></span>
            </span>
            <span className="alert-heading">Warning!</span>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
          <div className="alert alert-success shadow-soft mb-4 mb-lg-5" role="alert">
            <span className="alert-inner--icon icon-lg">
              <span className="far fa-thumbs-up"></span>
            </span>
            <span className="alert-heading">Well done!</span>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
          <div className="alert alert-info shadow-soft mb-4 mb-lg-5" role="alert">
            <span className="alert-inner--icon icon-lg">
              <span className="far fa-bell"></span>
            </span>
            <span className="alert-heading">Heads up!</span>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
          <div className="alert alert-danger shadow-soft mb-4 mb-lg-5" role="alert">
            <span className="alert-inner--icon icon-lg">
              <span className="fas fa-fire"></span>
            </span>
            <span className="alert-heading">Danger!</span>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlertsLarge
