// import "./SearchResultsList.css";
import { SearchResult } from "./searchResult";
import { Link } from "react-router-dom";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div className="search-result">
      <Link to={`/single/${result}`}>{result}</Link>
    </div>;
      })}
    </div>
  );
};