import React from "react";
import UserDetails from "./userDetails";
import Buyers from "./buyers";
import Password from "./password";

function Content() {
  return (
    
    <main id="wt-main" className="wt-main wt-haslayout">
      
      {/* Register Form Start */}
      <section className="wt-haslayout">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
            <div className="wt-haslayout wt-dbsectionspace">
              <div className="wt-dashboardbox wt-dashboardtabsholder">
                <div className="wt-dashboardboxtitle">
                  <h2>My Profile</h2>
                </div>
                <div className="wt-dashboardtabs">
                  <ul className="wt-tabstitle nav navbar-nav">
                    <li className="nav-item">
                      <a className="active" data-toggle="tab" href="#wt-skills">
                        Personal Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-toggle="tab" href="#wt-education">
                        Experience &amp; Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a data-toggle="tab" href="#wt-awards">
                        Change Password
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="wt-tabscontent tab-content">
                  {/* Personal Details start */}
                  <UserDetails />
                  {/* Personal Details end */}

                  {/* Buyers start */}
                  <Buyers />
                  {/* Buyers end */}

                  {/* password start */}
                  <Password />
                  {/* password end */}
                </div>
              </div>
            </div>
            {/* <div className="wt-updatall">
              <i className="ti-announcement"></i>
              <span>
                Update all the latest changes made by you, by just clicking on
                "Save & Continue" button.
              </span>
              <button className="wt-btn" onClick={handleSaveAndUpdate}>
                Save & Update
              </button>
            </div> */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="wt-haslayout wt-dbsectionspace wt-codescansidebar">
              <div className="tg-authorcodescan wt-codescanholder"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Register Form End */}
    </main>
  );
}

export default Content;
