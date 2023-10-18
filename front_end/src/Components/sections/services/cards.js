import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// ==husam===
// import React, { useState } from "react";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
// import { useNavigate, useState } from "react-router-dom";
// import axios from "../../../axios/axios";
import axios from 'axios';
// ===husam==
import { useParams } from "react-router-dom";

function Cards() {
 
  // ==husam====================================
  const { id } = useParams();
  // const [data, setData] = useState({
  //   id: "",
  //   image: "",
  //   seller_id: "",
  //   title: "",
  //   rating: "",
  //   price: "",
  //   deadline: "",
  //   buyers: "",
  //   status: "",
  // });
  const [project, setProject] = useState([]);

  useEffect(() => {
   async function fetchData(){
    
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/category/${id}`);
        // Assuming that response.data is an object with the fields you want
        setProject(response.data);
      } catch (error) {
        // Handle any errors that might occur during the request
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Using useEffect to fetch data when the component mounts

  
  

  // const toursPerPage = 6; // Number of tours to display per page
  // // Calculate the total number of pages needed based on the number of tours
  // const totalPages = Math.ceil(data.length / toursPerPage);

  // // Calculate the index range of tours to display on the current page
  // const startIndex = (currentPage - 1) * toursPerPage;
  // const endIndex = startIndex + toursPerPage;


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
          {project.map((item) => (
            
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" key={item.id}>
              <div className="wt-companysdetails">
                <figure className="wt-companysimg">
                  <img src={item.image} alt="img description" />
                </figure>
                <div className="wt-companysinfo">
                  <figure>
                    <img src={item.image} alt="img description" />
                  </figure>
                  <div className="wt-title">
                    <a href="javascript:void(0);">
                      <i className="fa fa-check-circle"></i> Verified Company
                    </a>
                    <h2>{item.title}</h2>
                  </div>
                  <ul className="wt-postarticlemeta">
                    <li>
                      <a href="javascript:void(0);">
                        <span>Open Jobs</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span>Full Profile</span>
                      </a>
                    </li>
                    <li className="wt-following">
                      <a href="javascript:void(0)">
                        <span>Following</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
        ))}
          {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="wt-companysdetails">
              <figure className="wt-companysimg">
                <img src="images/company/img-02.jpg" alt="img description" />
              </figure>
              <div className="wt-companysinfo">
                <figure>
                  <img src="images/company/img-02.png" alt="img description" />
                </figure>
                <div className="wt-title">
                  <a href="javascript:void(0);">
                    <i className="fa fa-check-circle"></i> Verified Company
                  </a>
                  <h2>Aviato Care Company</h2>
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
                  <li>
                    <a href="javascript:void(0);">
                      <span>Click To Follow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="wt-companysdetails">
              <figure className="wt-companysimg">
                <img src="images/company/img-03.jpg" alt="img description" />
              </figure>
              <div className="wt-companysinfo">
                <figure>
                  <img src="images/company/img-03.png" alt="img description" />
                </figure>
                <div className="wt-title">
                  <a href="javascript:void(0);">
                    <i className="fa fa-check-circle"></i> Verified Company
                  </a>
                  <h2>Ember Planner &amp; Organizer</h2>
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
                  <li>
                    <a href="javascript:void(0);">
                      <span>Click To Follow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="wt-companysdetails">
              <figure className="wt-companysimg">
                <img src="images/company/img-04.jpg" alt="img description" />
              </figure>
              <div className="wt-companysinfo">
                <figure>
                  <img src="images/company/img-04.png" alt="img description" />
                </figure>
                <div className="wt-title">
                  <a href="javascript:void(0);">
                    <i className="fa fa-check-circle"></i> Verified Company
                  </a>
                  <h2>Firy Birds &amp; Company</h2>
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
                  <li>
                    <a href="javascript:void(0);">
                      <span>Click To Follow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="wt-companysdetails">
              <figure className="wt-companysimg">
                <img src="images/company/img-05.jpg" alt="img description" />
              </figure>
              <div className="wt-companysinfo">
                <figure>
                  <img src="images/company/img-05.png" alt="img description" />
                </figure>
                <div className="wt-title">
                  <a href="javascript:void(0);">
                    <i className="fa fa-check-circle"></i> Verified Company
                  </a>
                  <h2>VAV Creative Studio</h2>
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
                  <li>
                    <a href="javascript:void(0);">
                      <span>Click To Follow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="wt-companysdetails">
              <figure className="wt-companysimg">
                <img src="images/company/img-06.jpg" alt="img description" />
              </figure>
              <div className="wt-companysinfo">
                <figure>
                  <img src="images/company/img-06.png" alt="img description" />
                </figure>
                <div className="wt-title">
                  <a href="javascript:void(0);">
                    <i className="fa fa-check-circle"></i> Verified Company
                  </a>
                  <h2>Sass Studio</h2>
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
                  <li>
                    <a href="javascript:void(0);">
                      <span>Click To Follow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
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
