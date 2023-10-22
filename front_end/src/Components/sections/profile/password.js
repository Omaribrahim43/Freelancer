import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../../axios/axios";

export default function PasswordChange() {
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [userOldPassword, setUserOldPassword] = useState("");

  useEffect(() => {
    axios
      .get(`/users/${user.id}`)
      .then((response) => {
        setUserOldPassword(response.data.password);
        console.log(response.data.password);
      })
      .catch((error) => {
        console.error("Error fetching old password:", error);
      });
  }, [user.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangePassword = async (param) => {
    param.preventDefault();
    const csrfResponse = await axios.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;

    if (formData.oldPassword !== userOldPassword) {
      setErrors({ oldPassword: "Old password is incorrect" });
      
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({
        confirmPassword: "New password and confirmation do not match",
      });
      return;
    }

    setErrors({}); // Clear previous errors.

    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    try {
      const response = await axios.put(`/users/updatepass/${user.id}`, {
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      });
      console.log("Password changed successfully");
      alert("Password changed successfully");
      setUserPass(formData.newPassword);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error); 
      } else {
        setError("An error occurred.");
      }
      console.error("Error updating password:", error);
    }
  };

  return (
    
    <div className="wt-awardsholder tab-pane fade" id="password">
      <div className="wt-yourdetails wt-tabsinfo">
        <div className="wt-tabscontenttitle">
          <h2>Change Password</h2>
        </div>
        <form
          className="wt-formtheme wt-userform"
          onSubmit={handleChangePassword}
        >
          <fieldset>
            <div className="form-group">
              <input
                type="password"
                name="oldPassword"
                className="form-control"
                placeholder="Old Password"
                value={formData.oldPassword}
                onChange={handleInputChange}
              />
              {errors.oldPassword && (
                <div className="text-danger">{errors.oldPassword}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="newPassword"
                className="form-control"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
              {errors.newPassword && (
                <div className="text-danger">{errors.newPassword}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <div className="text-danger">{errors.confirmPassword}</div>
              )}
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button type="submit" className="wt-btn">
              Save & Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
