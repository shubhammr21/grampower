import React, { useEffect } from "react"

function Login(props) {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2 className="h5 mb-7">Login & Register</h2>
        </div>
      </div>
      <div className="row justify-content-md-around">
        <div className="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
          <div className="card bg-primary shadow-soft border-light p-4">
            <div className="card-header text-center pb-0">
              <h2 className="h4">Sign in to our platform</h2>
              <span>Login here using your username and password</span>
            </div>
            <div className="card-body">
              <form action="#" className="mt-4">
                <div className="form-group">
                  <label htmlFor="exampleInputIcon333">Your email</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </span>
                    </div>
                    <input className="form-control" id="exampleInputIcon333" placeholder="example@company.com" type="text" aria-label="email adress" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword777">Password</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-unlock-alt"></span>
                        </span>
                      </div>
                      <input className="form-control" id="exampleInputPassword777" placeholder="Password" type="password" aria-label="Password" required />
                    </div>
                  </div>
                  <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck545" />
                      <label className="form-check-label" htmlFor="defaultCheck545">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="small text-right">
                        Lost password?
                      </a>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Sign in
                </button>
              </form>
              <div className="mt-3 mb-4 text-center">
                <span className="font-weight-normal">or login with</span>
              </div>
              <div className="btn-wrapper my-4 text-center">
                <button className="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                  <span aria-hidden="true" className="fab fa-facebook-f"></span>
                </button>
                <button className="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                  <span aria-hidden="true" className="fab fa-twitter"></span>
                </button>
                <button className="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                  <span aria-hidden="true" className="fab fa-github"></span>
                </button>
              </div>
              <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                <span className="font-weight-normal">
                  Not registered?
                  <a href="#" className="font-weight-bold">
                    Create account
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
          <div className="card bg-primary shadow-soft border-light p-4">
            <div className="card-header text-center pb-0">
              <h2 className="mb-0 h5">Create Account</h2>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-group">
                  <label htmlFor="exampleInputIcon999">Your email</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </span>
                    </div>
                    <input className="form-control" id="exampleInputIcon999" placeholder="example@company.com" type="text" aria-label="email adress" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword345">Password</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-unlock-alt"></span>
                        </span>
                      </div>
                      <input className="form-control" id="exampleInputPassword345" placeholder="Password" type="password" aria-label="Password" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleConfirmPassword712">Confirm Password</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="fas fa-unlock-alt"></span>
                        </span>
                      </div>
                      <input className="form-control" id="exampleConfirmPassword712" placeholder="Confirm password" type="password" aria-label="Password" required />
                    </div>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck634" />
                    <label className="form-check-label" htmlFor="defaultCheck634">
                      I agree to the <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Sign in
                </button>
              </form>
              <div className="mt-3 mb-4 text-center">
                <span className="font-weight-normal">or</span>
              </div>
              <div className="btn-wrapper my-4 text-center">
                <button className="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                  <span aria-hidden="true" className="fab fa-facebook-f"></span>
                </button>
                <button className="btn btn-primary btn-pill  btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                  <span aria-hidden="true" className="fab fa-twitter"></span>
                </button>
                <button className="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button">
                  <span aria-hidden="true" className="fab fa-github"></span>
                </button>
              </div>
              <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                <span className="font-weight-normal">
                  Already have an account?
                  <a href="#" className="font-weight-bold">
                    Login here
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
