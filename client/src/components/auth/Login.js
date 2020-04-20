import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='container container-center'>
      <Link to='/' className='my-1'>
        <i className='fas fa-code fa-4x'></i>
      </Link>
      <p className='text-light font-weight-normal my-1'>
        Sign in to DevVitality
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            onChange={(e) => onChange(e)}
            value={email}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={(e) => onChange(e)}
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
        <Link to='/register'> Create an account</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
