import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

function Category() {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {categories.map((category) => (
                <span className="wt-checkbox" key={category.id}>
                    <input
                        id={`category-${category.id}`}
                        type="checkbox"
                        name="description"
                        value={category.name}
                    />
                    <Link to={`/services/${category.id}`}>
                        <label>{category.name}</label>
                    </Link>
                </span>
            ))}
        </div>
    );
}

export default Category;