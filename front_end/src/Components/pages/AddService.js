import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function AddService() {
    const [category, setCategory] = useState([]);
    const [project, setProject] = useState({
      seller_id: "",
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
            const response = await axios.get("http://127.0.0.1:8000/api/categories");
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
        const projectResponse = await axios.post(
          "http://127.0.0.1:8000/api/projects/add",
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

      <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
        <div className="wt-contentwrapper">
          <main id="wt-main" className="wt-main wt-haslayout">
            <section className="wt-haslayout wt-dbsectionspace">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 float-left">
                  <div className="wt-dashboardbox">
                    <div className="wt-dashboardboxtitle">
                      <h2>Post a Job</h2>
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
                                    seller_id: e.target.value,
                                  }));
                                }}
                                type="number"
                                name="seller_id"
                                className="form-control"
                                placeholder="Seller ID"
                              />
                            </div>
                            {/* <div className="form-group">
                              <input
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    project_id: e.target.value,
                                  }));
                                }}
                                type="number"
                                name="project_id"
                                className="form-control"
                                placeholder="project ID"
                              />
                            </div> */}
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
                         
                       
                      <div className="wt-jobskills wt-tabsinfo">
                        <div className="wt-tabscontenttitle">
                          <h2>Features</h2>
                        </div>
                        <div className="form-group wt-btnarea ">
                          <a
                            href="javascript:void(0);"
                            className="wt-btn float-right"
                         
                          >
                            Add Features
                          </a>
                        </div>
                      
                          <div  className="wt-feature-form">
                            <h3></h3>
                          
                            {project.features.map((feature, index) => (
          <div key={index}>
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
        <a onClick={addFeature}>Add Feature</a>
                              
                              <div className="form-group my-3">
                              <button className="wt-btn" type="submit">
                                Post Job Now
                              </button>
                            </div>
                          </div>
                      
                      </div>
                      </fieldset>
                          </form>
                       
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
