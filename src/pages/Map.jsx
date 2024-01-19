import React, { useState } from "react";
import axios from "axios";

function AutocompleteMapbox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json`,
        {
          params: {
            access_token:
              "pk.eyJ1Ijoia3J1c2hubmEiLCJhIjoiY2t2cDQ0cnk0MHdoNjJvcWg3cmE1eW04ZSJ9.LA_6HbaSMPOk6CgjBvpOgg",
            types: "place",
            bbox: "73.658416,18.471647,73.979019,18.712394",
          },
        }
      );

      setResults(response.data.features);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a location..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.place_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AutocompleteMapbox;
