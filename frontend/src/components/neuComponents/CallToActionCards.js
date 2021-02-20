import React, { useEffect } from "react"

function CallToActionCards(props) {
  return (
    <>
      <div className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 mb-7">Call to Action Cards</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="card bg-primary shadow-soft border-light mb-6">
                <div className="card-body px-5 py-5 text-center text-md-left">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h2 className="mb-3">Get in touch</h2>
                      <p className="mb-0">If you need any help with our products or services, choose one of the following ways to contact us.</p>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                      <a href="#" className="btn btn-primary">
                        <span className="mr-1">
                          <span className="fas fa-headphones"></span>
                        </span>
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-10">
              <div className="card bg-primary shadow-soft border-light px-4 py-1 mb-6">
                <div className="card-body text-center text-md-left">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h2 className="mb-3">Become one of us</h2>
                      <p className="mb-4">Do you want to join our team and work remotely from anywhere you'd like? We can’t wait to hear from you!</p>
                      <a href="#" className="btn btn-primary">
                        <span className="mr-1">
                          <span className="fas fa-file-invoice"></span>
                        </span>
                        Check Careers
                      </a>
                    </div>
                    <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                      <img src="../../assets/img/illustrations/reading-side.svg" alt="illustration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card bg-primary shadow-soft border-light px-4 py-5 text-center mb-5">
                <div className="card-header pb-0">
                  <h2 className="h1 mb-3">Ready to change your life?</h2>
                </div>
                <div className="card-body pt-2 px-0 px-lg-7">
                  <p className="mb-5 lead">Download Rocket today and take the first step to organize your routine, achieve your personal goals and reflect on your life.</p>
                  <a className="btn btn-lg btn-primary mr-md-3 mb-3 mb-sm-0" href="#">
                    <div className="d-flex align-items-center">
                      <span className="icon icon-lg mr-3">
                        <span className="fab fa-apple"></span>
                      </span>
                      <div className="d-block text-left">
                        <small className="font-small">Download on the</small>
                        <div className="h5 mb-0">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a className="btn btn-lg btn-primary" href="#">
                    <div className="d-flex align-items-center">
                      <span className="icon icon-lg mr-3">
                        <span className="fab fa-google-play"></span>
                      </span>
                      <div className="d-block text-left">
                        <small className="font-small">Download on the</small>
                        <div className="h5 mb-0">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card bg-primary shadow-soft border-light px-4 py-5">
                <div className="card-header pb-0 text-center">
                  <h2 className="h1 mb-3">Get the most out of your network.</h2>
                  <p className="mb-5 lead">Contact management designed for teams and individuals</p>
                </div>
                <div className="card-body pt-2 px-0 px-lg-7">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                      <div className="form-group">
                        <label className="h6 font-weight-light text-gray" htmlFor="subscribeInputEmail">
                          Email address
                        </label>
                        <div className="d-flex flex-row justify-content-center">
                          <div className="input-group">
                            <input className="form-control form-control-xl border-light" id="subscribeInputEmail" placeholder="example@company.com" type="email" />
                            <div className="input-group-prepend">
                              <button type="submit" className="btn btn-primary rounded-right">
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CallToActionCards
