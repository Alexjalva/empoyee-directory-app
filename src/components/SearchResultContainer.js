import React, { useState, useEffect } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

const SearchResultContainer = () => {
  const [search, setSearch] = useState({
    results: []
  });

  useEffect(() => {
    API.search().then(res => {
        setSearch({
          ...search,
          results: res.data.results
        });
      });
  }, []);




    return (
      <div>
        <ResultList results={search.results} />
      </div>
    );
  
}

export default SearchResultContainer;
