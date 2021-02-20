import React, { useEffect } from "react"

function Buttons(props) {
  return (
    <>
      <div className="section section-lg @@classes components-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="mb-3">
                <h2 className="h5">Main Buttons</h2>
              </div>
              <button className="btn btn-primary" type="button">
                Button
              </button>
              <button className="btn btn-primary" type="button">
                <span className="mr-1">
                  <span className="fas fa-book-open"></span>
                </span>
                Icon Left
              </button>
              <button className="btn btn-primary" type="button">
                Icon Right
                <span className="ml-1">
                  <span className="fas fa-book-open"></span>
                </span>
              </button>
              <button className="btn btn-icon-only btn-primary" type="button" aria-label="love button" title="love button">
                <span aria-hidden="true" className="far fa-heart"></span>
              </button>
              <div className="mb-3 mt-5">
                <h3 className="h5">Round Main Buttons</h3>
              </div>
              <button className="btn btn-pill btn-primary" type="button">
                Button
              </button>
              <button className="btn btn-pill btn-primary" type="button">
                <span className="mr-1">
                  <span className="fas fa-cog"></span>
                </span>
                Icon Left
              </button>
              <button className="btn btn-pill btn-primary" type="button">
                Icon Right
                <span className="ml-1">
                  <span className="fas fa-cog"></span>
                </span>
              </button>
              <button className="btn btn-icon-only btn-pill btn-primary" type="button" aria-label="up button" title="up button">
                <span aria-hidden="true" className="far fa-thumbs-up"></span>
              </button>
              <div className="mb-3 mt-5">
                <h3 className="h5">Animated Buttons</h3>
              </div>
              <button className="btn btn-primary animate-up-2" type="button">
                Animate up
              </button>
              <button className="btn btn-primary animate-right-3" type="button">
                Animate right
              </button>
              <button className="btn btn-primary animate-down-2" type="button">
                Animate down
              </button>
              <button className="btn btn-primary animate-left-3" type="button">
                Animate left
              </button>
              <div className="mb-3 mt-5">
                <h3 className="h5">Loading Buttons</h3>
              </div>
              <button className="btn btn-primary mr-3" type="button">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
              </button>
              <button className="btn btn-primary" type="button">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="ml-1">Loading...</span>
              </button>
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
              </button>
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="ml-1">Loading...</span>
              </button>
              <button className="btn btn-secondary" type="button" disabled>
                <span className="ml-1">Loading...</span>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </button>
              <div className="mb-3 mt-5">
                <h3 className="h5 font-weight-bold mb-3">Dropdown buttons</h3>
                <div className="dropdown">
                  <div className="btn-group mr-2 mb-2">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="fas fa-angle-down dropdown-arrow"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-2 mr-2">
                    <button type="button" className="btn btn-tertiary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="fas fa-angle-down dropdown-arrow"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mt-5">
                  <h3 className="h5">Link Buttons</h3>
                </div>
                <a href="#" className="text-dark font-weight-bold mr-3">
                  Primary
                </a>
                <a href="#" className="text-dark font-weight-bold mr-3">
                  <span className="mr-1">
                    <span className="fas fa-link"></span>
                  </span>
                  Icon Left
                </a>
                <a href="#" className="text-dark font-weight-bold">
                  Icon Right
                  <span className="ml-1">
                    <span className="fas fa-link"></span>
                  </span>
                </a>
                <div className="mb-3 mt-5">
                  <h3 className="h5">Sizes</h3>
                </div>
                <button className="btn btn-sm btn-primary" type="button">
                  Small
                </button>
                <button className="btn btn-primary" type="button">
                  Regular
                </button>
                <button className="btn btn-lg btn-primary" type="button">
                  Large Button
                </button>
                <div className="mb-4 mt-5">
                  <h3 className="h5">Choose your color</h3>
                </div>
                <button className="btn btn-primary text-dark" type="button">
                  Dark
                </button>
                <button className="btn btn-primary text-secondary" type="button">
                  Secondary
                </button>
                <button className="btn btn-primary text-info" type="button">
                  Info
                </button>
                <button className="btn btn-primary text-success" type="button">
                  Success
                </button>
                <button className="btn btn-primary text-danger" type="button">
                  Danger
                </button>
                <button className="btn btn-primary text-dark" type="button">
                  Dark
                </button>
                <button className="btn btn-primary text-gray" type="button">
                  Gray
                </button>
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">Links</small>
                </div>
                <a href="#" className="text-default mr-3">
                  Default
                </a>
                <a href="#" className="text-secondary mr-3">
                  Secondary
                </a>
                <a href="#" className="text-tertiary mr-3">
                  Tertiary
                </a>
                <a href="#" className="text-info mr-3">
                  Info
                </a>
                <a href="#" className="text-success mr-3">
                  Success
                </a>
                <a href="#" className="text-danger mr-3">
                  Danger
                </a>
                <a href="#" className="text-dark mr-3">
                  Dark
                </a>
                <a href="#" className="text-gray">
                  Gray
                </a>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="mb-4 mt-5">
                    <h3 className="h5 font-weight-bold">Social Buttons</h3>
                  </div>
                  <button className="btn btn-facebook" type="button">
                    <span className="mr-1">
                      <span className="fab fa-facebook-f"></span>
                    </span>
                    Login with Facebook
                  </button>
                  <br />
                  <button className="btn btn-pinterest" type="button">
                    <span className="mr-1">
                      <span className="fab fa-pinterest-p"></span>
                    </span>
                    Share on Pinterest
                  </button>
                  <br />
                  <button className="btn btn-github" type="button">
                    <span className="mr-1">
                      <span className="fab fa-github-alt"></span>
                    </span>
                    Login with GitHub
                  </button>
                  <br />
                  <button className="btn btn-twitch" type="button">
                    <span className="mr-1">
                      <span className="fab fa-twitch"></span>
                    </span>
                    Subscribe Now
                  </button>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mb-4 mt-5">
                    <h3 className="h5 font-weight-bold">Round Social Buttons</h3>
                  </div>
                  <button className="btn btn-pill btn-facebook" type="button">
                    <span className="mr-1">
                      <span className="fab fa-facebook-f"></span>
                    </span>
                    Login with Facebook
                  </button>
                  <br />
                  <button className="btn btn-pill btn-pinterest" type="button">
                    <span className="mr-1">
                      <span className="fab fa-pinterest-p"></span>
                    </span>
                    Share on Pinterest
                  </button>
                  <br />
                  <button className="btn btn-pill btn-github" type="button">
                    <span className="mr-1">
                      <span className="fab fa-github-alt"></span>
                    </span>
                    Login with GitHub
                  </button>
                  <br />
                  <button className="btn btn-pill btn-twitch" type="button">
                    <span className="mr-1">
                      <span className="fab fa-twitch"></span>
                    </span>
                    Subscribe Now
                  </button>
                </div>
                <div className="col-lg-1 col-md-3">
                  <div className="mb-4 mt-5">
                    <h3 className="h5">Square</h3>
                  </div>
                  <button className="btn btn-icon-only btn-facebook" type="button" aria-label="facebook button" title="facebook button">
                    <span aria-hidden="true" className="fab fa-facebook"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pinterest" type="button" aria-label="pinterest button" title="pinterest button">
                    <span aria-hidden="true" className="fab fa-pinterest-p"></span>
                  </button>
                  <button className="btn btn-icon-only btn-youtube" type="button" aria-label="youtube button" title="youtube button">
                    <span aria-hidden="true" className="fab fa-youtube"></span>
                  </button>
                  <button className="btn btn-icon-only btn-github" type="button" aria-label="github button" title="github button">
                    <span aria-hidden="true" className="fab fa-github-alt"></span>
                  </button>
                  <button className="btn btn-icon-only btn-twitch" type="button" aria-label="twitch button" title="twitch button">
                    <span aria-hidden="true" className="fab fa-twitch"></span>
                  </button>
                  <button className="btn btn-icon-only btn-paypal" type="button" aria-label="paypal button" title="paypal button">
                    <span aria-hidden="true" className="fab fa-paypal"></span>
                  </button>
                  <button className="btn btn-icon-only btn-behance" type="button" aria-label="behance button" title="behance button">
                    <span aria-hidden="true" className="fab fa-behance"></span>
                  </button>
                </div>
                <div className="col-lg-1 col-md-2">
                  <div className="mb-4 mt-5">
                    <h3 className="h5">Circle</h3>
                  </div>
                  <button className="btn btn-icon-only btn-pill btn-facebook" type="button" aria-label="facebook button" title="facebook button">
                    <span aria-hidden="true" className="fab fa-facebook"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pill btn-pinterest" type="button" aria-label="pinterest button" title="pinterest button">
                    <span aria-hidden="true" className="fab fa-pinterest-p"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pill btn-youtube" type="button" aria-label="youtube button" title="youtube button">
                    <span aria-hidden="true" className="fab fa-youtube"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pill btn-github" type="button" aria-label="github button" title="github button">
                    <span aria-hidden="true" className="fab fa-github-alt"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pill btn-twitch" type="button" aria-label="twitch button" title="twitch button">
                    <span aria-hidden="true" className="fab fa-twitch"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pill btn-paypal" type="button" aria-label="paypal button" title="paypal button">
                    <span aria-hidden="true" className="fab fa-paypal"></span>
                  </button>
                  <button className="btn btn-icon-only btn-pill btn-behance" type="button" aria-label="behance button" title="behance button">
                    <span aria-hidden="true" className="fab fa-behance"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buttons
