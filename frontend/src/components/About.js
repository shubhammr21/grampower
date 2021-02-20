import React, { useEffect } from "react"
import Page from "./Page"

function About() {
  return (
    <main>
      <div className="section section-header pb-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="display-2 mb-4">We are Themesberg</h1>
              <p className="lead mb-5">Themesberg is an independent branding & experience design company working at the intersection of culture, design, and technology. </p>
              <a className="btn btn-primary" href="./contact.html">
                <span className="fas fa-book-reader mr-2"></span>Our works
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 mx-auto">
          <div className="timeline timeline-one">
            <div className="timeline-item">
              <span className="icon icon-info icon-lg">
                <span className="fab fa-react"></span>
              </span>
              <h3 className="h5 my-3">React</h3>
              <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.</p>
            </div>
            <div className="timeline-item">
              <span className="icon icon-success">
                <span className="fab fa-vuejs"></span>
              </span>
              <h3 className="h5 my-3">VueJs</h3>
              <p>Bootstrap. Build responsive, mobile-first projects on the web with the world's most popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas.</p>
            </div>
            <div className="timeline-item">
              <span className="icon icon-danger">
                <span className="fab fa-angular"></span>
              </span>
              <h3 className="h5 my-3">Angular</h3>
              <p>AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="row">
                  <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                    <div className="card-body text-center bg-primary py-5">
                      <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
                        <span className="far fa-eye"></span>
                      </div>
                      <h2 className="h4 mr-2">Audience</h2>
                      <p className="mb-0">At Themesberg, we use human, brand, and cultural insights to unlock strategic business opportunities for clients.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 px-md-0 mb-4 mb-lg-0">
                    <div className="card-body text-center bg-primary py-5">
                      <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
                        <span className="fas fa-medal"></span>
                      </div>
                      <h2 className="h4 mr-2">Branding</h2>
                      <p className="mb-0">Despite being cautioned not to judge a book by its cover, we all do it every day. We making your site looks better.</p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 px-md-0">
                    <div className="card-body text-center bg-primary py-5">
                      <div className="icon icon-shape shadow-inset border-light rounded-circle mb-3">
                        <span className="fas fa-puzzle-piece"></span>
                      </div>
                      <h2 className="h4 mr-2">Production</h2>
                      <p className="mb-0">Today, truly creative sells. Get innovative ideas and polished finish pieces from our creative agency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-md-6 col-xl-6 mb-5">
              <div className="card bg-primary shadow-soft border-light organic-radius p-3">
                <img className="organic-radius img-fluid" src="./assets/img/about-us-1.jpg" alt="modern desk" />
              </div>
            </div>
            <div className="col-md-6 col-xl-5 text-center text-md-left">
              <h2 className="h1 mb-4">Design with us, Develop Anything.</h2>
              <p className="lead">Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
              <p className="lead">Our small team is active in the creative community, endlessly interested in what’s next, and generally pleasant to be around.</p>
              <img src="../../assets/img/signature.svg" alt="signature" className="mt-4" width="150" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-lg-4 text-center">
              <div className="icon-box mb-4">
                <div className="icon icon-shape shadow-soft border border-light rounded-circle mb-4">
                  <span className="far fa-smile-beam"></span>
                </div>
                <h3 className="h5">Team Members</h3>
                <span className="counter display-3 text-gray d-block">500</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 text-center">
              <div className="icon-box mb-4">
                <div className="icon icon-shape shadow-soft border border-light rounded-circle mb-4">
                  <span className="far fa-eye"></span>
                </div>
                <h3 className="h5">Projects Published</h3>
                <span className="counter display-3 text-gray d-block">2400</span>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 text-center">
              <div className="icon-box mb-4">
                <div className="icon icon-shape shadow-soft border border-light rounded-circle mb-4">
                  <span className="fas fa-globe-europe"></span>
                </div>
                <h3 className="h5">Countries</h3>
                <span className="counter display-3 text-gray d-block">80</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-lg pt-0">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <h2 className="h1">Our Team</h2>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card bg-primary shadow-soft border-light text-center py-4 mb-5">
                <div className="profile-image shadow-inset border border-light bg-primary rounded-circle p-3 mx-auto">
                  <img src="../../assets/img/team/profile-picture-1.jpg" className="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Neil Avatar" />
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2">Neil Sims</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Co-Founder Themesberg</span>
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
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card bg-primary shadow-soft border-light text-center py-4 mb-5">
                <div className="profile-image shadow-inset border border-light bg-primary rounded-circle p-3 mx-auto">
                  <img src="../../assets/img/team/profile-picture-3.jpg" className="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Bonnie Avatar" />
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2">Bonnie Green</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Marketing Specialist</span>
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
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card bg-primary shadow-soft border-light text-center py-4 mb-5">
                <div className="profile-image shadow-inset border border-light bg-primary rounded-circle p-3 mx-auto">
                  <img src="../../assets/img/team/profile-picture-2.jpg" className="card-img-top shadow-soft p-2 border border-light rounded-circle" alt="Christopher avatar" />
                </div>
                <div className="card-body">
                  <h3 className="h5 mb-2">Christopher Wood</h3>
                  <span className="h6 font-weight-normal text-gray mb-3">Web Designer</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
