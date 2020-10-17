import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="heading-primary u-center-text">
          True Job Matching, RealSmile
      </h1>
        <h2 className="heading-secondary u-margin-top-small">
          RealSmile match your availability to a right job for you. Set your
          availability now.
      </h2>
        <div className="u-center-text u-margin-top-small">
          <Link to='/employee/register' className="btn-round">Start Now</Link>
        </div>
      </div>
      <div className="header__blank"></div>
    </header>
  )
}

export default Header;
