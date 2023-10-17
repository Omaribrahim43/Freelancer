import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AddService() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categories');
                setCategory(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])
    const [project, setProject] = useState({
        seller_id: '',
        category_id: '',
        title: '',
        image: '',
        price: '',
        deadline: '',
        desc: ''
    });

    const navigate = useNavigate();
    const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('seller_id', project.seller_id);
        formData.append('category_id', project.category_id);
        formData.append('title', project.title);
        formData.append('price', project.price);
        formData.append('desc', project.desc);
        formData.append('deadline', project.deadline);
        if (project.image) {
            formData.append('image', project.image);
        }

        console.log("FormData seller_id:", project.seller_id);
        console.log("FormData category_id:", project.category_id);
        console.log("FormData title:", project.title);
        console.log("FormData price:", project.price);
        console.log("FormData deadline:", project.deadline);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/projects/create', formData);

            if (response.data.errors) {
                setError(response.data.errors);
            } else {
                alert('Project added successfully!!');
                navigate('/services');
            }
        } catch (error) {
            console.error('API request error:', error);
            alert('An error occurred while adding the project.');
        }
    }
    return (
        <>
            <Header />
            <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
                <div className="wt-contentwrapper">
                    <main id="wt-main" className="wt-main wt-haslayout">
                        <section className="wt-haslayout wt-dbsectionspace">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 float-left">
                                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="wt-formtheme wt-userform wt-userformvtwo">
                                        <div className="wt-dashboardbox">
                                            <div className="wt-dashboardboxtitle">
                                                <h2>Post a Job</h2>
                                            </div>
                                            <div className="wt-dashboardboxcontent">
                                                <div className="wt-jobdescription wt-tabsinfo">
                                                    <div className="wt-tabscontenttitle">
                                                        <h2>Job Description</h2>
                                                    </div>
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <label htmlFor="image">Upload Image:</label>
                                                            <input
                                                                type="file"
                                                                id="image"
                                                                name="image"
                                                                accept="image/*"
                                                                className="form-control"
                                                                onChange={(e) => {
                                                                    setProject((prev) => ({
                                                                        ...prev,
                                                                        image: e.target.files[0] // Store the selected image file
                                                                    }));
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                onChange={(e) => {
                                                                    setProject((prev) => ({
                                                                        ...prev, seller_id: e.target.value
                                                                    }))
                                                                }} type="number" name="seller_id" className="form-control" placeholder="seller ID" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                onChange={(e) => {
                                                                    setProject((prev) => ({
                                                                        ...prev, title: e.target.value
                                                                    }))
                                                                }} type="text" name="title" className="form-control" placeholder="Job Title" />
                                                        </div>
                                                        <div className="form-group form-group-half wt-formwithlabel">
                                                            <span className="wt-select">
                                                                <label for="selectoption">Categories:</label>
                                                                <select name="category_id"
                                                                    onChange={(e) => {
                                                                        setProject((prev) => ({
                                                                            ...prev, category_id: e.target.value
                                                                        }))
                                                                    }}
                                                                >
                                                                    <option value="">Select a category</option>
                                                                    {category.map((item, index) => (
                                                                        <option key={index} value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="form-group form-group-half wt-formwithlabel">
                                                            <span className="wt-select">
                                                                <label for="selectoption">Job Duration:</label>
                                                                <select name="deadline"
                                                                    onChange={(e) => {
                                                                        setProject((prev) => ({
                                                                            ...prev, deadline: e.target.value
                                                                        }))
                                                                    }}
                                                                >
                                                                    <option value="">Select a duration</option>
                                                                    <option value="3">3 days</option>
                                                                    <option value="5">5 days</option>
                                                                    <option value="7">1 week</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="form-group">
                                                            <input onChange={(e) => {
                                                                setProject((prev) => ({
                                                                    ...prev, price: e.target.value
                                                                }))
                                                            }} type="number" name="price" className="form-control" placeholder="Price" />
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea name="desc" placeholder="Descripe your project..." className="form-control"
                                                                onChange={(e) => {
                                                                    setProject((prev) => ({
                                                                        ...prev, desc: e.target.value
                                                                    }))
                                                                }}
                                                            ></textarea>

                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wt-updatall">
                                            <i className="ti-announcement"></i>
                                            <span>Post job by just clicking on “Post Job Now” button.</span>
                                            <button className="wt-btn" type="submit">Post Job Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div >
            <Footer />
        </>
    );
}