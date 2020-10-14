import React from 'react';
import logo from '../../img/logo-h-white-small.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="realsmile logo" className="logo" />
      <div className="nav__logged--out">
        <a href="login.html" className="btn-inline">Sign In</a>
        <a href="login.html" className="btn-inline">Employers</a>
      </div>
    </nav>
  )
}

export default Navbar;