import { NavLink } from "react-router-dom";
import UseReadApi from "../../../coustmHooks/UseReadapi";
import React, { useEffect } from "react";

export default function Category() {
  const [categories, getFetch] = UseReadApi(
    "http://127.0.0.1:8000/api/categories"
  );

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <section className="wt-haslayout wt-main-section">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
              <div className="wt-sectionhead wt-textcenter">
                <div className="wt-sectiontitle">
                  <h2>Explore Categories</h2>
                  <span>Professional by categories</span>
                </div>
              </div>
            </div>
            <div className="wt-categoryexpl">
              {categories.map((catygory) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left">
                  <div className="wt-categorycontent">
                    <figure>
                      <img src={catygory.image} alt="image description" />
                    </figure>
                    <div className="wt-cattitle">
                      <h3>
                        <a href="javascrip:void(0);">{catygory.name}</a>
                      </h3>
                    </div>
                    <div className="wt-categoryslidup">
                      <p>{catygory.description}</p>
                      <NavLink to={`services/${catygory.id}`}>
                        Explore <i className="fa fa-arrow-right" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                <div className="wt-btnarea">
                  <a href="javascript:void(0)" className="wt-btn">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
