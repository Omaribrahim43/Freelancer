  import React, { useState } from "react";
  import { connect } from "react-redux";
  import { loginSuccess, logoutSuccess } from "./../../redux/action";
  import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
  import { useNavigate } from "react-router-dom";
  import axios from "../../axios/axios";
  import { GoogleLogin } from "@react-oauth/google";
  import { useParams } from "react-router-dom";
  //Import Image
  // import lightLogo from "../../assets/images/logo-light.png";
  // import darkLogo from "../../assets/images/logo-dark.png";
  // import signInImage from "../../assets/images/auth/sign-in.png";
  import { Form } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import jwt_decode from "jwt-decode";
import styled from "styled-components";
import './login.css'

  const SignIn = ({isAuthenticated, user, loginSuccess, logoutSuccess}) => {
  ;
  const { id } = useParams();
  

    const handleLogout = () => {
      // Perform the logout action and dispatch the logoutSuccess action
      logoutSuccess();
    };
    document.title = "Sign In";
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [image, setimage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
      if (e) {
        
        e.preventDefault();
      }

      try { 

        const csrfResponse = await axios.get("/get-csrf-token");
        const csrfToken = csrfResponse.data.csrf_token;

        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

        // Now, make your login request
        const response = await axios.post("/login", { email, password });
    const user = response.data.user;
  console.log(response.data);
        setemail("");
        setpassword("");
        const data = await axios.get("/user");
        loginSuccess(data.data.user);
        console.log(data.data.user);
// if (id){
//    navigate(`checkout/${id}`);
//    console.log("ccccc");
// }else{
   navigate(-1);

// }
        // console.log(response); // Log the user information
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <React.Fragment>
        <div style={{ backgroundColor: '#f7f7f7' }}>
          <div className="main-content " style={{margin:'100px'}} >
            <div className="page-content" >
              <section className="bg-auth" >
                <Container>
                  <Row className="justify-content-center">
                    <Col xl={10} lg={12}>
                      <Card className="auth-box">
                        <Row className="g-0">
                          <Col lg={6} className="text-center">
                            <CardBody className="p-4">
                              <Link to="/">
                                <img
                                  src='https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                  alt=""
                                  className="logo-light"
                                />
                                {/* <img
                                  src={darkLogo}
                                  alt=""
                                  className="logo-dark"
                                /> */}
                              </Link>
                              <div className="mt-5">
                                {/* <img
                                  src={signInImage}
                                  alt=""
                                  className="img-fluid"
                                /> */}
                              </div>
                            </CardBody>
                          </Col>
                          <Col lg={6}>
                            <CardBody className="auth-content p-5 h-100 text-white">
                              <div className="w-100">
                                <div className="text-center mb-4">
                                  <h5>Welcome Back !</h5>
                                  <p className="text-white-70">
                                    Sign in to continue to Jobcy.
                                  </p>
                                </div>
                                <Form
                                  onSubmit={handleLogin}
                                  className="auth-form">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="usernameInput"
                                      className="form-label">
                                      Email
                                    </label>
                                    <Input
                                      type="email"
                                      value={email}
                                      className="form-control get_password"
                                      id="usernameInput"
                                      placeholder="Enter your username"
                                      onChange={(e) => setemail(e.target.value)}
                                      required
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="passwordInput"
                                      className="form-label">
                                      Password
                                    </label>
                                    <Input
                                      type="password"
                                      className="form-control"
                                      id="passwordInput"
                                      placeholder="Enter your password"
                                      value={password}
                                      onChange={(e) =>
                                        setpassword(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                  <div className="mb-4">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexCheckDefault"
                                      />
                                      <Link
                                        to="/resetpassword"
                                        className="float-end text-white">
                                        Forgot Password?
                                      </Link>
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault">
                                        Remember me
                                      </label>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <button style={{ backgroundColor: '#ff5851' }}
                                      type="submit"
                                      className="btn btn-white btn-hover w-100">
                                      Sign In
                                    </button>
                                  </div>

                                  <div className="text-center mt-3">
                                    <a style={{ backgroundColor: 'lightgray', color: '#000'}}
                                      href="/register"
                                      className="btn btn-white btn-hover w-100">
                                      Sign Up
                                    </a>
                                  </div>
                                </Form>

                                <div className="mt-4 text-center">
                                  <p className="mb-0">
                                    Don't have an account ?
                                    {/* <Link style={{ backgroundColor: '#ff5851' }}
                                      to="/signup"
                                      className="fw-medium text-white text-decoration-underline ">
                                      {" "}
                                      Sign Up{" "}
                                    </Link>
                                    < button style={{backgroundColor: '#ff5851'}} className="fw-medium text-white text-decoration-underline wt-description"> ugbiubliyh</button> */}
                                    <GoogleLogin
                                      onSuccess={(credentialResponse) => {
        var credentialResponse = jwt_decode(credentialResponse.credential);
                                        setname(credentialResponse.name);
                                        setemail(credentialResponse.email);
                                        setimage(credentialResponse.picture);
                                        handleLogin();
                                        console.log(credentialResponse.email);
                                        console.log(email);
                                        console.log(name);
                                        console.log(image);
                                      }}
                                      onError={() => {
                                        console.log("Login Failed");
                                      }}
                                    />
                                    ;
                                  </p>
                                </div>
                              </div>
                            </CardBody>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  });
  export default connect(mapStateToProps, { loginSuccess })(SignIn);


