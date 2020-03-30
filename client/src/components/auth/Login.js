import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("SUCCESS");
  };

  return (
    <Fragment>
      <a href='dashboard.html' className='my-1'>
        <i className='fas fa-code fa-4x'></i>
      </a>
      <p className='text-light font-weight-normal my-1'>
        Sign in to DevVitality
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            onChange={e => onChange(e)}
            value={email}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={e => onChange(e)}
            value={password}
            minLength='6'
          />
        </div>

        <input
          type='submit'
          value='Sign In'
          className='btn btn-primary btn-block btn-large'
        />
      </form>
      <p className='my-1'>
        New to DevVitality?
        <Link to='/register'>Create an account</Link>
      </p>
    </Fragment>
  );
};

export default Login;
