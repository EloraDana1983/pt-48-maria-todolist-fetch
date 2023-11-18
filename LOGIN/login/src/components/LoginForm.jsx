import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleRegister = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <LoginComponent setLoading={setLoading} />
                    <RegisterComponent setLoading={setLoading} />
                    {loading && (
                      <div className="lds-ripple">
                        <div></div>
                        <div></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn mr-3" onClick={handleLogin}>
                    Login
                  </button>
                  <button className="btn" onClick={handleRegister}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

