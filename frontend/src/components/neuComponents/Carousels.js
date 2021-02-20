import React, { useEffect } from "react"

function Carousels(props) {
  return (
    <>
      <section className="section @@classes section-lg">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 text-center mb-6">Basic Carousels</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div id="Carousel1" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img src="../../assets/img/carousel/image-1.jpg" className="d-block w-100" alt="slide1" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../assets/img/carousel/image-2.jpg" className="d-block w-100" alt="slide2" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../assets/img/carousel/image-3.jpg" className="d-block w-100" alt="slide3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 text-center mt-5 mb-6">With Controls</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div id="Carousel2" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-1.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-2.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-3.jpg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#Carousel2" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#Carousel2" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 text-center mt-6 mb-5">Indicators & controls</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div id="Carousel3" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#Carousel3" data-slide-to="0" className="active"></li>
                  <li data-target="#Carousel3" data-slide-to="1"></li>
                  <li data-target="#Carousel3" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-1.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-2.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-3.jpg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#Carousel3" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#Carousel3" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 text-center mt-6 mb-5">With captions</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div id="Carousel4" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#Carousel4" data-slide-to="0" className="active"></li>
                  <li data-target="#Carousel4" data-slide-to="1"></li>
                  <li data-target="#Carousel4" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner rounded">
                  <div className="carousel-item overlay-primary active">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-2.jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block text-dark">
                      <h3 className="h5">First Title</h3>
                      <p>Start your development with a Pixel Design System for Bootstrap 4. It is creative and it features many components that can help you create amazing websites.</p>
                    </div>
                  </div>
                  <div className="carousel-item overlay-primary">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-3.jpg" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block text-dark">
                      <h3 className="h5">Second Title</h3>
                      <p>Start your development with a Pixel Design System for Bootstrap 4. It is creative and it features many components that can help you create amazing websites.</p>
                    </div>
                  </div>
                  <div className="carousel-item overlay-primary">
                    <img className="d-block w-100" src="../../assets/img/carousel/image-1.jpg" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block text-dark">
                      <h3 className="h5">Third Title</h3>
                      <p>Start your development with a Pixel Design System for Bootstrap 4. It is creative and it features many components that can help you create amazing websites.</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#Carousel4" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#Carousel4" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carousels
