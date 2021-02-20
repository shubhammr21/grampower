import React, { useEffect } from "react"

function Hero(props) {
  return (
    <section className="section section bg-primary pb-5 overflow-hidden z-2">
      <div className="row justify-content-center text-center pt-6">
        <div className="col-lg-8 col-xl-8">
          <h1 className="display-2 mb-3">
            Neumorphism<span className="presentation-badge bg-primary border border-light shadow-soft font-weight-bolder text-dark">PRO</span>
          </h1>
          <p className="lead px-md-6 mb-5">
            Neumorphism inspired <strong>User Interface Kit</strong> that will help you prototype and design beautiful, creative and modern websites.
          </p>
          <a href="https://themesberg.com" target="_blank" className="d-flex justify-content-center flex-column">
            <img src="../../assets/img/themesberg.svg" height="25" className="mb-3" alt="Themesberg Logo" />
            <span className="text-muted font-small">A Themesberg production</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
