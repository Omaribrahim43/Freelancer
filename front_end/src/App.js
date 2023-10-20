import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Services from "./Components/pages/services";
// import Singel from "./Components/pages/singel";
import Profile from "./Components/pages/profile";
import Single from "./Components/pages/single";
import Login from "./Components/pages/login";
import Register from "./Components/pages/register";
import { NavLink } from "react-router-dom";

import {store} from '././redux/store';
import { Provider, useSelector } from "react-redux";
import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddService from "./Components/pages/AddService";

function App() {
const Auth = useSelector((state) => state.isAuthenticated);
console.log(Auth);
// const Auth = !!localStorage.getItem("user");
// console.log(!!localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services/:id" element={<Services />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={Auth ? <Home/> : <Login />} />
        <Route
          path="/register"
          element={Auth ? <NavLink to="/" /> : <Register />}
        />
        {/* Define more routes here */}
        {/* <Route path="/singel" element={<Singel />} /> */}

        <Route path="/single/:id" element={<Single />} />
        <Route path="/add-service" element={<AddService />} />

        <Route path="/my_profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;


