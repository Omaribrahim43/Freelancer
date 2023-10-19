import Sidebar from "./sidebar";
import Cards from "./cards";
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchInput from './SearchInput';
export default function Content() {




  // ==============cards=====================
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/category/${id}`);
        const filteredData = response.data.filter((project) => {
          return (
            project.category_id === parseInt(id) &&
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        });
        setProject(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id, searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const startIndex = pageNumber * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const displayedProjects = project.slice(startIndex, endIndex);
  // ==============cards=====================
  // ==============side bar=====================

  // const { id } = useParams();
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
  // ==============category side bar=================
  // const { id } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  // ===============side bar=====================
  // ===============search in bar=====================
  const [inputs, setInput] = useState('');
  const [resultss, setResultss] = useState([]); // Declare resultss here

  const fetchData = async (values) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/projects`);
      const json = response.data;
      const filteredResults = json.filter((project) => {
        return (
          values &&
          project &&
          project.title &&
          project.title.toLowerCase().includes(values.toLowerCase())
        );
      });
      setResultss(filteredResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(inputs);
  }, [inputs]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // ===============search in bar=====================
  // ===============side bar=====================

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      <div className="wt-haslayout wt-main-section">
        {/* User Listing Start */}
        <div className="wt-haslayout">
          <div className="container">
            <div className="row">
              <div id="wt-twocolumns" className="wt-twocolumns wt-haslayout">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                  {/* Sidebar Start */}
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
                              <div className="input-wrapper">
                                <input
                                  type="text"
                                  placeholder="Search by name..."
                                  value={searchQuery}
                                  onChange={handleSearchInputChange}
                                  onKeyUp={handleChange}
                                  className="search-input"
                                />
                                {/* <input
                                  type="text"
                                  name="Search"
                                  className="form-control"
                                  placeholder="Type to search..."
                                  value={inputs}
                                  onKeyUp={handleChange}
                                /> */}
                              </div>
                              {/* <Searchbar setResults={setResults} /> */}
                              {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
                              {resultss && resultss.length > 0 && (
                                <div className="results-list">
                                  {resultss.map((result, id) => (
                                    <div className="search-result" key={id}>
                                      <Link to={`/single/${result.id}`}>{result.title}</Link>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {/* ====search====== */}
                              {/* <input
                  type="text"
                  name="Search"
                  className="form-control"
                  placeholder="Search Company"
                /> */}
                              
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
                              <div>
                                {categories.map((category) => (
                                  <span className="wt-checkbox" key={category.id}>
                                    <input
                                      id={`category-${category.id}`}
                                      type="checkbox"
                                      name="description"
                                      value={category.name}
                                    />
                                    <Link to={`/services/${category.id}`}>
                                      <label
                                        className={`active-label`}
                                        style={{ color: activeCategory === category.id ? 'red' : 'initial', backgroundColor: activeCategory === category.id ? 'lightgray' : 'initial' }}
                                        onClick={() => handleCategoryClick(category.id)}
                                      >
                                        {category.name}
                                      </label>
                                    </Link>
                                  </span>
                                ))}
                              </div>

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
                  {/* Sidebar End */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                  {/* Cards Start */}
                  <div className="wt-userlistingholder wt-haslayout">
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
                                placeholder="Search by name..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                className="search-input"
                              />
                              <a href="javascript:void(0);" className="wt-searchgbtn">
                                <i className="lnr lnr-magnifier"></i>
                              </a>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div> */}
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
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="search-input"
                />
                <a href="javascript:void(0);" className="wt-searchgbtn">
                  <i className="lnr lnr-magnifier"></i>
                </a>
              </div>
            </fieldset>
          </form>
        </div>
      </div> */}
                    <div className="wt-userlistingtitle">
                      <span>
                        01 - 48 of {project.length} results for <em>"Software House"</em>
                      </span>
                    </div>
                    <div className="wt-filterholder">
                      <ul className="wt-filtertag">
                        {/* Filter tags go here */}
                      </ul>
                    </div>
                    <div className="wt-companysinfoholder">
                      <div className="row">
                        {displayedProjects.map((item) => (
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
                                    <a href="javascript:void(0)">
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
                      </div>
                    </div>
                    <nav className="wt-pagination">
                      <ReactPaginate
                        pageCount={Math.ceil(project.length / projectsPerPage)}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={1}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                      />
                    </nav>
                  </div>
                  {/* Cards End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User Listing End */}
      </div>
    </>
  );
}