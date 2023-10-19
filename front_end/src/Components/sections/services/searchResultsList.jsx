// import "./SearchResultsList.css";
import { SearchResult } from "./searchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.title} result2={result.id} key={id} />;
      })}
    </div>
  );
};