import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function CustomerReviews({ id }) {
    // const tourid = id;
    // sessionStorage.setItem("tourid", tourid);
    // const tourId = id;

    // const { isLoggedIn } = useContext(MyContext);
    // const [registerData, setRegisterData] = useState({
    //   userId: "",
    //   name: "",
    //   tourId: sessionStorage.getItem("tourid"), // Initialize with props value
    //   categoryId: "",
    //   comment: "",
    //   rating: "1", // Initialize the rating with a default value
    // });
    // const [filteredData, setFilteredData] = useState([]);

    // useEffect(() => {
    //     fetchReviewsByTourId(tourid);
    //     fetchUserData();
    // }, []);

    const fetchReviewsByTourId = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/reviews",
                {

                }
            );

            // if (response.status === 200) {
            //   const reviews = response.data;
            //   const filteredReviews = reviews.filter(
            //     (item) => item.tourId === sessionStorage.getItem("tourid")
            //   );

            //   setFilteredData(filteredReviews);
            // } else {
            //   console.error("Failed to fetch reviews");
            //   return [];
            // }
        } catch (error) {
            console.error("Error fetching reviews:", error);
            return [];
        }
    };

    // async function fetchUserData() {
    //   try {
    //     const data = await fetchData(sessionStorage.getItem("userid"));
    //     setRegisterData({
    //       userId: data.id,
    //       name: data.name,
    //       tourId: sessionStorage.getItem("tourid"),
    //       categoryId: sessionStorage.getItem("category"),
    //       comment: "",
    //       rating: "1", // Initialize the rating with a default value
    //     });
    //   } catch (error) {
    //     // Handle error
    //   }
    // }

    // const handleRatingChange = (e) => {
    //     const selectedValue = e.target.value;
    //     setRegisterData({ ...registerData, rating: selectedValue });
    // };

    // const handleInputChange = (e) => {
    //     const { id, value } = e.target;
    //     setRegisterData({
    //         ...registerData,
    //         [id]: value,
    //     });
    //     // console.log(registerData);
    // };

    // const submit = (e) => {
    //     e.preventDefault(); // Prevent form submission

    //     axios
    //         .post(
    //             "http://127.0.0.1:8000/api/reviews/add",
    //             registerData
    //         )
    //         .then((response) => {
    //             if (response.status === 201) {
    //                 Swal.fire({
    //                     icon: "success",
    //                     title: "Review Added",
    //                     text: "Your review has been added successfully!",
    //                 });
    //                 fetchReviewsByTourId(tourid);
    //             } else {
    //                 console.error("Failed to add review");
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error adding review:", error);
    //         });
    // };

    return (
        <div className="container">
            {/* {isLoggedIn ? (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="write_your_review_wrapper">
                            <h3 className="heading_theme">Write your review</h3>
                            <div className="write_review_inner_boxed">
                                <form onSubmit={(e) => submit(e)}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group col-lg-12">
                                                <h3>Rating:</h3>
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                />

                                                <Rating
                                                    name="simple-controlled"
                                                    value={registerData.rating}
                                                    onChange={handleRatingChange}
                                                />
                                                <br />
                                                <br />

                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    id="comment"
                                                    rows="6"
                                                    placeholder="Write your comments"
                                                    className="form-control bg_input"
                                                    onChange={(e) => handleInputChange(e)}></textarea>
                                            </div>
                                            <br></br>
                                            <div className="comment_form_submit">
                                                <button type="submit" className="btn btn_theme btn_md">
                                                    Post comment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {" "}
                    <div className="all_review_wrapper">
                        <h3 className="heading_theme">
                            If you want to add your review Please login
                        </h3>
                    </div>
                    <div className="col-lg-4">
                        <NavLink to="/login" className="btn btn_theme btn_md">
                            Login
                        </NavLink>
                    </div>
                </div>
            )} */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="all_review_wrapper">
                        <h3 className="heading_theme">All review</h3>
                    </div>
                </div>
                {/* {filteredData.map((ele) => (
                    <div className="col-lg-4 col-md-6" key={ele.id}>
                        <div className="all_review_box">

                            <div className="all_review_text">
                                <img src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt="img" />






                                <h4>{ele.name}</h4>
                                <div className="review_star_all">
                                    {Array(5).fill().map((_, index) => (
                                        <i key={index} className={index < ele.rating ? "fas fa-star" : "far fa-star"}></i>
                                    ))}
                                </div>
                                <p>{ele.comment}</p>
                            </div>

                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default CustomerReviews;
