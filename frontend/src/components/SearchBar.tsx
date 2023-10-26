import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { GET_ACTIVITIES } from "../constants/GraphQL";
import { Activity } from "../interfaces/Activity";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Activity[]>([]);
  const { loading, error, data } = useQuery(GET_ACTIVITIES);

  useEffect(() => {
    if (!loading && !error && data) {
      setSearchResults(data.getActivities);
    }
  }, [loading, error, data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleSearch = (value: string) => {
    const filteredResults = data.getActivities.filter((activity: Activity) =>
      activity.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="mb-2">
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            setSearchValue(inputValue);
            handleSearch(inputValue);
          }}
          id="searchbar"
        />
        <button type="submit" className="company-button-green">
          Search
        </button>
      </form>
      {searchValue && (
        <div className="search-suggestions">
          <ListGroup>
            {searchResults.map((result, index) => (
              <ListGroup.Item key={index} action>
                {result.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
