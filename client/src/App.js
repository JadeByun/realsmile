import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmployeeLogin from './components/employee/employee-auth/EmployeeLogin';
import EmployeeRegister from './components/employee/employee-auth/EmployeeRegister';
import AboutUs from './components/layout/AboutUs';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';

const App = () => 
<Router>
  <Fragment>
    <Navbar />
    <Route exact path='/' component={Header} />
    <section className="container">
      <Switch>
        <Route exact path='/employee/register' component={EmployeeRegister} ></Route>
        <Route exact path='/employee/login' component={EmployeeLogin} ></Route>
      </Switch>
    </section>
    <AboutUs />
    <Footer />
  </Fragment>
</Router>


export default App;