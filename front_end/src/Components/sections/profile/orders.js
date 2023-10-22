import React from 'react';
import { useSelector } from "react-redux";


function Orders() {
    const user = useSelector((state) => state.user);

  return (
    <div
      className="wt-personalskillshold tab-pane active fade show"
      id="wt-Orders"
    >
      <div className="wt-yourdetails">
        <div className="wt-tabscontenttitle">
          <h2>All My Orders</h2>
        </div>
        <div className="wt-dashboradsaveitem">
          {user.order.map((order, index) => (
            <div
              className="wt-userlistinghold wt-featured wt-dashboradsaveditems"
              key={index}
            >
              <span className="wt-dashboardsavetag wt-featuredtag">
                <img
                  src="images/featured.png"
                  alt="img description"
                  data-tipso="Plus Member"
                  className="template-content tipso_style"
                />
              </span>
              <div className="wt-userlistingcontent">
                <div className="wt-contenthead wt-dashboardsavehead">
                  <div className="wt-title">
                    <a href="usersingle.html">
                      <i className="fa fa-check-circle"></i><span style={{fontWeight:"lighter", fontSize:"20px"}}> {order.project.title}</span> 
                      <p style={{marginTop:"8px"}}>{order.project.desc}</p>
                    </a>
                  </div>
                  <ul className="wt-saveitem-breadcrumb wt-userlisting-breadcrumb">
                    <li>
                      <span className="wt-dashboraddoller">
                        <i className="fa fa-dollar-sign"></i>{" "}
                        {order.payment_method}: {order.amount} JD
                      </span>
                    </li>
                    {/* <li>
                      <span>
                        <img
                          src="images/flag/img-04.png"
                          alt="img description"
                        />{" "}
                        England
                      </span>
                    </li> */}
                    {/* <li>
                      <a
                        href="javascript:void(0);"
                        className="wt-clicksavefolder"
                      >
                        <i className="far fa-folder"></i> Type: Per Fixed
                      </a>
                    </li> */}
                    <li>
                      <span className="wt-dashboradclock">
                        <i className="far fa-clock"></i> Duration:{" "}
                        {order.duration} days
                      </span>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="black">
                        <i className="fa fa-star text-warning"> </i>{" "}
                        {order.project.rating} Stars
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Orders;
