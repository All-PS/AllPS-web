import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ className, onSearch, searchOptions }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(searchTerm);
  };

  return (
    <div
      className={`flex flex-col justify-center border-black border-b ${className}`}
    >
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
        <form onSubmit={handleSubmit} className="flex flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-grow"
          />
          {typeof searchOptions !== "undefined" && (
            <select name="searchOption" id="searchOption" className="ml-2">
              {searchOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
