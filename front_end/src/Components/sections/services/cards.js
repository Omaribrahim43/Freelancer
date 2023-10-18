import React from "react";
import {useState,useEffect}from 'react';
import axios from "axios";
import UseReadApi from "../../../coustmHooks/UseReadapi"
function Cards() {
const [ProjectData, getFetch] = UseReadApi("http://127.0.0.1:8000/api/projects");
useEffect(() => {
  getFetch();
}, []);

  return (
    <div className="wt-userlistingholder wt-haslayout">
      <div className="wt-userlistingtitle">
        <span>
          01 - 48 of 57143 results for <em>"Software House"</em>
        </span>
      </div>
      <div className="wt-filterholder">
        <ul className="wt-filtertag">
          <li className="wt-filtertagclear">
            <a href="javascript:void(0)">
              <i className="fa fa-times"></i> <span>Clear All Filter</span>
            </a>
          </li>
          <li className="alert alert-dismissable fade in">
            <a href="javascript:void(0)">
              <i
                className="fa fa-times close"
                data-dismiss="alert"
                aria-label="close"></i>{" "}
              <span>Graphic Design</span>
            </a>
          </li>
          <li className="alert alert-dismissable fade in">
            <a href="javascript:void(0)">
              <i
                className="fa fa-times close"
                data-dismiss="alert"
                aria-label="close"></i>{" "}
              <span>Any Hourly Rate</span>
            </a>
          </li>
          <li className="alert alert-dismissable fade in">
            <a href="javascript:void(0)">
              <i
                className="fa fa-times close"
                data-dismiss="alert"
                aria-label="close"></i>{" "}
              <span>Any Freelancer Type</span>
            </a>
          </li>
          <li className="alert alert-dismissable fade in">
            <a href="javascript:void(0)">
              <i
                className="fa fa-times close"
                data-dismiss="alert"
                aria-label="close"></i>
              <span>Chinese</span>
            </a>
          </li>
          <li className="alert alert-dismissable fade in">
            <a href="javascript:void(0)">
              <i
                className="fa fa-times close"
                data-dismiss="alert"
                aria-label="close"></i>{" "}
              <span>English</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="wt-companysinfoholder">
        <div className="row">
          {ProjectData.map((project, index) => (
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" key={index}>
              <div className="wt-companysdetails">
                <figure className="wt-companysimg">
                  <img src="images/company/img-01.jpg" alt="img description" />
                </figure>
                <div className="wt-companysinfo">
                  <figure>
                    <img
                      src="images/company/img-01.png"
                      alt="img description"
                    />
                  </figure>
                  <div className="wt-title">
                    <a href="javascript:void(0);">
                      <i className="fa fa-check-circle"></i> Verified Company
                    </a>
                    <h2>{project.title}</h2>
                  </div>
                  <ul className="wt-postarticlemeta">
                    <li>
                      <a href="javascript:void(0);">
                        <span>Open Jobs</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <span>Full Profile</span>
                      </a>
                    </li>
                    <li className="wt-following">
                      <a href="javascript:void(0);">
                        <span>Following</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="wt-pagination">
        <ul>
          <li className="wt-prevpage">
            <a href="javascript:void(0);">
              <i className="lnr lnr-chevron-left"></i>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">1</a>
          </li>
          <li>
            <a href="javascript:void(0);">2</a>
          </li>
          <li>
            <a href="javascript:void(0);">3</a>
          </li>
          <li>
            <a href="javascript:void(0);">4</a>
          </li>
          <li>
            <a href="javascript:void(0);">...</a>
          </li>
          <li>
            <a href="javascript:void(0);">50</a>
          </li>
          <li className="wt-nextpage">
            <a href="javascript:void(0);">
              <i className="lnr lnr-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Cards;
