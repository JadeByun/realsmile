import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <ul className="footer__items">
          <li className="footer__item">
            <a href="#" className="footer__link">RealSmile</a>
          </li>

          <li className="footer__item">
            <a href="#" className="footer__link">Find your perfect job</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Employers</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Contact us</a>
          </li>
        </ul>
        <p className="copyright u-margin-top-medium">
          &copy; Copyright 2020 by RealSmile. All rights reserved.
        </p>
      </footer>
    </Fragment>
  )
}

export default Footer;