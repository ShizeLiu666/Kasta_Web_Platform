import React, { useState, useEffect } from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="logo-margin-bottom" style={{ width: '150px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1 custom-title">Kasta Management Platform</h4>
                    </div>

                    <div className="form-container">
                      <form>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example11">Username</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1 move-down">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-block fa-lg mb-3" style={{ backgroundColor: '#fbcd0b' }} type="button">Log in</button>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4 move-down">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <a className="text-muted" href="#!">Create new</a>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-gradient">
                    <h4 className="mb-4">Living Enhanced</h4>
                    <p className="small mb-0">KASTA offers smart control solutions with products designed in Australia. Our seamless integration and modular form ensure connectivity and scalability, enhancing lifestyles with tailored applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;