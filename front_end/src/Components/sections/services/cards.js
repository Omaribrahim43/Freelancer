import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchInput from './SearchInput';

function Cards() {
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

  return (
    <div className="wt-userlistingholder wt-haslayout">
      <div className="wt-widget wt-startsearch">
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
      </div>
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
  );
}

export default Cards;