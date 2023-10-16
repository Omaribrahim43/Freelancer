import React from "react";

function Sidebar() {
  return (
    <aside id="wt-sidebar" className="wt-sidebar">
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
      </div>
      <div className="wt-widget wt-effectiveholder">
        <div className="wt-widgettitle">
          <h2>Location</h2>
        </div>
        <div className="wt-widgetcontent">
          <form className="wt-formtheme wt-formsearch">
            <fieldset>
              <div className="form-group">
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="Search Location"
                />
                <a href="javascript:void(0);" className="wt-searchgbtn">
                  <i className="lnr lnr-magnifier"></i>
                </a>
              </div>
            </fieldset>
            <fieldset>
              <div className="wt-checkboxholder wt-verticalscrollbar">
                <span className="wt-checkbox">
                  <input
                    id="wt-description"
                    type="checkbox"
                    name="description"
                    value="company"
                    checked
                  />
                  <label for="wt-description">
                    {" "}
                    <img
                      src="images/flag/img-01.png"
                      alt="img description"
                    />{" "}
                    Australia
                  </label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="us"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="us">
                    {" "}
                    <img
                      src="images/flag/img-02.png"
                      alt="img description"
                    />{" "}
                    United States
                  </label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="canada"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="canada">
                    {" "}
                    <img
                      src="images/flag/img-03.png"
                      alt="img description"
                    />{" "}
                    Canada
                  </label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="england"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="england">
                    {" "}
                    <img
                      src="images/flag/img-04.png"
                      alt="img description"
                    />{" "}
                    England
                  </label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="emirates"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="emirates">
                    {" "}
                    <img
                      src="images/flag/img-05.png"
                      alt="img description"
                    />{" "}
                    United Emirates
                  </label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="wt-description1"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="wt-description1">
                    {" "}
                    <img
                      src="images/flag/img-01.png"
                      alt="img description"
                    />{" "}
                    Australia
                  </label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="us1"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="us1">
                    {" "}
                    <img
                      src="images/flag/img-02.png"
                      alt="img description"
                    />{" "}
                    United States
                  </label>
                </span>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="wt-widget wt-effectiveholder">
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
      </div>
      <div className="wt-widget wt-effectiveholder">
        <div className="wt-widgettitle">
          <h2>Job Type</h2>
        </div>
        <div className="wt-widgetcontent">
          <form className="wt-formtheme wt-formsearch">
            <fieldset>
              <div className="wt-checkboxholder">
                <span className="wt-checkbox">
                  <input
                    id="proindependent"
                    type="checkbox"
                    name="description"
                    value="company"
                    checked
                  />
                  <label for="proindependent">All Types</label>
                </span>
                <span className="wt-checkbox">
                  <input
                    id="proagency"
                    type="checkbox"
                    name="description"
                    value="company"
                  />
                  <label for="proagency"> Featured Jobs</label>
                </span>
                <span className="wt-checkbox">
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
                </span>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
