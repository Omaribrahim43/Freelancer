
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Detail() {

  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`);
            setProject(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
}, [])


    return (
      <>
      
      <div className="container">
      <div className="row">
        <div id="wt-twocolumns" className="wt-twocolumns wt-haslayout">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left">
            <div className="wt-proposalholder">
              <span className="wt-featuredtag">
                <img
                  src="images/featured.png"
                  alt="img description"
                  data-tipso="Plus Member"
                  className="template-content tipso_style"
                />
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
                <a href="javascrip:void(0);" className="wt-btn">
                  See Profile
                </a>
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
                  <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore.</p>
                  <p>Eomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                  <ul className="wt-projectliststyle">
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
                        <i className="fa fa-check"></i>Qui dolorem ipsum quia dolor sit amet
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>Nemo enim ipsam voluptatem quia
                      </span>
                    </li>
                  </ul>
                  <p>Sed quia consequuntur magni dolores eos who ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore ste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <p>Sed quia consequuntur magni dolores eos who ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore.</p>
                </div>
              </div>
              <div className="wt-skillsrequired">
                <div className="wt-title">
                  <h3>Skills Required</h3>
                </div>
                <div className="wt-tag wt-widgettag">
                  <a href="javascript:void(0);">PHP Developer</a>
                  <a href="javascript:void(0);">PHP</a>
                  <a href="javascript:void(0);">My SQL</a>
                  <a href="javascript:void(0);">Business</a>
                  <a href="javascript:void(0);">Website Development</a>
                  <a href="javascript:void(0);">Collaboration</a>
                  <a href="javascript:void(0);">Decent</a>
                </div>
              </div>
              <div className="wt-attachments">
                <div className="wt-title">
                  <h3>Attachments</h3>
                </div>
                <ul className="wt-attachfile">
                  <li>
                    <span>Wireframe Document.doc</span>
                    <em>
                      File size: 512 kb
                      <a href="javascript:void(0);">
                        <i className="lnr lnr-download"></i>
                      </a>
                    </em>
                  </li>
                  <li>
                    <span>Requirments.pdf</span>
                    <em>
                      File size: 110 kb
                      <a href="javascript:void(0);">
                        <i className="lnr lnr-download"></i>
                      </a>
                    </em>
                  </li>
                  <li>
                    <span>Company Intro.docx</span>
                    <em>
                      File size: 224 kb
                      <a href="javascript:void(0);">
                        <i className="lnr lnr-download"></i>
                      </a>
                    </em>
                  </li>
                </ul>
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
              <div className="wt-widget wt-sharejob">
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
              </div>
              <div className="wt-widget wt-reportjob">
                <div className="wt-widgettitle">
                  <h2>Order Now</h2>
                </div>
                <div className="wt-widgetcontent">
                  <form className="wt-formtheme wt-formreport">
                  <div >
                    <div>Total price = {project.price} </div>
                   
                  </div>
                  <br></br>
                     
                    
                      <div className="form-group wt-btnarea">
                        <a href="javascrip:void(0);" className="wt-btn">
                          Submit
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