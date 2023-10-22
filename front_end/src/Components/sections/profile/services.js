import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Services() {
  const user = useSelector((state) => state.user);

  // Define a state variable to track the projects
  const [projects, setProjects] = useState(user.projects);

  // Function to delete a project by its ID
  const deleteProject = (projectId) => {
    // Filter out the project to be deleted
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );
    setProjects(updatedProjects);
    console.log(updatedProjects);
  };

  return (
    <div id="wt-Services">
      <div class="wt-tabscontenttitle wt-addnew">
        <h2>Manage My Services</h2>
        <a href="/add-service" className="btn-link">
          Add New
        </a>
      </div>
      {user.projects.map((project, index) => (
        <div
          className="wt-userlistinghold wt-featured wt-userlistingholdvtwo"
          key={index}
          style={{ border: "1pt solid #00000012" }}>
          <span className="wt-featuredtag">
            <img
              src="images/featured.png"
              alt="img description"
              data-tipso="Plus Member"
              className="template-content tipso_style"
            />
          </span>
          <div className="wt-userlistingcontent">
            <div className="wt-contenthead">
              <div className="wt-title">
                <a href="usersingle.html">
                  <i className="fa fa-check-circle"></i> {project.status}
                </a>
                <h2>{project.title}</h2>
              </div>
              <div className="wt-description" style={{ width: "250px" }}>
                <p>{project.desc}</p>
              </div>
            </div>
            <div className="wt-viewjobholder">
              <ul>
                <li>
                  <span>
                    <i className="fa fa-dollar-sign wt-viewjobdollar"></i>
                    {project.price} JD
                  </span>
                </li>

                <li>
                  <span>
                    <i className="far fa-folder wt-viewjobfolder"></i>Type:{" "}
                    {project.category.name}
                  </span>
                </li>
                <li>
                  <span>
                    <i className="far fa-clock wt-viewjobclock"></i>
                    Deadline: {project.deadline} days
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-user dark"></i> Clients:{" "}
                    {project.buyers}
                    person
                  </span>
                </li>
                <li>
                  <a href="javascript:void(0);" className="black ">
                    <i className="fa fa-star text-warning"></i> Rating:{" "}
                    {project.rating}
                  </a>
                </li>
                <li className="wt-btnarea">
                  <div
                    className="wt-accordioninnertitle"
                    style={{ border: "0px" }}>
                    <div className="wt-rightarea">
                      {/* <a
                        href="javascript:void(0)"
                        className="wt-addinfo wt-skillsaddinfo"
                        id="accordioninnertitle"
                        data-toggle="collapse"
                        data-target="#innertitle"
                        aria-expanded="true"
                        style={{ width: "60px" }}
                      >
                        <i className="lnr lnr-pencil"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="wt-deleteinfo"
                        style={{ width: "60px" }}
                      >
                        <i className="lnr lnr-trash"></i>
                      </a> */}
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        style={{ width: "60px" }}>
                        <i className="lnr lnr-pencil"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        style={{ width: "60px", marginLeft: "5px" }}>
                        <i className="lnr lnr-trash"></i>
                      </button>
                    </div>
                  </div>

                  {/* <button
                    className="wt-btn"
                    style={{
                      marginTop: "3px",
                      fontSize: "12px",
                    }}
                    onClick={() => deleteProject(project.id)}
                  >
                    Delete Service
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
