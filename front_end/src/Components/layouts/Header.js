import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/action";
import { NavLink } from "react-router-dom";

import {Navigate} from "react-router-dom";
export default function Header() {
const data = useSelector((state) => state.user);
const dispatch = useDispatch();

const Auth = !!localStorage.getItem("user");
function handleLogout() {
  localStorage.removeItem("user");

  dispatch(logoutSuccess());
}
// console.log("data in header", data.user);
    return (
      <>
        <>
          <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
            {/* Content Wrapper Start */}
            <div className="wt-contentwrapper">
              {/* Header Start */}
              <header id="wt-header" className="wt-header wt-haslayout">
                <div className="wt-navigationarea">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <strong className="wt-logo">
                          <a href="index-2.html">
                            <img
                              src="images/user-login.png"
                              alt="img description"
                            />
                          </a>
                        </strong>
                        <div className="wt-rightarea">
                          <nav id="wt-nav" className="wt-nav navbar-expand-lg">
                            <button
                              className="navbar-toggler"
                              type="button"
                              data-toggle="collapse"
                              data-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation">
                              <i className="lnr lnr-menu" />
                            </button>
                            <div
                              className="collapse navbar-collapse wt-navigation"
                              id="navbarNav">
                              <ul className="navbar-nav">
                                <li className="menu-item-has-children page_item_has_children">
                                  <a href="javascript:void(0);">Main</a>
                                  <ul className="sub-menu">
                                    <li className="menu-item-has-children page_item_has_children wt-notificationicon">
                                      <span className="wt-dropdowarrow">
                                        <i className="lnr lnr-chevron-right" />
                                      </span>
                                      <a href="javascript:void(0);">Home</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="index-2.html">Home v1</a>
                                        </li>
                                        <li className="wt-newnoti">
                                          <a href="indexvtwo.html">
                                            Home v2<em>without login</em>
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="menu-item-has-children page_item_has_children">
                                      <span className="wt-dropdowarrow">
                                        <i className="lnr lnr-chevron-right" />
                                      </span>
                                      <a href="javascript:void(0);">Article</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="articlelist.html">
                                            Article List
                                          </a>
                                        </li>
                                        <li>
                                          <a href="articlegrid.html">
                                            Article Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="articlesingle.html">
                                            Article Single
                                          </a>
                                        </li>
                                        <li>
                                          <a href="articleclassic.html">
                                            Article Classic
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="menu-item-has-children page_item_has_children">
                                      <span className="wt-dropdowarrow">
                                        <i className="lnr lnr-chevron-right" />
                                      </span>
                                      <a href="javascript:void(0);">Company</a>
                                      <ul className="sub-menu">
                                        <li>
                                          <a href="companygrid.html">
                                            Company Grid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="companysigle.html">
                                            Company Sigle
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="about.html">About</a>
                                    </li>
                                    <li>
                                      <a href="privacypolicy.html">
                                        Privacy Policy
                                      </a>
                                    </li>
                                    <li>
                                      <a href="comingsoon.html">Coming Soon</a>
                                    </li>
                                    <li>
                                      <a href="404page.html">404page</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <a href="howitworks.html">How It Works</a>
                                </li>
                                <li className="menu-item-has-children page_item_has_children">
                                  <a href="javascript:void(0);">Browse Jobs</a>
                                  <ul className="sub-menu">
                                    <li>
                                      <a href="joblisting.html">Job Listing</a>
                                    </li>
                                    <li className="current-menu-item">
                                      <a href="jobsingle.html">Job Single</a>
                                    </li>
                                    <li>
                                      <a href="jobproposal.html">
                                        Job Proposal
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item-has-children page_item_has_children">
                                  <a href="javascript:void(0);">
                                    View Freelancers
                                  </a>
                                  <ul className="sub-menu">
                                    <li>
                                      <a href="userlisting.html">
                                        User Listing
                                      </a>
                                    </li>
                                    <li className="current-menu-item">
                                      <a href="usersingle.html">User Single</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>

                              {/* <div className="wt-loginarea">
                            <figure className="wt-userimg">
                              <img
                                src="images/user-login.png"
                                alt="img description"
                              />
                            </figure>
                            <div className="wt-loginoption">
                              <a
                                href="javascript:void(0);"
                                id="wt-loginbtn"
                                className="wt-loginbtn">
                                {Auth ? (
                                  <span>Log Out</span>
                                ) : (
                                  <span>Login</span>
                                )}
                                
                              </a>
                              <div className="wt-loginformhold">
                                <div className="wt-loginheader">
                                  {Auth ? (
                                    <span>Log Out</span>
                                  ) : (
                                    <span>Login</span>
                                  )}
                                  ;
                                  <a href="javascript:;">
                                    <i className="fa fa-times" />
                                  </a>
                                </div>
                                <form className="wt-formtheme wt-loginform do-login-form">
                                  <fieldset>
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Username"
                                      />
                                    </div>
                                    <div className="form-group">
                                      <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                      />
                                    </div>
                                    <div className="wt-logininfo">
                                      <a
                                        href="javascript:;"
                                        className="wt-btn do-login-button">
                                        {Auth ? (
                                          <span>Log Out</span>
                                        ) : (
                                          <span>Login</span>
                                        )}
                                        ;
                                      </a>
                                      <span className="wt-checkbox">
                                        <input
                                          id="wt-login"
                                          type="checkbox"
                                          name="rememberme"
                                        />
                                        <label htmlFor="wt-login">
                                          Keep me logged in
                                        </label>
                                      </span>
                                    </div>
                                  </fieldset>
                                  <div className="wt-loginfooterinfo">
                                    <a
                                      href="javascript:;"
                                      className="wt-forgot-password">
                                      Forgot password?
                                    </a>
                                    <a href="register.html">Create account</a>
                                  </div>
                                </form>
                                <form className="wt-formtheme wt-loginform do-forgot-password-form wt-hide-form">
                                  <fieldset>
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        name="email"
                                        className="form-control get_password"
                                        placeholder="Email"
                                      />
                                    </div>
                                    <div className="wt-logininfo">
                                      <a
                                        href="javascript:;"
                                        className="wt-btn do-get-password">
                                        Get Pasword
                                      </a>
                                    </div>
                                  </fieldset>
                                  <div className="wt-loginfooterinfo">
                                    
                                    <a
                                      href="javascript:void(0);"
                                      className="wt-show-login">
                                      {Auth ? (
                                        <span>Log Out</span>
                                      ) : (
                                        <span >Login</span>
                                      )}
                                      ;
                                    </a>
                                    <span className="wt-checkbox">
                                      <input
                                        id="wt-login"
                                        type="checkbox"
                                        name="rememberme"
                                      />
                                      <label htmlFor="wt-login">
                                        Keep me logged in
                                      </label>
                                    </span>
                                  </div>
                                </fieldset>
                                <div className="wt-loginfooterinfo">
                                  <a
                                    href="javascript:;"
                                    className="wt-forgot-password">
                                    Forgot password?
                                  </a>
                                  <a href="register.html">Create account</a>
                                </div>
                              </form>
                              <form className="wt-formtheme wt-loginform do-forgot-password-form wt-hide-form">
                                <fieldset>
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      name="email"
                                      className="form-control get_password"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <div className="wt-logininfo">
                                    <a
                                      href="javascript:;"
                                      className="wt-btn do-get-password">
                                      Get Pasword
                                    </a>
                                  </div>
                                </fieldset>
                                <div className="wt-loginfooterinfo">
                                  <a
                                    href="javascript:void(0);"
                                    className="wt-show-login">
                                    Login
                                  </a>
                                  <a href="register.html">Create account</a>
                                </div>
                              </form>
                            </div>
                      

                          </div> */}
                              {Auth ? (
                                <div className="wt-userlogedin">
                                  <figure className="wt-userimg">
                                    {data.image ? (
                                      <img
                                        src={data.image}
                                        alt="image description"
                                      />
                                    ) : (
                                      <img
                                        src="images/user-img.jpg"
                                        alt="image description"
                                      />
                                    )}
                                  </figure>
                                  <div className="wt-username">
                                    <h3>{data.name}</h3>
                                    <h3>{data.id}</h3>
                                    <span></span>
                                  </div>
                                  <nav className="wt-usernav">
                                    <ul>
                                      <li className="menu-item-has-children page_item_has_children">
                                        <a href="javascript:void(0);">
                                          <span>Insights</span>
                                        </a>
                                        <ul className="sub-menu children">
                                          <li>
                                            <a href="dashboard-insights.html">
                                              Insights
                                            </a>
                                          </li>
                                          <li>
                                            <a href="dashboard-insightsuser.html">
                                              Insights User
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="dashboard-profile.html">
                                          <span>My Profile</span>
                                        </a>
                                      </li>
                                      <li className="menu-item-has-children">
                                        <a href="javascript:void(0);">
                                          <span>All Jobs</span>
                                        </a>
                                        <ul className="sub-menu">
                                          <li>
                                            <a href="dashboard-completejobs.html">
                                              Completed Jobs
                                            </a>
                                          </li>
                                          <li>
                                            <a href="dashboard-canceljobs.html">
                                              Cancelled Jobs
                                            </a>
                                          </li>
                                          <li>
                                            <a href="dashboard-ongoingjob.html">
                                              Ongoing Jobs
                                            </a>
                                          </li>
                                          <li>
                                            <a href="dashboard-ongoingsingle.html">
                                              Ongoing Single
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="dashboard-managejobs.html">
                                          <span>Manage Jobs</span>
                                        </a>
                                      </li>
                                      <li className="wt-notificationicon menu-item-has-children">
                                        <a href="javascript:void(0);">
                                          <span>Messages</span>
                                        </a>
                                        <ul className="sub-menu">
                                          <li>
                                            <a href="dashboard-messages.html">
                                              Messages
                                            </a>
                                          </li>
                                          <li>
                                            <a href="dashboard-messages2.html">
                                              Messages V 2
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="dashboard-saveitems.html">
                                          <span>My Saved Items</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="dashboard-invocies.html">
                                          <span>Invoices</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="dashboard-category.html">
                                          <span>Category</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="dashboard-packages.html">
                                          <span>Packages</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="dashboard-proposals.html">
                                          <span>Proposals</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="dashboard-accountsettings.html">
                                          <span>Account Settings</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="dashboard-helpsupport.html">
                                          <span>Help &amp; Support</span>
                                        </a>
                                      </li>
                                      <li>
                                        {/* <a href="index-2.html"> */}
                                        <span onClick={handleLogout}>
                                          Logout
                                        </span>
                                        {/* </a> */}
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              ) : (
                                <>
                                  {/* <div className="wt-logininfo"> */}
                                  {/* <a href="/login">loginfooterinfo</a> */}
                                  <NavLink to="/login">Login</NavLink>/
                                  <NavLink to="/register">Register</NavLink>
                                  {/* </div> */}
                                  <a
                                    href="javascript:void(0);"
                                    id="wt-loginbtn"
                                    className="wt-loginbtn"></a>
                                  <div className="wt-loginformhold">
                                    <div className="wt-loginheader">
                                      <span>Login</span>

                                      <a href="javascript:;">
                                        <i className="fa fa-times" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="wt-loginarea">
                                    <div className="wt-loginoption">
                                      <a
                                        href="javascript:void(0);"
                                        id="wt-loginbtn"
                                        className="wt-loginbtn"></a>
                                      <div className="wt-loginformhold">
                                        <div className="wt-loginheader">
                                          <span>Login</span>

                                          <a href="javascript:;">
                                            <i className="fa fa-times" />
                                          </a>
                                        </div>
                                        <form className="wt-formtheme wt-loginform do-login-form">
                                          <fieldset>
                                            <div className="form-group">
                                              <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                placeholder="Username"
                                              />
                                            </div>
                                            <div className="form-group">
                                              <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                              />
                                            </div>
                                            <div className="wt-logininfo">
                                              <a
                                                href="javascript:;"
                                                className="wt-btn do-login-button">
                                                <span>Login</span>;
                                              </a>
                                              <span className="wt-checkbox">
                                                <input
                                                  id="wt-login"
                                                  type="checkbox"
                                                  name="rememberme"
                                                />
                                                <label htmlFor="wt-login">
                                                  Keep me logged in
                                                </label>
                                              </span>
                                            </div>
                                          </fieldset>
                                          <div className="wt-loginfooterinfo">
                                            <a
                                              href="javascript:;"
                                              className="wt-forgot-password">
                                              Forgot password?
                                            </a>
                                            <a href="register.html">
                                              Create account
                                            </a>
                                          </div>
                                        </form>
                                        <form className="wt-formtheme wt-loginform do-forgot-password-form wt-hide-form">
                                          <fieldset>
                                            <div className="form-group">
                                              <input
                                                type="email"
                                                name="email"
                                                className="form-control get_password"
                                                placeholder="Email"
                                              />
                                            </div>
                                            <div className="wt-logininfo">
                                              <a
                                                href="javascript:;"
                                                className="wt-btn do-get-password">
                                                Get Password
                                              </a>
                                            </div>
                                          </fieldset>
                                          <div className="wt-loginfooterinfo">
                                            <a
                                              href="javascript:void(0);"
                                              className="wt-show-login">
                                              <span>Login</span>
                                            </a>
                                            <a href="register.html">
                                              Create account
                                            </a>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </header>
          </div>
        </div>
      </>
    </>
  );
}