import React, { useState } from 'react';
import './LoginForm.css';

const LoginComponent = ({ setLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async (email, password) => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
    console.log('Email:', email);
    console.log('Password:', password);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-style"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4">
              Login
            </button>
          </form>
          <p className="mb-0 mt-4 text-center">
            <a href="https://www.google.com" className="link">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

