import { NavLink } from "react-router-dom";
import UseReadApi from "../../../coustmHooks/UseReadapi";
import React, { useEffect } from "react";
import { Button } from "bootstrap";

const categories = [
  // Replace with your category data
  {
    id: 1,
    name: "Category 1",
    description: "Description for Category 1",
    image: "category1.jpg",
  },
  {
    id: 2,
    name: "Category 2",
    description: "Description for Category 2",
    image: "category2.jpg",
  },
  // Add more categories as needed
];

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
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
              <div className="wt-sectionhead wt-textcenter">
                <div className="wt-sectiontitle">
                  <h2>Explore Categories</h2>
                  <span>Professional by categories</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {categories.slice(0, 3).map((category) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                key={category.id}
              >
                <div className="wt-categorycontent">
                  <figure>
                    <img src={category.image} alt="image description" />
                  </figure>
                  <div className="wt-cattitle">
                    <h3>
                      <a href="javascript:void(0);">{category.name}</a>
                    </h3>
                  </div>
                  <div className="wt-categoryslidup">
                    <p className="category-description">
                      {category.description}
                    </p>
                    <NavLink
                      to={`services/${category.id}`}
                      className="explore-link"
                    >
                      Explore <i className="fa fa-arrow-right" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center">
              <div className="wt-btnarea" style={{ marginTop: "40px" }}>
                <a href="javascript:void(0)" className="wt-btn">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}