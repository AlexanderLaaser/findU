function SearchBar() {
  return (
    <div
      className="mb-2 d-flex justify-content-center align-items-center"
      style={{ height: "30vh" }}
    >
      <form className="search-form">
        <input type="text" className="search-input" placeholder="Search..." />
        <button type="submit" className="company-button-green">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
