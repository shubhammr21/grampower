import React, { useEffect } from "react"

function Badges(props) {
  return (
    <>
      <div className="section @@classNamees section-lg">
        <div className="container">
          <div className="row mb-6">
            <div className="col-lg-6">
              <div className="mb-4">
                <span className="h6">Badges</span>
              </div>
              <span className="badge badge-dark text-uppercase">Dark</span>
              <span className="badge badge-secondary text-uppercase">Secondary</span>
              <span className="badge badge-success text-uppercase">Success</span>
              <span className="badge badge-danger text-uppercase">Danger</span>
              <span className="badge badge-info text-uppercase">Info</span>
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <span className="h6">Link Badges</span>
              </div>
              <a href="#" className="badge badge-dark">
                Dark
              </a>
              <a href="#" className="badge badge-secondary">
                Secondary
              </a>
              <a href="#" className="badge badge-success">
                Success
              </a>
              <a href="#" className="badge badge-danger">
                Danger
              </a>
              <a href="#" className="badge badge-info">
                Info
              </a>
            </div>
          </div>
          <div className="row mb-6">
            <div className="col-lg-6">
              <div className="mb-4">
                <span>Notification Badges</span>
              </div>
              <button type="button" className="btn btn-primary">
                Notifications <span className="badge badge-pill badge-success">5</span>
                <span className="sr-only">unread messages</span>
              </button>
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <span>Choose your size</span>
              </div>
              <span className="badge badge-success text-uppercase">Badge</span>
              <span className="badge badge-md badge-success text-uppercase">Badge md</span>
              <span className="badge badge-lg badge-success text-uppercase">Badge lg</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Badges
