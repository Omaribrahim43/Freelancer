import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddService() {
  const [category, setCategory] = useState([]);
  const [features, setFeatures] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [project, setProject] = useState({
    seller_id: "",
    category_id: "",
    title: "",
    image: "",
    price: "",
    deadline: "",
    desc: "",
  });
  const [feature, setFeature] = useState({
    project_id: "",
    title: "",
    deadline: "",
    price: "",
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/categories"
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const addFeature = () => {
    setFeatures([...features, {}]);
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

    const featureData = new FormData();
    featureData.append("project_id", feature.project_id);
    featureData.append("title", feature.title);
    featureData.append("deadline", feature.deadline);
    featureData.append("price", feature.price);;

    try {
      // First, create the Project record
      const projectResponse = await axios.post(
        "http://127.0.0.1:8000/api/projects/create",
        formData
      );

      // Extract the project ID from the response
      const projectId = projectResponse.data.id;

      // Next, create the Feature record
      feature.project_id = projectId;
      const featureResponse = await axios.post(
        "http://127.0.0.1:8000/api/features/create",
        featureData
      );

      alert("Project added successfully!");
      // Reset your form or navigate to another page
    } catch (error) {
      console.error("API request error:", error);
      setError("An error occurred while adding the project.");
    }
  };
  const handleFeatureSubmit = async (e, featureIndex) => {
    e.preventDefault();
    const featureData = new FormData();

    // Use the stored project ID
    featureData.append("project_id", projectId);
    featureData.append("title", features[featureIndex].title);
    featureData.append("deadline", features[featureIndex].deadline);
    featureData.append("price", features[featureIndex].price);

    try {
      const featureResponse = await axios.post(
        "http://127.0.0.1:8000/api/features/create",
        featureData
      );

      // Handle the response as needed

      alert("Feature added successfully!");
      // Reset the feature form or navigate to another page
    } catch (error) {
      console.error("API request error:", error);
      setError("An error occurred while adding the feature.");
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
                                placeholder="seller ID"
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
                            <div className="form-group form-group-half wt-formwithlabel">
                              <span className="wt-select">
                                <label for="selectoption">Categories:</label>
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
                                <label for="selectoption">Job Duration:</label>
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
                                placeholder="Descripe your project..."
                                className="form-control"
                                onChange={(e) => {
                                  setProject((prev) => ({
                                    ...prev,
                                    desc: e.target.value,
                                  }));
                                }}
                              ></textarea>
                            </div>
                            <div className="form-group my-3">
                              <button className="wt-btn" type="submit">
                                Post Job Now
                              </button>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                      <div class="wt-jobskills wt-tabsinfo">
                        <div class="wt-tabscontenttitle">
                          <h2>Features</h2>
                        </div>
                        <div class="form-group wt-btnarea ">
                          <a href="javascript:void(0);" class="wt-btn float-right" onClick={addFeature}>
                            Add Features
                          </a>
                        </div>
                        {/* Render feature forms */}
                        {features.map((feature, index) => (
                          <div key={index} className="wt-feature-form">
                            <h3>Feature {index + 1}</h3>
                            <form
                              onSubmit={(e) => handleFeatureSubmit(e, index)} // Define a separate function to handle feature submission
                              encType="multipart/form-data"
                              className="wt-formtheme wt-userform wt-userformvtwo"
                            >
                              <div className="form-group">
                                <input type="text" className="form-control" name="title" placeholder="Title"
                                  onChange={(e) => {
                                    setFeature((prev) => ({
                                      ...prev,
                                      title: e.target.value,
                                    }));
                                  }} />
                              </div>
                              <div className="form-group">
                                <input type="number" className="form-control" name="price" placeholder="Price"
                                  onChange={(e) => {
                                    setFeature((prev) => ({
                                      ...prev,
                                      price: e.target.value,
                                    }));
                                  }} />
                              </div>
                              <div className="form-group form-group-half wt-formwithlabel">
                                <span className="wt-select">
                                  <label for="selectoption">Feature Duration:</label>
                                  <select
                                    name="deadline"
                                    onChange={(e) => {
                                      setFeature((prev) => ({
                                        ...prev,
                                        deadline: e.target.value,
                                      }));
                                    }}
                                  >
                                    <option value="">Select a duration</option>
                                    <option value="1">1 day</option>
                                    <option value="2">2 days</option>
                                    <option value="3">3 days</option>
                                    <option value="5">5 days</option>
                                    <option value="7">7 days</option>
                                  </select>
                                </span>
                              </div>
                              <div class="form-group wt-btnarea ">
                                <button type="submit" class="wt-btn float-right">Add Features</button>
                              </div>
                            </form>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div >
      <Footer />
    </>
  );
}
