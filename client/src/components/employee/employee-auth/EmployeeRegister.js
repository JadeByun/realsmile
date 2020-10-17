import React, { Fragment, useState } from 'react';

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    password2: ''
  });

  const { email, password1, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.id]:e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    if(password1 !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  }

  return (
    <Fragment>
      <form onSubmit = {e => onSubmit(e)} className="form">
        <h1 className="heading-primary u-margin-bottom-small">Create your account</h1>
        <div className="form__group">
          <label htmlFor="email" className="form__label">Email</label>
          <input type="email" className="form__input" placeholder="Email" id="email" value={email} onChange = {e => onChange(e)} required />
        </div>
        <div className="form__group">
          <label htmlFor="password1" className="form__label">Password</label>
          <input type="password1" className="form__input" placeholder="Password" id="password1" value={password1} onChange = {e => onChange(e)} required />
        </div>
        <div className="form__group">
          <label htmlFor="password2" className="form__label">Confirm Password</label>
          <input type="password2" className="form__input" placeholder="Confirm Password" id="password2" value={password2} onChange = {e => onChange(e)} required />
        </div>
        <div className="u-center-text u-margin-top-medium">
          <a href="#" className="btn-round">Continue with Email</a>
        </div>
      </form>
    </Fragment>
  )
}

export default EmployeeRegister;