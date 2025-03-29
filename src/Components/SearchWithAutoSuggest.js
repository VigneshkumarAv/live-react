import React from "react";

import { useRef, useEffect, useState } from "react";
// Create a search bar that fetches and displays auto-suggestions in real time as the user types.
function SearchWithAutoSuggest() {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([
    "ram is in wonderland",
    "vignesh",
    "naga",
  ]);
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value?.trim() === "") {
        setData([]);
      } else {
        let temp = suggestions.filter((item) =>
          item?.toLowerCase().includes(value?.toLowerCase())
        );
        setData(temp);
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [value]);
  // Also we can add debounce here to imporve performance

  return (
    <div>
      <input type="text" value={value} onChange={handleValue} />
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchWithAutoSuggest;

/* import { useRef, useEffect, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [query, setQuery] = useState(""); // Store input value
  const [data, setData] = useState([]); // Filtered suggestions
  const suggestions = ["ram", "vignesh", "naga", "rajesh", "rahul"];

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setData([]);
      } else {
        setData(
          suggestions.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
    }, 300); // Debounce delay of 300ms

    return () => clearTimeout(handler); // Cleanup function to prevent memory leaks
  }, [query]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 */
