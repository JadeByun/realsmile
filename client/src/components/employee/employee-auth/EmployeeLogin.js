import React, { Fragment } from 'react';

const EmployeeLogin = () => {
  return (
    <Fragment>

      <form action="#" className="form">
        <h1 className="heading-primary u-margin-bottom-small">Sign In with RealSmile Account</h1>

        <div className="form__group">
          <input type="email" className="form__input" placeholder="Email" id="email" required />
          <label htmlFor="email" className="form__label">Email</label>
        </div>
        <div className="form__group">
          <input type="password" className="form__input" placeholder="Password" id="password" required />
          <label htmlFor="password" className="form__label">Password</label>
        </div>
        <div className="u-center-text u-margin-top-medium">
          <a href="#" class="btn-round">Continue with Email</a>
        </div>
        <div className="u-center-text u-margin-top-small">
          <a href="#" className="btn-text">Don't have an account?</a>
        </div>
        <div className="u-center-text u-margin-top-small">
          <a href="#" className="btn-text">Forgot Password?</a>
        </div>
      </form>
    </Fragment>
  )
}

export default EmployeeLogin;