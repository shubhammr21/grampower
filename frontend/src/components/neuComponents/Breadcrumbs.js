import React, { useEffect } from "react"

function Breadcrumbs(props) {
  return (
    <>
      <section className="section @@classes section-lg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="h5 mb-6">Inset Shadow</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-gray">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-success ">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-info">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-danger">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="h5 mt-6 mb-5">Transparent background</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-gray breadcrumb-transparent">
                  <li className="breadcrumb-item active" aria-current="page">
                    Home
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-gray breadcrumb-transparent">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-gray breadcrumb-transparent">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Breadcrumbs
