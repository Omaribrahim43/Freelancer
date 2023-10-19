// import "./SearchResultsList.css";
import { SearchResult } from "./searchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div className="search-result">
      <Link to={`/single/${result2}`}>{result}</Link>
    </div>;
      })}
    </div>
  );
};