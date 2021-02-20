import React, { useEffect } from "react"

function BlogCards(props) {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2 className="h5 mb-6">Blog Cards</h2>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-md-10 mb-5">
          <div className="card bg-primary shadow-soft border-light p-2 p-md-3">
            <div className="card-header rounded pb-0">
              <div className="post-meta mb-4">
                <div className="media d-flex align-items-center justify-content-between">
                  <div className="post-group">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="23k followers" data-original-title="23k followers">
                      <img className="avatar-sm mr-2 img-fluid rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Jose portrait" /> posted by Jose Leos
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="btn-group">
                      <button className="btn btn-link border-0 dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon icon-sm">
                          <span className="fas fa-ellipsis-h icon-secondary"></span>
                        </span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="fas fa-edit mr-2"></span>
                          Edit post
                        </a>
                        <a className="dropdown-item text-danger" href="#">
                          <span className="fa fa-trash mr-2" aria-hidden="true"></span>
                          Delete post
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src="../../assets/img/blog/blog-article-1.jpg" className="card-img-top rounded" alt="Webdeveloper desk" />
            </div>
            <div className="card-body py-4">
              <a href="#">
                <h3 className="h4 my-4">List of public corporations</h3>
              </a>
              <p className="card-text mb-4">All of the world's 10 largest companies as measured by market capitalization are American. Market capitalization is the total value of a company's entire purchased shares of stock...</p>
            </div>
            <div className="card-footer pt-0">
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
                <div className="post-details mb-3 mb-lg-0">
                  <button className="btn btn-sm btn-primary animate-hover mr-2">
                    <span className="fas fa-arrow-up mr-2 animate-up-2"></span>4
                  </button>
                  <button className="btn btn-sm btn-primary text-danger animate-hover">
                    <span className="fas fa-arrow-down mr-2 animate-down-2"></span>1
                  </button>
                </div>
                <div className="post-meta">
                  <a className="text-dark mr-3" href="#">
                    <span className="far fa-comments mr-2"></span>33.7k
                  </a>
                  <button className="btn mr-3 btn-link text-black border-0">
                    <span className="fas fa-share mr-2"></span>Share
                  </button>
                  <button className="btn btn-primary">
                    <span className="far fa-save mr-2"></span>Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 mb-5">
          <div className="card bg-primary shadow-soft border-light">
            <div className="row no-gutters align-items-center">
              <div className="col-md-4">
                <img src="../../assets/img/blog/blog-article-5.jpg" className="card-img rounded-left" alt="Artist desk" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <a href="#">
                    <h3 className="h5 card-title">We partnered up with Google</h3>
                  </a>
                  <p className="card-text mb-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="card-text small">
                      <span className="far fa-calendar-alt mr-2"></span>15 March 2020
                    </span>
                    <a href="#" className="small">
                      <span className="far fa-comments mr-2"></span>21
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-10 mb-5">
          <div className="card bg-primary shadow-inset border-light">
            <div className="card-body p-5">
              <h3 className="h4 card-title mb-3">We partnered up with Google</h3>
              <span className="card-text small">
                <span className="far fa-calendar-alt mr-2"></span>15 March 2020
              </span>
              <p className="card-text mt-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary btn-sm mr-3">
                  Learn More
                </a>
                <a href="#" className="small">
                  <span className="far fa-comments mr-2"></span>21
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 mb-5">
          <div className="card bg-primary shadow-inset text-center border-light p-3">
            <div className="card-body shadow-soft rounded border border-light py-5">
              <span className="card-text small">
                <span className="far fa-calendar-alt mr-2"></span>15 March 2020
              </span>
              <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                <img className="avatar-sm mr-2 img-fluid rounded-circle ml-3" src="../../assets/img/team/profile-picture-2.jpg" alt="Moore avatar" /> Jo J. Moore
              </a>
              <h3 className="h5 card-title my-4">We partnered up with Google</h3>
              <p className="card-text mb-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="card bg-primary border-light shadow-soft">
            <img src="../../assets/img/blog/blog-article-1.jpg" className="card-img-top rounded-top" alt="Themesberg office" />
            <div className="card-body">
              <span className="h6 icon-tertiary small">
                <span className="fas fa-medal mr-2"></span>Awards
              </span>
              <h3 className="h5 card-title mt-3">We partnered up with Google</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="card bg-primary border-light shadow-soft">
            <div className="card-header p-3">
              <img src="../../assets/img/blog/blog-article-2.jpg" className="card-img-top rounded" alt="Designer desk" />
            </div>
            <div className="card-body pt-2">
              <div className="media d-flex align-items-center justify-content-between">
                <div className="post-group">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                    <img className="avatar-sm mr-2 img-fluid rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Jo portrait" /> Jo J. Moore
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <span className="small">
                    <span className="far fa-calendar-alt mr-2"></span>15 March 2020
                  </span>
                </div>
              </div>
              <h3 className="h5 card-title mt-4">We partnered up with Google</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <div className="card bg-primary shadow-soft text-center border-light">
            <div className="card-header">
              <span className="card-text small">
                <span className="far fa-calendar-alt mr-2"></span>15 March 2020
              </span>
            </div>
            <div className="card-body">
              <h3 className="h5 card-title">We partnered up with Google</h3>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary btn-sm">
                Learn More
              </a>
            </div>
            <div className="card-footer">
              <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                <img className="avatar-sm mr-2 img-fluid rounded-circle" src="../../assets/img/team/profile-picture-2.jpg" alt="Moore avatar" /> Jo J. Moore
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card bg-primary shadow-inset border-light">
            <div className="card-body p-5">
              <h3 className="h4 card-title mb-3">We partnered up with Google</h3>
              <span className="card-text small">
                <span className="far fa-calendar-alt mr-2"></span>15 March 2020
              </span>
              <p className="card-text mt-4">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary btn-sm mr-3">
                  Learn More
                </a>
                <a href="#" className="small">
                  <span className="far fa-comments mr-2"></span>21
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCards
