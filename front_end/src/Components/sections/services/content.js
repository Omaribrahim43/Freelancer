// import Sidebar from "./sidebar";
import Cards from "./cards";
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

import axios from 'axios';
import ReactPaginate from 'react-paginate';
// import SearchInput from './SearchInput';

// import Swal from "sweetalert2";
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Category from "../home/category";

import './content.css'; // Import the CSS file

export default function Content() {




  // ==============cards=====================
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [maxPrice, setMaxPrice] = useState('');
  const [minPrice, setMinPrice] = useState(''); // Input field for minimum price

  const [sortBy, setSortBy] = useState(null); // State for sorting criterion
  const [sortByd, setSortByd] = useState(null); // State for sorting criterion

  const [activeSortByd, setActiveSortByd] = useState([]); // State for active sorting criteria
  const [activeSortBy, setActiveSortBy] = useState([]); // State for active sorting criteria
  const projectsPerPage = 12;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/category/${id}`);
        const filteredData = response.data.filter((project) => {
          return (
            project.category_id === parseInt(id) &&
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            project.status == 'active' &&
            (minPrice === '' || parseFloat(project.price) <= parseFloat(minPrice))
            &&
            (maxPrice === '' || parseFloat(project.price) >= parseFloat(maxPrice))
          );
        });

        // if (sortBy) {
        //   filteredData.sort((a, b) => a[sortBy] - b[sortBy]);
        // }
        if (activeSortBy.length > 0) {
          filteredData.sort((a, b) => {
            for (const criterion of activeSortBy) {
              if (a[criterion] !== b[criterion]) {
                return a[criterion] - b[criterion];
              }
            }
            return 0;
          });
        }

        if (activeSortByd.length > 0) {
          filteredData.sort((a, b) => {
            for (const criteriond of activeSortByd) {
              if (a[criteriond] !== b[criteriond]) {
                return b[criteriond] - a[criteriond];
              }
            }
            return 0;
          });
        }


        setProject(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id, searchQuery, minPrice, maxPrice, sortBy, , activeSortBy, activeSortByd]);

  const handleSort = (criterion) => {
    setSortBy(criterion);
  };
  const handleSortd = (criteriond) => {
    setSortBy(criteriond);
  };

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
  const [pricemin, setPricemin] = useState(10);
  const handleInputmin = (emin) => {
    setPricemin(emin.target.value);
  }
  const [pricemax, setPricemax] = useState(10);
  const handleInputmax = (emax) => {
    setPricemax(emax.target.value);
  }

  const divStyle = {
    transform: 'rotate(180deg)'
  };


  const toggleSortBy = (criterion) => {
    if (activeSortBy.includes(criterion)) {
      // If the criterion is already active, remove it
      setActiveSortBy(activeSortBy.filter((c) => c !== criterion));
    } else {
      // If the criterion is not active, add it
      setActiveSortBy([...activeSortBy, criterion]);
    }
  };
  const toggleSortByd = (criteriond) => {
    if (activeSortByd.includes(criteriond)) {
      // If the criterion is already active, remove it
      setActiveSortByd(activeSortByd.filter((c) => c !== criteriond));
    } else {
      // If the criterion is not active, add it
      setActiveSortByd([...activeSortByd, criteriond]);
    }
  };
  return (

    <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">


      {/* <button
        className={`sorting-button ${activeSortBy.includes('price') ? 'active-button' : ''}`}
        onClick={() => toggleSortBy('price')}
      >
        Sort by Price
      </button>
      <button
        className={`sorting-button ${activeSortBy.includes('rating') ? 'active-button' : ''}`}
        onClick={() => toggleSortBy('rating')}
      >
        Sort by rating
      </button> */}



      {/* <button
        className={activeSortBy.includes('price') ? 'active' : ''}
        onClick={() => toggleSortBy('price')}
      >
        Sort by Price
      </button>
      <button
        className={activeSortBy.includes('rating') ? 'active' : ''}
        onClick={() => toggleSortBy('rating')}
      >
        Sort by Rating
      </button> */}
      <div className="wt-haslayout wt-main-section">

        <div className="wt-haslayout">
          <div className="container">
            <div className="row">
              <div id="wt-twocolumns" className="wt-twocolumns wt-haslayout">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                  <aside id="wt-sidebar" className="wt-sidebar">
                    <div className="wt-widget wt-startsearch">
                      <div className="wt-widgettitle">
                        <h2>Start Your Search</h2>
                        {/* <button onClick={() => handleSort('price')}>Sort by Price</button>
                        <button onClick={() => handleSort('rating')}>Sort by Rating</button>
                        <button
                          className={sortBy === 'price' ? 'active' : ''}
                          onClick={() => handleSort('price')}
                        >
                          Sort by Price
                        </button>
                        <button
                          className={sortBy === 'rating' ? 'active' : ''}
                          onClick={() => handleSort('rating')}
                        >
                          Sort by Rating
                        </button> */}

                      </div>
                      <div className="wt-widgetcontent">
                        <form className="wt-formtheme wt-formsearch">
                          <fieldset>
                            <div className="form-group">
                              <input type="text" value={searchQuery}

                                onChange={handleSearchInputChange}
                                onKeyUp={handleChange} name="Search" className="form-control" placeholder="Search Company" />
                              <span href="javascrip:void(0);" className="wt-searchgbtn"><i className="lnr lnr-magnifier"></i></span>
                              {resultss && resultss.length > 0 && (
                                <div className="results-list">
                                  {resultss.map((result, id) => (
                                    <div className="search-result" key={id}>
                                      <Link to={`/single/${result.id}`}>{result.title}</Link>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                    <div className="wt-widget wt-effectiveholder">
                      <div className="wt-widgettitle">
                        <h2>Categories</h2>
                      </div>
                      <div className="wt-widgetcontent">
                        <form className="wt-formtheme wt-formsearch">
                          <fieldset>
                            <div className="form-group">
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
                          </fieldset>

                        </form>
                      </div>
                    </div>
                    <div className="wt-widget wt-effectiveholder">
                      <div className="wt-widgettitle">
                        <h2>Price Filter</h2>
                      </div>
                      <div className="wt-widgetcontent">
                        <form className="wt-formtheme wt-formsearch">
                          <fieldset>
                            <div className="form-group">
                              {/* <label htmlFor="minPrice">Max Price:</label>
                          <input
                            onInput={handleInput}
                            type="range"
                            min={10}
                            max={500}
                            step={10}
                            id="minPrice"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                          />
                          <h1>Price: <h1>Price: {price}</h1></h1> */}



                              <label for="mintemp">Choose a Max price:</label><br />
                              <h6>Max Price: {pricemin}</h6>
                              <input onInput={handleInputmin}
                                type="range"
                                min={0}
                                max={100}
                                step={20}
                                id="minPrice"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)} name="mintemp" list="values" />

                              <datalist id="mintemp">
                                <option value="0" label="0$"></option>
                                {/* <option value="20" label="20$"></option>
                                <option value="40" label="40$"></option> */}
                                <option value="50" label="50$"></option>
                                {/* <option value="70" label="70"></option>
                                <option value="80" label="80"></option>
                                <option value="90" label="90"></option> */}
                                <option value="100" label="100$"></option>
                              </datalist>

                              {/* 
                          <label for="maxtemp">Choose a max price:</label><br />
                          <h6>max Price: {pricemax}</h6>
                          <input onInput={handleInputmax}
                            style={divStyle}
                            type="range"

                            min={0}
                            max={100}
                            step={20}
                            // id="minPrice"
                            value={maxPrice}
                            onChange={(emax) => setMaxPrice(emax.target.value)} name="maxtemp" list="maxtemp" />

                          <datalist id="maxtemp"> */}
                              {/* <option value="0" label="0"></option>
                            <option value="20" label="20"></option>
                            <option value="40" label="40"></option>
                            <option value="60" label="60"></option>
                            <option value="70" label="70"></option>
                            <option value="80" label="80"></option>
                            <option value="90" label="90"></option>
                            <option value="100" label="100"></option> */}
                              {/* <option value="0" label="0"></option>
                            <option value="80" label="20"></option>
                            <option value="60" label="40"></option>
                            <option value="40" label="60"></option>
                            <option value="20" label="80"></option>
                            <option value="0" label="100"></option>

                       

                          </datalist> */}
                            </div>
                          </fieldset>

                        </form>
                      </div>
                    </div>
                    <div className="wt-widget wt-effectiveholder">
                      <div className="wt-widgettitle">
                        <h2>Order By</h2>
                      </div>
                      <div className="wt-widgetcontent">
                        {/* <form className="wt-formtheme wt-formsearch"> */}
                        <fieldset style={{ border: 'none' }}>
                          <div className="wt-checkboxholder" style={{ marginTop: '-10px' }}>
                            {/* <span className="wt-checkbox">
                                <input id="proindependent" type="checkbox" name="description" value="company" checked=""/>
                                  <label for="proindependent">All Types</label>
                              </span>
                              <span className="wt-checkbox">
                          
                              </span> */}
                            <span className="wt-checkbox " >
                              <input className={`sorting-button ${activeSortBy.includes('buyers') ? 'active-button' : ''}`}
                                onClick={() => toggleSortBy('buyers')} id="independent" type="checkbox" name="description" value="company" />
                              <label for="independent"> Number Sold Asc</label>
                            </span>
                            <br></br>
                            <span className="wt-checkbox" >
                              <input className={`sorting-button ${activeSortByd.includes('buyers') ? 'active-button' : ''}`}
                                onClick={() => toggleSortByd('buyers')} id="independentd" type="checkbox" name="description" value="company" />
                              <label for="independentd"> Number Sold Desc</label>
                            </span>
                            <span className="wt-checkbox">
                              <input id="agency" type="checkbox" name="description" value="company" className={`sorting-button ${activeSortBy.includes('rating') ? 'active-button' : ''}`}
                                onClick={() => toggleSortBy('rating')} />
                              <label for="agency">Rating Asc</label>
                            </span>
                            <br></br>
                            <span className="wt-checkbox">
                              <input id="agencyd" type="checkbox" name="descriptiond" value="company" className={`sorting-button ${activeSortByd.includes('rating') ? 'active-button' : ''}`}
                                onClick={() => toggleSortByd('rating')} />
                              <label for="agencyd">Rating Desc</label>
                            </span>
                            <span className="wt-checkbox">

                              <input className={`sorting-button ${activeSortBy.includes('rating') ? 'active-button' : ''}`}
                                onClick={() => toggleSortBy('price')} id="rising" type="checkbox" name="description" value="company" />
                              <label for="rising"> Price Asc</label>
                            </span>
                            <br></br>
                            <span className="wt-checkbox">

                              <input className={`sorting-button ${activeSortByd.includes('rating') ? 'active-button' : ''}`}
                                onClick={() => toggleSortByd('price')} id="rising" type="checkbox" name="description" value="company" />
                              <label for="rising"> Price Desc</label>
                            </span>

                            {/* <span className="wt-checkbox">
                              
                              <input className={`sorting-button ${activeSortBy.includes('created_at') ? 'active-button' : ''}`}
                                onClick={() => toggleSortBy('created_at')} id="created_at" type="checkbox" name="description" value="company"/>
                              <label for="created_at">Created Date Asc</label>
                              </span>
                            <br></br>
                              <span className="wt-checkbox">
                              
                              <input className={`sorting-button ${activeSortByd.includes('created_at') ? 'active-button' : ''}`}
                                onClick={() => toggleSortByd('created_at')} id="created_atd" type="checkbox" name="descriptiond" value="companyd"/>
                              <label for="created_atd">Created Date Desc</label>
                              </span> */}

                          </div>
                        </fieldset>
                        {/* </form> */}

                      </div>
                    </div>




                  </aside>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                  <div className="wt-userlistingholder wt-haslayout">
                    <div className="wt-userlistingtitle">
                      <span>01 - 48 of {project.length} results for <em>""</em></span>
                    </div>

                    <div className="wt-companysinfoholder">
                      <div className="row">
                        {displayedProjects.map((item) => (
                          <div className="col-12 col-sm-12 col-md-12 col-lg-4" key={item.id}>
                            <div className="wt-companysdetails">
                              <figure className="wt-companysimg">
                                <img src={item.image} style={{ height: '100px' }} alt="img description" />
                              </figure>
                              <div className="wt-companysinfo">
                                <figure>
                                  <img src={item.image2} style={{ height: '60px' }} alt="img description" />
                                </figure>
                                <div className="wt-title">
                                  <a href="javascript:void(0);"/>
                                    {/* <Stack style={{ paddingLeft: '20px' }} spacing={1}>

                                      <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                    </Stack>
                                  </a>
                                  <div className="search-result" key={id}>
                                    <Link to={`/single/${item.id}`}><h2>{item.title}</h2></Link>
                                  </div>
                                  {/* <h2>{item.title}</h2> */}
                                    {/* <p>desc{item.desc}</p> */}
                                    <ul class="wt-postarticlemeta">
                                      {/* <li><a>Rating: {item.rating}</a></li> */}
                                      <li><a>Price: {item.price}$</a></li>
                                      {/* <li><a>Delevered in: {item.deadline} days</a></li> */}
                                      {/* <li><a>Deadline: {item.deadline} days</a></li>
                                    <li><a>Buys:{item.buyers}</a></li>
                                  <li><a>Status: {item.status}</a></li> */}


                                    </ul>
                                </div>
                                <ul className="wt-postarticlemeta">
                                  <li>
                                    <a href="javascript:void(0)">
                                      <span>{item.buyers} Sold</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)">
                                      <span>In: {item.deadline} days</span>
                                    </a>
                                  </li>
                                  <li classNameName="wt-following">
                                    <a href="javascript:void(0)">
                                      <span style={{ color: item.status === 'active' ? 'lightgreen' : 'red' }}>
                                        {item.status}
                                      </span>
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
                        containerclassName={'pagination'}
                        subContainerclassName={'pages pagination'}
                        activeclassName={'active'}
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}