import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import React, { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suchbegriff:", searchValue);
  };

  return (
    <div
      className="mb-2 d-flex justify-content-center align-items-center"
      style={{ height: "30vh" }}
    >
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          id="searchbar"
        />
        <button
          type="submit"
          className="company-button-green"
          onClick={(e) => {
            handleSearch;
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
