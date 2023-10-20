import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Services from "./Components/pages/services";
import Single from "./Components/pages/single";
import Yacht from "./Components/sections/services/test";

import {Searchbar} from "./Components/sections/services/searchbar";

import Login from "./Components/pages/login";
import Checkout from "./Components/pages/checkout";
import Register from "./Components/pages/register";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "./axios/axios";
import { useSelector, useDispatch, Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {store} from '././redux/store';
import './App.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
import AddService from "./Components/pages/AddService";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { loginSuccess } from "./redux/action";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const Userdata = jwt_decode(credentialResponse.credential);

        const csrfResponse = await axios.get("/get-csrf-token");
        const csrfToken = csrfResponse.data.csrf_token;

        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

        const response = await axios.post("/googlelogin", {
          name: Userdata.name,
          google_Id: Userdata.sub,
          email: Userdata.email,
          image: Userdata.picture,
        });

        dispatch(loginSuccess(response.data.user));
        console.log(response.data.user);

        console.log(response);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
                  <Route path="/services/:id" element={<Services />} />

        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path="/register"
          element={isAuthenticated ? <NavLink to="/" /> : <Register />}
        />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/add-service" element={<AddService />} />
          <Route path="/checkout/:id" element={<Checkout />} />

      </Routes>
    </Router>
  )

}

export default App;
