import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "/xampp/htdocs/Freelancer/front_end/src/redux/action"; // Adjust the import path

function UserDetails() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(formData);
  const updateUser = () => {
    // Dispatch the action to update user data in Redux
    dispatch(loginSuccess(formData));
    // console.log(dispatch(loginSuccess(formData)));
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
                name="first_name"
                className="form-control"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group form-group-half">
              <input
                type="text"
                name="last_name"
                className="form-control"
                placeholder="Last Name"
                value={formData.last_name}
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
            <div className="form-group ">
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
          </fieldset>
        </form>
      </div>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UserDetails;
