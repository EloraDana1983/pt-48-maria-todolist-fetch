import React, { useState } from 'react';
import './LoginForm.css';

const RegisterComponent = ({ setLoading }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const register = async (fullName, phoneNumber, email, password) => {
    setLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
    console.log('Full Name:', fullName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(fullName, phoneNumber, email, password);
  };

  return (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-3 pb-3">Sign Up</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-style"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="tel"
                className="form-style"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <i className="input-icon uil uil-phone"></i>
            </div>
            <div className="form-group mt-2">
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;


