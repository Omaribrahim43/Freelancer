import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ==husam===
// import React, { useState } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
// import { useNavigate, useState } from "react-router-dom";
// import axios from "../../../axios/axios";
import axios from 'axios';
// ===husam==
import { useParams } from "react-router-dom";
import category from "../home/category";

import { Searchbar } from "./searchbar";

import { SearchResultsList } from "./searchResultsList";
import  Category from "./category";

import SearchInput from "./SearchInput";

function Sidebar() {

  const { id } = useParams();
  {/* ====search========= */ }
  const [category, setCategory] = useState([]);
  const [results, setResults] = useState([]);
  {/* ====search========= */ }
  useEffect(() => {
    async function fetchData() {

      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/categories`);
        // Assuming that response.data is an object with the fields you want
        setCategory(response.data);
      } catch (error) {
        // Handle any errors that might occur during the request
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Using useEffect to fetch data when the component mounts


  return (


    <aside id="wt-sidebar" className="wt-sidebar">
      <div className="wt-widget wt-startsearch">
        <div className="wt-widgettitle">
          <h2>Start Your Search</h2>
        </div>

        {/* <Searchbar /> */}
        <div className="wt-widgetcontent">
          <form className="wt-formtheme wt-formsearch">
            <fieldset>
              <div className="form-group">
                {/* ====search========= */}
                <Searchbar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
                {/* ====search====== */}
                {/* <input
                  type="text"
                  name="Search"
                  className="form-control"
                  placeholder="Search Company"
                /> */}
                <a href="javascript:void(0);" className="wt-searchgbtn">
                  <i className="lnr lnr-magnifier"></i>
                </a>
              </div>
            </fieldset>
          </form>
          
        </div>
      </div>
      {/* <SearchInput searchQuery={searchQuery} handleSearchInputChange={handleSearchInputChange} /> */}

   
      {/* <div className="wt-widget wt-startsearch">
        <div className="wt-widgettitle">
          <h2>Start Your Search</h2>
        </div>

     
        <div className="wt-widgetcontent">
          <form className="wt-formtheme wt-formsearch">
            <fieldset>
              <div className="form-group">

                
                <input
                  type="text"
                  name="Search"
                  className="form-control"
                  placeholder="Search Company"
                />
                <a href="javascript:void(0);" className="wt-searchgbtn">
                  <i className="lnr lnr-magnifier"></i>
                </a>
              </div>
            </fieldset>
          </form>
        </div>
      </div> */}
      {/* =====second search == */}
     
      {/* <div className="wt-widget wt-effectiveholder">
        <div className="wt-widgettitle">
          <h2>No. Of Employee</h2>
        </div>
        <div className="wt-widgetcontent">
          <form className="wt-formtheme wt-formsearch">
            <fieldset>
              <div className="wt-checkboxholder">
                <span className="wt-checkbox">
                  <input
                    id="rate1"
                    type="checkbox"
                    name="description"
                    value="company"
                    checked
                  />
                  <label for="rate1">Less Than 02</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="rate2"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="rate2"> 02 - 09 Employees</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="rate3"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="rate3"> 10 - 99 Employees</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="rate4"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="rate4"> 100 - 499 Employees</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="rate5"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="rate5"> More Than 1000 Employees</label>
                </span>
              </div>
            </fieldset>
          </form>
        </div>
      </div> */}
      <div className="wt-widget wt-effectiveholder">
        <div className="wt-widgettitle">
          {/* <h2>Job Type</h2> */}
          <h2>Categories</h2>
        </div>

        <div className="wt-widgetcontent">
          <form className="wt-formtheme wt-formsearch">
            <fieldset>
              <div className="wt-checkboxholder">


                {/* <span className="wt-checkbox">
                  <input
                    id="proindependent"
                    type="checkbox"
                    name="description"
                    value="company"
                    checked
                  />
                  <label for="proindependent">All Types</label>
                </span> */}

                {/* <Router>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/services/:id" component={ServiceDetails} />
                  </Switch>
                </Router> */}
                <Category/>
               
                {/* <span className="wt-checkbox">
                  <input
                    id="independent"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="independent"> Open Jobs</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="agency"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="agency"> Fixed Jobs</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="rising"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="rising"> Hourly Jobs</label>
                </span> */}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
