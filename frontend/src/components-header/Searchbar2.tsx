import React, { ChangeEvent, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES } from "../constants/GraphQL";
import { Activity } from "../interfaces/Activity";

export default function Searchbar2() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchResults, setSearchResults] = useState<Activity[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { loading, error, data } = useQuery(GET_ACTIVITIES);

  React.useEffect(() => {
    if (!loading && !error && data) {
      setActivities(data.getActivities);
    }
  }, [loading, error, data]);

  if (error) return `Error! ${error.message}`;

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setTimeout(() => {
      if (
        !searchInputRef.current ||
        document.activeElement !== searchInputRef.current
      ) {
        setIsFocused(false);
      }
    }, 100); // Verzögerung von 100 Millisekunden
  };

  const searchInputRef = useRef<HTMLInputElement>(null);

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
    setSearchResults(
      activities.filter((Activity) =>
        Activity.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setIsFocused(true);
  }

  const handleSearchSelect = (name: string) => {
    setSearchInput(name);
    setIsFocused(false);
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  return (
    <div className="max-w-md mx-auto relative">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-company-color-super-light focus:bg-white"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleSearchInput} // Stellt sicher, dass Eingaben den State aktualisieren
          value={searchInput}
        />
      </div>
      {isFocused && searchResults.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-20 overflow-hidden text-black">
          {searchResults.map((activity) => (
            <div
              key={activity.id}
              className="p-2 hover:bg-company-color-light"
              onClick={() => {
                handleSearchSelect(activity.name);
              }}
            >
              {activity.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
