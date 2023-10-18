import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Detail() {
   const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [features, setFeatures] = useState([]); 
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



  useEffect(() => {
    async function fetchData() {
      try {
        const projectResponse = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`);
        setProject(projectResponse.data);

        const featuresResponse = await axios.get(`http://127.0.0.1:8000/api/features/project/${id}`);
        setFeatures(featuresResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [id]);

  const profile =project.seller_id;
  const profileButtonClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleFeatureChange = (event) => {
    const featureId = parseInt(event.target.value, 10);
    const isChecked = event.target.checked;

    // Find the selected feature
    const selectedFeature = features.find((feature) => feature.id === featureId);

    if (selectedFeature) {
      // If the feature is checked, add its price to the total; otherwise, subtract it
      const featurePrice = isChecked ? selectedFeature.price : -selectedFeature.price;

      setTotalPrice(totalPrice + featurePrice);

      // Update the selected features
      if (isChecked) {
        setSelectedFeatures([...selectedFeatures, selectedFeature]);
      } else {
        setSelectedFeatures(selectedFeatures.filter((feature) => feature.id !== featureId));
      }
    }
  };

    return (
      <>
      
      <div  style={{margin:'0px 180px'}}>
      <div className="row">
        <div id="wt-twocolumns" className="wt-twocolumns ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left">
            <div className="wt-proposalholder">
              <span className="wt-featuredtag">
                {/* <img
                  src="images/featured.png"
                  alt="img description"
                  data-tipso="Plus Member"
                  className="template-content tipso_style"
                /> */}
              </span>
              <div className="wt-proposalhead">
                <h2>{project.title}</h2>
                <ul className="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
                  <li>
                    <span>
                     Buyers : {project.buyers}
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
              <div className="wt-btnarea">
                <button onClick={() => profileButtonClick(profile)} className="wt-btn">
                  See Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
            <div className="wt-projectdetail-holder">
              <div className="wt-projectdetail">
                <div className="wt-title">
                  <h3>Project Detail</h3>
                </div>
                <div className="wt-description">
                  <p>{project.desc}</p>
                  <p>Laborum sed ut perspiciatis unde omnis iste natus error sitems voluptatem accusantium doloremque laudantium, totam rem aiam eaque ipsa quae ab illo inventore veritatis etna quasi architecto beatae vitae dictation explicabo. nemo enim ipsam fugit.</p>
                  <ul className="wt-projectliststyle">
                    <li>
                      <span>
                        <i className="fa fa-check"></i>Nemo enim ipsam voluptatem quia
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>Adipisci velit, sed quia non numquam eius modi tempora
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>qui dolorem ipsum quia dolor sit amet
                      </span>
                    </li>
                  </ul>
                  <br/> <br/>
                  {/* <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore.</p> */}
                  <div className="wt-title">
                    <h3>Available features for this project : </h3> <br/>
                    </div>
                  
                    <div>
                     {features.map((item) => (
                       <div key={item.id}>
                         <label >
                         <input type="checkbox" name="features" value={item.id}
                            className="mx-2" onChange={handleFeatureChange}  />
                            {item.title} <br/> <div className="mx-5"> For an additional cost of {item.price} JD ,the project's completion date will be postponed by  {item.deadline} days .</div>
                             </label>
                             </div>
                              ))}
                     </div>
                </div>
              </div>
             
            
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
            <aside id="wt-sidebar" className="wt-sidebar">
              <div className="wt-proposalsr">
                {/* <div className="wt-proposalsrcontent">
                  <span className="wt-proposalsicon">
                  
                  </span>
                  <div className="wt-title">
                    <div>Rating</div>
                   
                  </div>
                </div> */}
           
           
              </div>
              <div className="wt-widget wt-companysinfo-jobsingle">
                <div className="wt-companysdetails">
                  <figure className="wt-companysimg">
                    <img src={project.image} alt="img description" />
                  </figure>
                 
                </div>
              </div>
              {/* <div className="wt-widget wt-sharejob">
                <div className="wt-widgettitle">
                  <h2>Ratings </h2>
                </div>
                <div className="wt-widgetcontent">
                  <ul className="wt-socialiconssimple">
                    <li className="wt-facebook">
                      <a href="javascript:void(0)">
                        <i className="fab fa-facebook-f"></i> Share on Facebook
                      </a>
                    </li>
                    <li className="wt-twitter">
                      <a href="javascript:void(0)">
                        <i className="fab fa-twitter"></i> Share on Twitter
                      </a>
                    </li>
                    <li className="wt-linkedin">
                      <a href="javascript:void(0)">
                        <i className="fab fa-linkedin-in"></i> Share on Linkedin
                      </a>
                    </li>
                    <li className="wt-googleplus">
                      <a href="javascript:void(0)">
                        <i className="fab fa-google-plus-g"></i> Share on Google Plus
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="wt-widget wt-reportjob">
                <div className="wt-widgettitle">
                  <h2>Order Now</h2>
                </div>
                <div className="wt-widgetcontent">
                  <form className="wt-formtheme wt-formreport">
                  <div >
                    <div>price = {project.price }  </div>
                    <div>Total price = {project.price + totalPrice}  </div>
                   
                  </div>
                  <br></br>
                     
                    
                      <div className="form-group wt-btnarea">
                        <a href="javascrip:void(0);" className="wt-btn">
                          Order Now
                        </a>
                      </div>
                  
                  </form>
                </div>
              </div>
              {/* <div className="wt-widget wt-reportjob">
                <div className="wt-widgettitle">
                  <h2>Report This Job</h2>
                </div>
                <div className="wt-widgetcontent">
                  <form className="wt-formtheme wt-formreport">
                    <fieldset>
                      <div className="form-group">
                        <span className="wt-select">
                          <select>
                            <option value="Reason">Select Reason</option>
                            <option value="Reason1">Reason 1</option>
                            <option value="Reason2">Reason 2</option>
                          </select>
                        </span>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Description"></textarea>
                      </div>
                      <div className="form-group wt-btnarea">
                        <a href="javascrip:void(0);" className="wt-btn">
                          Submit
                        </a>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div> */}
            </aside>
          </div>
        </div>
      </div>
    </div>



      
      
      </>
          );
        }