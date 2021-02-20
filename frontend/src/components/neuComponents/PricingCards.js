import React, { useEffect } from "react"

function PricingCards(props) {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2 className="h5 mb-7">Pricing Cards</h2>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="card bg-primary shadow-soft border-light text-center py-4">
            <div className="card-header p-3">
              <h3 className="text-gray mb-4">Basic</h3>
              <span className="d-block">
                <span className="display-1 font-weight-bold">
                  <span className="align-top font-medium">$</span>19
                </span>
                <span className="d-block text-gray font-small">/ month</span>
              </span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-4">
                <li className="list-item pb-3">
                  <strong>1</strong> free domain
                </li>
                <li className="list-item pb-3">
                  Storage space: <strong>5GB</strong>
                </li>
                <li className="list-item pb-3">
                  <strong>100k</strong> monthly visitors
                </li>
                <li className="list-item pb-3">One-click staging site</li>
                <li className="list-item pb-3">Search engine wizard </li>
                <li className="list-item pb-3">Community support</li>
              </ul>
              <button type="button" className="btn btn-primary btn-block">
                Start Starter
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="card bg-primary shadow-soft border-light p-4">
            <div className="card-header border-bottom text-center">
              <span className="d-block">
                <span className="display-1 font-weight-bold">
                  <span className="align-top font-medium">$</span>19
                </span>
                <span className="text-gray font-small">/ month</span>
              </span>
            </div>
            <div className="card-body">
              <p>Faster sites deliver better business results for your clients.</p>
              <ul className="list-unstyled mb-4">
                <li className="list-item pb-2">
                  <strong>Full Support</strong> No
                </li>
                <li className="list-item pb-2">
                  <strong>Storage</strong> 50 GB
                </li>
                <li className="list-item">
                  <strong>Monthly Visitors</strong> 400k
                </li>
              </ul>
              <button type="button" className="btn btn-primary btn-block">
                <span className="fas fa-cart-plus mr-3"></span>Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="card bg-primary shadow-inset border-light p-3">
            <div className="card-header shadow-soft border border-light rounded p-3 mb-3">
              <span className="icon mb-4">
                <span className="far fa-star"></span>
              </span>
              <span className="d-block">
                <span className="display-1 font-weight-bold">
                  19<span className="align-baseline font-medium">$</span>
                </span>
                <span className="font-small">/ month</span>
              </span>
            </div>
            <div className="card-body shadow-soft border border-light rounded p-2 mb-3">
              <ul className="list-group list-group-flush price-list mb-4">
                <li className="list-group-item border-primary pb-1">
                  <span className="fas fa-headset"></span>Community support
                </li>
                <li className="list-group-item border-primary pb-1">
                  <span className="far fa-hdd"></span>15 GB SSD storage
                </li>
                <li className="list-group-item border-primary pb-1">
                  <span className="far fa-paper-plane"></span>One-click staging site
                </li>
                <li className="list-group-item border-primary pb-1">
                  <span className="far fa-envelope"></span>10 E-mail accounts
                </li>
                <li className="list-group-item border-0">
                  <span className="fas fa-users"></span>Team size: 1-5 developers
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <div className="card bg-primary shadow-soft border-light">
            <div className="row no-gutters align-items-center">
              <div className="col-sm-5">
                <div className="card-header text-center pb-0">
                  <h3 className="mb-0">Basic</h3>
                  <span className="d-block my-3">
                    <span className="display-2 font-weight-bold">
                      <span className="align-baseline font-medium">$</span>19
                    </span>
                  </span>
                  <button type="button" className="btn btn-sm btn-primary btn-block">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="card-body pb-0">
                  <ul className="list-group list-group-flush price-list mb-4">
                    <li className="list-group-item border-primary pb-1">
                      <span className="fas fa-headset"></span>Community support
                    </li>
                    <li className="list-group-item border-primary pb-1">
                      <span className="far fa-hdd"></span>15 GB SSD storage
                    </li>
                    <li className="list-group-item border-primary pb-1">
                      <span className="far fa-paper-plane"></span>One-click staging site
                    </li>
                    <li className="list-group-item border-primary pb-1">
                      <span className="far fa-envelope"></span>10 E-mail accounts
                    </li>
                    <li className="list-group-item border-0">
                      <span className="fas fa-users"></span>Team size: 1-5 developers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card bg-primary shadow-inset border-light p-3">
            <div className="card-body shadow-soft border border-light rounded p-4">
              <h4 className="mb-3">Regular</h4>
              <div className="d-flex mb-3">
                <span className="h5 mb-0">$</span>
                <span className="price display-2 text-dark mb-0">199</span>
              </div>
              <p className="mb-4">So, get Website Backup and stop worrying about data loss. Get back to doing what you do best – running your business and making money.</p>
              <button type="button" className="btn btn-primary btn-block rounded-bottom">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingCards
