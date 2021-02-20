import React, { useEffect } from "react"

function Hero(props) {
  return (
    <div className="section  bg-primary section-lg">
      <div className="row">
        <div className="col text-center">
          <div className="my-5">
            <span className="h5 text-center">Accordion with icons</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="accordion shadow-soft rounded">
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a href="#panel-4" data-target="#panel-4" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                <span className="icon-title h6 mb-0 font-weight-bold">
                  <span className="fab fa-leanpub"></span>Our Company
                </span>
                <span className="icon">
                  <span className="fas fa-plus"></span>
                </span>
              </a>
              <div className="collapse" id="panel-4">
                <div className="pt-3">
                  <p className="mb-0">At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a href="#panel-5" data-target="#panel-5" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                <span className="icon-title h6 mb-0 font-weight-bold">
                  <span className="fas fa-box-open"></span>Pixel Components
                </span>
                <span className="icon">
                  <span className="fas fa-plus"></span>
                </span>
              </a>
              <div className="collapse" id="panel-5">
                <div className="pt-3">
                  <p className="mb-0">At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a href="#panel-6" data-target="#panel-6" className="accordion-panel-header" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="panel-1">
                <span className="icon-title h6 mb-0 font-weight-bold">
                  <span className="fas fa-donate"></span>Licenses
                </span>
                <span className="icon">
                  <span className="fas fa-plus"></span>
                </span>
              </a>
              <div className="collapse" id="panel-6">
                <div className="pt-3">
                  <p className="mb-0">At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
