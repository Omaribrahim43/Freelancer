import React from 'react';
import { Link } from 'react-router-dom';

export const SearchResult = ({ result, result2 }) => {
  return (
    <div className="search-result">
      <Link to={`/single/${result2}`}>{result}</Link>
    </div>
  );
};