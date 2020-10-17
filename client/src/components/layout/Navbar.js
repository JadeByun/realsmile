import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo-h-white-small.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to='/'>
      <img src={logo} alt="realsmile logo" className="logo" />
      </Link>
      <div className="nav__logged--out">
        <Link to="/employee/login" className="btn-inline">Sign In</Link>
        <a href="login.html" className="btn-inline">Employers</a>
      </div>
    </nav>
  )
}

export default Navbar;