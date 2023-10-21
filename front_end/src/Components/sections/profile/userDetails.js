import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios/axios";
import { loginSuccess } from "../../../redux/action";
import { useDispatch } from "react-redux";

function UserDetails() {
  const user = useSelector((state) => state.user);
  const login = useSelector((state) => state.isAuthenticated);
  const [responseData, setResponseData] = useState({});
  //   const userId = user.id;
  const dispatch = useDispatch;

  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateUser = async (param) => {
    param.preventDefault();
    const csrfResponse = await axios.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;

    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    await axios
      .put(`/users/update/${user.id}`, formData)
      .then((response) => {
        console.log("User data updated successfully");
        console.log(response);
        setResponseData(response.data);

        // Dispatch the login success action with the updated user data
        dispatch(loginSuccess(response.data.user));

        alert("User data updated successfully");
      })
      .catch((error) => {
        console.log(formData);
        console.error("Error updating user data:", error);
      });

    console.log(responseData);
  };

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
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group form-group-half">
              <input
                type="number"
                name="age"
                className="form-control"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-group-half">
              <span className="wt-select">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </span>
            </div>
            <div className="form-group form-group-half">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contact_info"
                className="form-control"
                placeholder="Phone Number"
                value={formData.contact_info}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="Bio"
                className="form-control"
                placeholder="Bio"
                value={formData.Bio}
                onChange={handleInputChange}
              />
            </div>

            {/* <div className="form-group">
              <input
                type="password"
                name="password" // New password field
                className="form-control"
                placeholder="New Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div> */}
          </fieldset>
        </form>
        <br />
        <br />
        <br />
        <div className="wt-profilephoto wt-tabsinfo">
          <div className="wt-tabscontenttitle">
            <h2>Profile Photo</h2>
          </div>
          <div className="wt-profilephotocontent">
            <div className="wt-description">
              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua aut enim ad minim veniamac quis
                nostrud exercitation ullamco laboris.
              </p>
            </div>
            <form className="wt-formtheme wt-formprojectinfo wt-formcategory">
              <fieldset>
                <div className="form-group form-group-label">
                  <div className="wt-labelgroup">
                    <label htmlFor="filep">
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
                    {/* <li className="wt-uploadingholder wt-companyimg-uploading">
                      <div className="wt-uploadingbox">
                        <figure>
                          <img
                            src="images/company/img-07.jpg"
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
                            src="images/company/img-08.jpg"
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
                    </li> */}
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
                          <label htmlFor="demoz">
                            <img
                              src="images/company/img-09.jpg"
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
      <div className="wt-updatall">
        <i className="ti-announcement"></i>
        <span>
          Update all the latest changes made by you, by just clicking on "Save &
          Continue" button.
        </span>
        <button className="wt-btn" onClick={updateUser}>
          Save & Update
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
