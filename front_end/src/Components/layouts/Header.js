import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/action";
import { NavLink } from "react-router-dom";

import {Navigate} from "react-router-dom";
export default function Header() {
const userData = useSelector((state) => state.user);
const login = useSelector((state) => state.isAuthenticated);
console.log('data', userData);
const Auth = useSelector((state) => state.isAuthenticated);
console.log(Auth);
const dispatch = useDispatch();

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
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"  style={{height: '90px'}}>
                        <strong className="wt-logo"><a href="/">
                         <img src="/images/myLogo.png" width={'200px'}  alt="company logo here"/></a>
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
                                {Auth ? userData.role ==='freelancer' ? (
                                <NavLink to="/add-service">+Add Service</NavLink>
                                 
                                ) : (
                                  <span></span>
                                ): <span></span> }
                                </li>
                                
                                <li className="menu-item-has-children page_item_has_children">
                                  <a >Services</a>
                                  <ul className="sub-menu">
                                    <li>
                                    <NavLink to="/services/1">Web Development</NavLink>
                                    </li>
                                    <li className="current-menu-item">
                                    <NavLink to="/services/2">Degital Marketing</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/services/3">
                                      Business
                                      </NavLink>
                                    </li>
                                  </ul>
                                </li>
                         
                                <li className="nav-item">
                                <NavLink to="/about">About Us</NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink to="/articles">Articles</NavLink>
                                </li>

                              {Auth ? (
                               <li>
                                <div className="wt-userlogedin">
                                  <figure className="wt-userimg">
                                    {userData.image ? (
                                      <img
                                        src={userData.image}
                                        alt="image description"
                                      />
                                    ) : (
                                      <img
                                        src="images/avatar.png"
                                        alt="image description"
                                      />
                                    )}
                                  </figure>
                                  <div className="wt-username">
                                  <NavLink to="/my_profile">  <h3>{userData.name}</h3> </NavLink>
                                   
                                  </div>
                                  
                                  <nav className="wt-usernav">
                                    <ul>
                                   <li>
                                        <a href="dashboard-profile.html">
                                        <NavLink to="/my_profile">My Profile</NavLink>
                                        </a>
                                        </li>
                                      <li>
                                       <a>
                                        <span onClick={handleLogout}>
                                          Logout
                                        </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                                </li>
                                
                              ) : (
                                <>
                             <li> 
                                  <NavLink to="/login">Login</NavLink>
                                 
                                  </li>
                                  <li>  <NavLink to="/register">Register</NavLink> </li>
                                </>
                              )}
                            </ul>
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