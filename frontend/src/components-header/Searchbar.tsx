import * as React from "react";
import { useState } from "react";
import { Activity } from "../interfaces/Activity";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITIES } from "../constants/GraphQL";
import { Autocomplete, TextField } from "@mui/material";
import "/home/alex/findU/frontend/src/styles/components-header.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  const [searchResults, setSearchResults] = useState<Activity[]>([]);
  const { loading, error, data } = useQuery(GET_ACTIVITIES);
  React.useEffect(() => {
    if (!loading && !error && data) {
      setSearchResults(data.getActivities);
    }
  }, [loading, error, data]);
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Autocomplete
        autoHighlight
        freeSolo
        id="searchbar"
        style={{
          width: 300,
          float: "left",
          height: 40,
        }}
        options={searchResults.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} />}
      />

      <SearchIcon fontSize="large" />
    </div>
  );
}
