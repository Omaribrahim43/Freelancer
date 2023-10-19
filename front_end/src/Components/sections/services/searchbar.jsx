import React, { useState, useEffect } from "react";
import axios from "axios";

export const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (value) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/projects`);
      const json = response.data;
      const results = json.filter((project) => {
        return (
          value &&
          project &&
          project.title &&
          project.title.toLowerCase().includes(value.toLowerCase())
        );
      });
      setData(results);
      setResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(input);
  }, [input]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <input
      type="text"
                  name="Search"
                  className="form-control"
                  // placeholder="Search Company"
       placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};