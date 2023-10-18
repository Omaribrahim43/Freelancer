import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


function UserDetails() {
  const [userData, setUserData] = useState([]);
  const user = useSelector((state) => state.user);

  // Function to fetch user data
//   const fetchUserData = () => {
//     axios.get("http://127.0.0.1:8000/api/users/1")
//       .then((response) => {
//         setUserData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []); 

  return (
    <div
      className="wt-personalskillshold tab-pane active fade show"
      id="wt-skills"
    >
      <div className="wt-yourdetails wt-tabsinfo">
        <div className="wt-tabscontenttitle">
          <h2>Your Details</h2>
        </div>
        <form className="wt-formtheme wt-userform">
          <fieldset>
            <div className="form-group form-group-half">
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="First Name"
                value={user.first_name}
              />
            </div>
            <div className="form-group form-group-half">
              <input
                type="email"
                name="last_name"
                className="form-control"
                placeholder="Last Name"
                // value={userData.last_name}
              />
            </div>
            <div className="form-group form-group-half">
              <input
                type="number"
                name="age"
                className="form-control"
                placeholder="Age"
                // value={userData.age}
              />
            </div>
            <div className="form-group form-group-half">
              <span className="wt-select">
                <select name="gender">
                  <option value={user.gender} disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </span>
            </div>
            <div className="form-group ">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                // value={userData.username}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                // value={userData.email}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="number"
                className="form-control"
                placeholder="Phone Number"
                // value={userData.contact_info}
              />
            </div>

            <div className="form-group">
              <textarea
                name="bio"
                className="form-control"
                placeholder="Bio"
                // value={userData.Bio}
              ></textarea>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="wt-profilephoto wt-tabsinfo">
        <div className="wt-tabscontenttitle">
          <h2>Profile Photo</h2>
        </div>
        <div className="wt-profilephotocontent">
          <div className="wt-description">
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua aut enim ad minim veniamac quis
              nostrud exercitation ullamco laboris.
            </p>
          </div>
          <form className="wt-formtheme wt-formprojectinfo wt-formcategory">
            <fieldset>
              <div className="form-group form-group-label">
                <div className="wt-labelgroup">
                  <label for="filep">
                    <span className="wt-btn">Select Files</span>
                    <input type="file" name="file" id="filep" />
                  </label>
                  <span>Drop files here to upload</span>
                  <em className="wt-fileuploading">
                    Uploading<i className="fa fa-spinner fa-spin"></i>
                  </em>
                </div>
              </div>
              <div className="form-group">
                <ul className="wt-attachfile wt-attachfilevtwo">
                  <li className="wt-uploadingholder wt-companyimg-uploading">
                    <div className="wt-uploadingbox">
                      <figure>
                        <img
                          src="/images/company/img-07.jpg"
                          alt="img description"
                        />
                      </figure>
                      <div className="wt-uploadingbar wt-uploading">
                        <span className="uploadprogressbar"></span>
                        <span>Profile Photo.jpg</span>
                        <em>
                          File size: 300 kb
                          <a
                            href="javascript:void(0);"
                            className="lnr lnr-cross"
                          ></a>
                        </em>
                      </div>
                    </div>
                  </li>
                  <li className="wt-uploadingholder wt-companyimg-user">
                    <div className="wt-uploadingbox">
                      <figure>
                        <img
                          src="/images/company/img-08.jpg"
                          alt="img description"
                        />
                      </figure>
                      <div className="wt-uploadingbar wt-uploading">
                        <span className="uploadprogressbar"></span>
                        <span>Profile Photo.jpg</span>
                        <em>
                          File size: 300 kb
                          <a
                            href="javascript:void(0);"
                            className="lnr lnr-cross"
                          ></a>
                        </em>
                      </div>
                    </div>
                  </li>
                  <li className="wt-uploadingholder">
                    <div className="wt-uploadingbox">
                      <div className="wt-designimg">
                        <input
                          id="demoz"
                          type="radio"
                          name="employees"
                          value="company"
                          checked
                        />
                        <label for="demoz">
                          <img
                            src="/images/company/img-09.jpg"
                            alt="img description"
                          />
                          <i className="fa fa-check"></i>
                        </label>
                      </div>
                      <div className="wt-uploadingbar wt-uploading">
                        <span className="uploadprogressbar"></span>
                        <span>Profile Photo.jpg</span>
                        <em>
                          File size: 300 kb
                          <a
                            href="javascript:void(0);"
                            className="lnr lnr-cross"
                          ></a>
                        </em>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
