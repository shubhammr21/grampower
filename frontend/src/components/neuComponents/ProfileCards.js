import React, { useEffect } from "react"

function ProfileCards(props) {
  return (
    <>
      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 mb-7">Profile Cards</h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
              <div className="rotating-card-container mb-5">
                <div className="card shadow-soft border-light card-rotate p-5">
                  <div className="front text-center">
                    <div className="profile-image shadow-inset border border-light bg-primary p-3 rounded-circle mt-4">
                      <img src="../../assets/img/team/profile-picture-3.jpg" className="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Roberta Avatar" />
                    </div>
                    <div className="card-body">
                      <h3 className="h5 mb-2">Roberta Casas</h3>
                      <span className="h6 font-weight-normal text-gray">Marketing Specialist</span>
                    </div>
                  </div>
                  <div className="back text-center">
                    <div className="card-body p-5">
                      <ul className="list-unstyled d-flex justify-content-center mb-4">
                        <li>
                          <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                            <span className="fab fa-facebook-f"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                            <span className="fab fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                            <span className="fab fa-slack-hash"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                            <span className="fab fa-dribbble"></span>
                          </a>
                        </li>
                      </ul>
                      <p className="card-text">Some quick example text to build on the card title and make up.</p>
                      <a className="btn btn-sm btn-primary" href="#">
                        <span className="fas fa-user-plus mr-1"></span> Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
              <div className="card bg-primary shadow-soft border-light text-center">
                <div className="card-header">
                  <div className="profile-cover rounded" data-background="../../assets/img/team/cover-profile.jpg"></div>
                  <div className="profile-image-small bg-primary rounded-circle shadow-inset p-3 border border-light mx-auto mt-n6">
                    <img src="../../assets/img/team/profile-picture-2.jpg" className="card-img-top rounded-circle" alt="Neil Avatar" />
                  </div>
                </div>
                <div className="card-body pt-2">
                  <h3 className="h5 mb-0">Neil Sims</h3>
                  <a className="btn btn-sm btn-primary my-4" href="#">
                    <span className="fas fa-user-plus mr-1"></span> Follow
                  </a>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <ul className="list-unstyled d-flex mb-4">
                    <li>
                      <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                        <span className="fab fa-slack-hash"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                        <span className="fab fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
              <div className="card bg-primary shadow-soft border-light mb-5 text-center">
                <div className="profile-image shadow-inset border border-light bg-primary p-3 rounded-circle mt-n5 mx-auto">
                  <img src="../../assets/img/team/profile-picture-1.jpg" className="card-img-top shadow-soft p-3 border border-light rounded-circle" alt="Joseph Avatar" />
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2">Joseph Garth</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Designer</span>
                  <ul className="list-unstyled d-flex justify-content-center my-3">
                    <li>
                      <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                        <span className="fab fa-slack-hash"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                        <span className="fab fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                  <div className="row mt-5">
                    <div className="col-4">
                      <div className="icon icon-shape icon-shape-xs icon-facebook icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                        <span className="fab fa-facebook-f"></span>
                      </div>
                      <h2 className="h5 mb-0">25K</h2>
                      <span className="small">Followers</span>
                    </div>
                    <div className="col-4">
                      <div className="icon icon-shape icon-shape-xs icon-dribbble icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                        <span className="fab fa-dribbble"></span>
                      </div>
                      <h2 className="h5 mb-0">5K</h2>
                      <span className="small">Followers</span>
                    </div>
                    <div className="col-4">
                      <div className="icon icon-shape icon-shape-xs icon-behance icon-shape-primary shadow-soft border border-light rounded-circle mb-2">
                        <span className="fab fa-behance"></span>
                      </div>
                      <h2 className="h5 mb-0">62K</h2>
                      <span className="small">Followers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
              <div className="profile-card mb-5">
                <div className="card bg-primary shadow-inset border-light text-center">
                  <div className="card-header">
                    <div className="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                      <img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded" alt="Leos Portrait" />
                    </div>
                  </div>
                  <div className="card-body pb-5">
                    <h3 className="h5 mb-2">Jose Leos</h3>
                    <span className="h6 font-weight-normal text-gray mb-3">Co-Founder</span>
                    <ul className="list-unstyled d-flex justify-content-center mt-3 mb-4">
                      <li>
                        <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                          <span className="fab fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                          <span className="fab fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                          <span className="fab fa-slack-hash"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                          <span className="fab fa-dribbble"></span>
                        </a>
                      </li>
                    </ul>
                    <a className="btn btn-sm btn-primary mr-3" href="#">
                      <span className="fas fa-user-plus mr-1"></span> Follow
                    </a>
                    <a className="btn btn-sm btn-primary" href="#">
                      Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
              <div className="profile-card mb-5">
                <div className="card bg-primary shadow-soft border-light">
                  <div className="profile-image bg-primary shadow-inset border border-light rounded p-3 ml-3 mt-n5">
                    <img src="../../assets/img/team/profile-picture-3.jpg" className="card-img-top rounded" alt="Bonnie Avatar" />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 mb-2">Bonnie Green</h3>
                    <span className="h6 font-weight-normal text-gray mb-3">Web Designer</span>
                    <ul className="list-unstyled d-flex my-3">
                      <li>
                        <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                          <span className="fab fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                          <span className="fab fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                          <span className="fab fa-slack-hash"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                          <span className="fab fa-dribbble"></span>
                        </a>
                      </li>
                    </ul>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-5">
              <div className="profile-card mb-5">
                <div className="card bg-primary shadow-soft border-light">
                  <div className="profile-image bg-primary shadow-inset border border-light rounded-circle p-3 ml-3 mt-n5">
                    <img src="../../assets/img/team/profile-picture-1.jpg" className="card-img-top rounded-circle" alt="Christopher Avatar" />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 mb-2">Christopher Wood</h3>
                    <span className="h6 font-weight-normal text-gray mb-3">Marketing</span>
                    <ul className="list-unstyled d-flex my-3">
                      <li>
                        <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                          <span className="fab fa-facebook-f"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                          <span className="fab fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                          <span className="fab fa-slack-hash"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                          <span className="fab fa-dribbble"></span>
                        </a>
                      </li>
                    </ul>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="card bg-primary shadow-soft border-light">
                <div className="card-header p-4">
                  <img src="../../assets/img/team/profile-picture-4.jpg" className="card-img-top rounded" alt="Wood Portrait" />
                </div>
                <div className="card-body pt-2">
                  <h3 className="h5 mb-2">Christopher Wood</h3>
                  <span className="h6 font-weight-normal text-gray mb-4">Co-Founder Themesberg</span>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <ul className="list-unstyled d-flex my-3">
                    <li>
                      <a href="#" target="_blank" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                        <span className="fab fa-slack-hash"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                        <span className="fab fa-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileCards
