import React from "react";
import UserDetails from "./userDetails";
import Orders from "./orders";
import Services from "./services";
import Password from "./password";
import { useSelector } from "react-redux";

function Content() {
  const user = useSelector((state) => state.user);

  return (
    <main id="wt-main" className="wt-main wt-haslayout">
      <section className="wt-haslayout">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-10">
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
                      <a
                        data-toggle="tab"
                        href={
                          user.role === "client" ? "#wt-Orders" : "#wt-Services"
                        }
                      >
                        {user.role === "client" ? "My Orders" : "My Services"}
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <a data-toggle="tab" href="#wt-ServicesOrOreders">
                        My Orders
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a data-toggle="tab" href="#password">
                        Change Password
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="wt-tabscontent tab-content">
                  <UserDetails />
                  {/* <Orders /> */}
                  {/* <Services /> */}
                  {user.role === "client" ? <Orders /> : <Services />}

                 
                  <Password />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
