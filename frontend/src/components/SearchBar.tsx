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
  if (error) return `Error! ${error.message}`;

  const handleSearch = (value: string) => {
    const filteredResults = data.getActivities.filter((activity: Activity) =>
      activity.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleResultClick = (resultName: string) => {
    setSearchValue(resultName);
    setSearchResults([]);
  };

  return (
    <div className="search">
      <div className="searchparts">
        <form>
          <input
            type="text"
            className="searchinput"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              const inputValue = e.target.value;
              setSearchValue(inputValue);
              handleSearch(inputValue);
            }}
            id="searchbar"
          />
          <div className="searchresults">
            {searchValue && (
              <div className="searchresults">
                <ListGroup>
                  {searchResults.map((result, index) => (
                    <ListGroup.Item
                      key={index}
                      action
                      onClick={() => handleResultClick(result.name)}
                    >
                      {result.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}
          </div>
        </form>
        <div className="searchbutton">
          <button type="submit" className="company-button-green">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
