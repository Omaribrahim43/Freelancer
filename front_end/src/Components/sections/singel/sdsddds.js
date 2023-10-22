import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import axios from "../../../axios/axios";
import { Link } from "react-router-dom";

//Job Images

const JobVacancyPost = (props) => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const openModal = () => setModal(!modal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `review/${id}`
        );
        // Make sure the response is not undefined
        if (response && response.data) {
          console.log(response.data);
          setJobs(response.data);
        } else {
          console.error("Response data is undefined.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.job]);
  return (
    <React.Fragment>
    
            <div className="bookmark-label text-center">
              <Link to="#" className="text-white align-middle">
                <i className="mdi mdi-star"></i>
              </Link>
            </div>
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to="/companydetails">
                     
                     
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-1">
                    
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                     
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div>
                    <p className="text-muted mb-2">
                      <span className="text-primary">$</span>
                     
                    </p>
                  </div>
                </Col>

                <Col md={2}>
            <>
            </>
                
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row>
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">Experience :</span>{" "}
                   
                    </p>
                  </div>
                </Col>

                <Col lg={6} md={5}>
                  {}
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">
                       
                      </span>
                    
                    </p>
                  </div>
                </Col>

                <Col lg={2} md={3}>
                  <div className="text-start text-md-end">
                    <Link
                      to={`/jobdetails/`}
                      className="primary-link">
                      Apply Now <i className="mdi mdi-chevron-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </React.Fragment>
   
        

export default JobVacancyPost;