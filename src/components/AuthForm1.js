import React from "react";
import LoginBtn from "./LoginBtn";
import AppCancelBtn from "./AppCancelBtn";
import SignupBtn from "./SignupBtn";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Link } from "react-router-dom";

class AuthForm1 extends React.Component {
  state = { title: undefined };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div>
                    <form>
                      <div className="Auth-form1-wrapper">
                        <div className="Auth-form1-Header">
                          <h4>
                            <strong>{this.props.formTitle}</strong>
                          </h4>
                        </div>
                        <div className="Auth-form1-Error-Header">
                          <b>Login failed: </b>Invalid credentials!
                        </div>
                        <div className="Auth-form1-Body">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label for="Auth-form1-input1">
                                    <h4>Email address</h4>
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="Auth-form1-input1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                  />
                                  <div className="email-error">
                                    Invalid Email Address
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-spacing2"></div>
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label for="Auth-form1-input2">
                                    <h4>Password</h4>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-error-outline form-control"
                                    id="Auth-form1-input2"
                                    aria-describedby="passwordHelp"
                                    placeholder="Enter password"
                                  />
                                  <div className="password-error">
                                    Incorrect password
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="vertical-spacing2"></div>

                          <div className="container">
                            <div id="Auth-form1-btn-margin" className="row">
                              <div className="col-md-6">
                                <LoginBtn caption={this.props.btnCaption1} />
                              </div>
                              <div className="col-md-6">
                                <AppCancelBtn caption="Cancel" />
                              </div>
                            </div>
                          </div>

                          <div className="vertical-spacing3"></div>

                          <div className="row">
                            <div className="col-md-12">
                              <center
                                id={
                                  this.props.formType !== "login" ? "hide" : null
                                }
                              >
                                <Link to="#">
                                  <h6>Forgot your password?</h6>
                                </Link>
                              </center>
                              <center
                                id={
                                  this.props.formType !== "signup"
                                    ? "hide"
                                    : null
                                }
                              >
                                <h5>Log In if you already have an Account</h5>
                              </center>
                            </div>
                          </div>
                          <div className="container">
                            <div id="Auth-form1-btn-signup" className="row">
                              <div className="col-lg-12">
                                <SignupBtn caption={this.props.btnCaption2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
            <div id="col3" className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthForm1;
