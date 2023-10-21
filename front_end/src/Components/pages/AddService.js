import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import { useSelector} from "react-redux";


export default function AddService() {
  const userData = useSelector((state) => state.user);

    const [category, setCategory] = useState([]);
    const [project, setProject] = useState({
      seller_id: userData.id,
      category_id: "",
      title: "",
      image: null,
      price: "",
      deadline: "",
      desc: "",
      features: [],
    });
  
    useEffect(() => {
        async function fetchData() {
      
          try {
            const csrfResponse = await axios.get("/get-csrf-token");
            const csrfToken = csrfResponse.data.csrf_token;
            axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
            const response = await axios.get("/categories");
            setCategory(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, []);
    
    const handleFeatureChange = (index, key, value) => {
      const updatedFeatures = [...project.features];
      updatedFeatures[index] = { ...updatedFeatures[index], [key]: value };
      setProject({ ...project, features: updatedFeatures });
    };
  
    const addFeature = () => {
      const newFeature = { title: "", price: "", deadline: "" };
      setProject({ ...project, features: [...project.features, newFeature] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("seller_id", project.seller_id);
      formData.append("category_id", project.category_id);
      formData.append("title", project.title);
      formData.append("price", project.price);
      formData.append("desc", project.desc);
      formData.append("deadline", project.deadline);
      if (project.image) {
        formData.append("image", project.image);
      }
  
      project.features.forEach((feature, index) => {
        formData.append(`features[${index}][title]`, feature.title);
        formData.append(`features[${index}][price]`, feature.price);
        formData.append(`features[${index}][deadline]`, feature.deadline);
      });
  
      try {
        const csrfResponse = await axios.get("/get-csrf-token");
        const csrfToken = csrfResponse.data.csrf_token;
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

        const projectResponse = await axios.post(
          "/projects/add",
          formData
        );
        alert("Project added successfully!");
        // Reset your form or navigate to another page
      } catch (error) {
        console.error("API request error:", error);
        // Handle the error
      }
    };
  return (
    <>
      <Header />
      <link rel="stylesheet" href="css/dashboard.css"></link>

      <div class="wt-haslayout wt-innerbannerholder">
				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div class="wt-innerbannercontent">
							<div class="wt-title"><h2>Add Service</h2></div>
							<ol class="wt-breadcrumb">
								<li><a href="index-2.html">Home</a></li>
								<li><a href="javascript:void(0);">Add Service</a></li>
							</ol>
							</div>
						</div>
					</div>
				</div>
			</div>

      <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
        <div className="wt-contentwrapper">
          <main id="wt-main"  style={{margin:'30px 180px'}}>
            <section className="wt-haslayout wt-dbsectionspace">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 ">
                  <div className="wt-dashboardbox">
                    <div className="wt-dashboardboxtitle">
                      <h2>Post a Service</h2>
                    </div>
                    <div className="wt-dashboardboxcontent">
                      <div className="wt-jobdescription wt-tabsinfo">
                        <div className="wt-tabscontenttitle">
                          <h2>Job Description</h2>
                        </div>
                        <form
                          onSubmit={handleSubmit}
                          encType="multipart/form-data"
                          className="wt-formtheme wt-userform wt-userformvtwo"
                        >
                          <fieldset>

                            
                            <div className="form-group">
                              <label htmlFor="image">Upload Image:</label>
                              <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="form-control"
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    image: e.target.files[0], // Store the selected image file
                                  }));
                                }}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                  }));
                                }}
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Job Title"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    seller_id: e.target.value,
                                  }));
                                }}
                                type="hidden"
                                name="seller_id"
                                className="form-control"
                                value={project.seller_id}
                              />
                            </div>
                       
                            <div className="form-group form-group-half wt-formwithlabel">
                              <span className="wt-select">
                                <label htmlFor="category_id">Categories:</label>
                                <select
                                  name="category_id"
                                  onChange={(e) => {
                                    setProject((prev) => ({
                                      ...prev,
                                      category_id: e.target.value,
                                    }));
                                  }}
                                >
                                  <option value="">Select a category</option>
                                  {category.map((item, index) => (
                                    <option key={index} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </span>
                            </div>
                            <div className="form-group form-group-half wt-formwithlabel">
                              <span className="wt-select">
                                <label htmlFor="deadline">Job Duration:</label>
                                <select
                                  name="deadline"
                                  onChange={(e) => {
                                    setProject((prev) => ({
                                      ...prev,
                                      deadline: e.target.value,
                                    }));
                                  }}
                                >
                                  <option value="">Select a duration</option>
                                  <option value="3">3 days</option>
                                  <option value="5">5 days</option>
                                  <option value="7">1 week</option>
                                </select>
                              </span>
                            </div>
                            <div className="form-group">
                              <input
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    price: e.target.value,
                                  }));
                                }}
                                type="number"
                                name="price"
                                className="form-control"
                                placeholder="Price"
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                name="desc"
                                placeholder="Describe your project..."
                                className="form-control"
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    desc: e.target.value,
                                  }));
                                }}
                              ></textarea>
                            </div>
                         
                      <div className="wt-jobskills wt-tabsinfo" style={{ paddingTop: '50px' , marginBottom :'-10px' }}>
                        <div className="wt-tabscontenttitle">
                         
                          <h2>Enhance this service</h2>
                        </div>
                        <div className="form-group wt-btnarea " style={{marginTop : '-70px' }}>
                          <a
                             style={{ color: 'white' }}
                            className="wt-btn float-right"
                            onClick={addFeature}
                          >
                           <i class="fa fa-plus" aria-hidden="true"> </i>   Add Features
                          </a>
                        </div>
                      
                          <div  className="wt-feature-form">
                            <h3></h3>
                          
                            {project.features.map((feature, index) => (
          <div key={index}>
            <br/>
            <p style={{fontSize:'18px'}}> Feature Details: </p>
            <input
              type="text"
              placeholder="Feature Title"
              value={feature.title}
              onChange={(e) => handleFeatureChange(index, "title", e.target.value)}
            />
            <input
              type="number"
              placeholder="Feature Price"
              value={feature.price}
              onChange={(e) => handleFeatureChange(index, "price", e.target.value)}
            />
            <input
              type="text"
              placeholder="Feature Deadline"
              value={feature.deadline}
              onChange={(e) => handleFeatureChange(index, "deadline", e.target.value)}
            />
          </div>
        ))}
      
                           
                              <div className="form-group my-3">
                              <hr/>
                              <br/>
                              <center>
                              <button className="wt-btn" type="submit">
                                Post Service Now
                              </button>
                              </center>
                            </div>
                          </div>
                      
                      </div>
                      </fieldset>
                          </form>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 ">
                <div className="wt-dashboardbox">
                    <div className="wt-dashboardboxtitle">
                    <div >
      <h2 className="wt-tabscontenttitle">Add Your Service and Start Earning</h2>
      <div style={{ paddingLeft: '25px' ,paddingTop: '60px' }}>
      <p>
        On Freelancer, you have the opportunity to generate income by adding
        services that you excel at and making them available for sale to
        interested customers. Please enter the service details carefully so that
        the Freelancer team can review and publish them.
      </p>
      </div>
      <h2 className="wt-tabscontenttitle">Tips for Adding a Valid Service</h2> 
      <div style={{ paddingLeft: '25px' ,paddingTop: '60px' }}>
      <p>
        <strong>Service Title</strong>: Choose a concise and clear title that
        reflects precisely what you will offer in your service, enabling buyers
        to find it when searching for related keywords in your service's field.
      </p>

      <p>
        <strong>Service Description</strong>: Write a distinctive description of
        the service in proper, error-free language, explaining in detail what
        the customer will receive when purchasing the service.
      </p>

      <p>
        <strong>Service Gallery</strong>: Add an expressive image related to the
        service, along with at least three unique samples that introduce the
        buyer to your work style and skills.
      </p>

      <p>
        <strong>Service Price</strong>: Ensure that you set an appropriate price
        for the service based on the amount of work and effort involved, while
        considering the site's commission. Also, specify a suitable delivery time
        for completing the service with quality.
      </p>
      </div>
      <h2 className="wt-tabscontenttitle">Why Services Get Rejected on Freelancer?</h2>
      <ul style={{ paddingLeft: '25px' ,paddingTop: '60px' }}>
        <li>
          A long, unclear title that merges multiple services together.
        </li>
        <li>
          Failure to specify the amount of work the buyer will receive in the
          service description.
        </li>
        <li>
          Low-quality images or designs not created by the seller.
        </li>
        <li>
          Attaching fewer than three samples to the service's work gallery.
        </li>
        <li>
          Services that violate Freelancer's terms of use.
        </li>
      </ul>
    </div>
                  </div>
              </div>
                  </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
