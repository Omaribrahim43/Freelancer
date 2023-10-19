import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Checkout() {
    const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedFeatureIds = queryParams.get("features").split(',');
  console.log("SelectedFeatureIds Array:", selectedFeatureIds);
  
  const [project, setProject] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  useEffect(() => {
    // Fetch project details
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`).then((response) => {
      setProject(response.data);
    });

    // Fetch features based on selectedFeatureIds
    axios.get(`http://127.0.0.1:8000/api/features`).then((response) => {
    const featuresData = response.data;

    // Convert selectedFeatureIds to strings
    const selectedFeatureIdsString = selectedFeatureIds.map(String);

    // Filter features based on string comparison
    const features = featuresData.filter((feature) => selectedFeatureIdsString.includes(String(feature.id)));

    setSelectedFeatures(features);
    console.log(features);
  });
  }, []);
 
  return (
    <>
      <Header />

  
      <div class="wt-haslayout wt-innerbannerholder" style={{ marginBottom: '80px' }}>
				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div class="wt-innerbannercontent">
							<div class="wt-title"><h2>Cheackout</h2></div>
							<ol class="wt-breadcrumb">
								<li><a href="index-2.html">Home</a></li>
								<li><a href="javascript:void(0);">Projects</a></li>
								<li class="wt-active">Project Detail</li>
								<li class="wt-active">checkout</li>
							</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
      

      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
        <div className="wt-proposalholder" style={{ marginLeft: '70px', width: '90%' }}>
          <span className="wt-featuredtag">
            {/* Featured tag */}
          </span>
          <div className="wt-proposalhead">
            <h2>{project.title}</h2>
            <ul className="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
              <li>
                <span>
                  Buyers: {project.buyers}
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-dollar-sign"></i> Price: {project.price}
                </span>
              </li>
              <li>
                <span>
                  <i className="far fa-clock"></i> Duration: {project.deadline} Days
                </span>
              </li>
            </ul>
          </div>

          <div className="selected-features">
        <h3>Selected Features:</h3>
        <div>
                     {selectedFeatures.map((item) => (
                       <div key={item.id}>
                         <div >{item.title} <div className="mx-5"> For an additional cost of {item.price} JD ,the project's completion date will be postponed by  {item.deadline} days .</div>
                             </div>
                             </div>
                              ))}
                     </div>
        {/* <ul>
          {selectedFeatures.map((feature) => (
            <li key={feature.id}>{feature.title}</li>
          ))}
        </ul> */}

     
      </div>
      
          <div className="wt-btnarea">
            <button className="wt-btn">
              Pay now
            </button>
          </div>
        </div>
      </div>

      {/* Display selected features */}
      <br/>
  

      <Footer />
    </>
  );
}
