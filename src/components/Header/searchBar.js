import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ className, searchTypes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let params = {
      "query": searchTerm,
      "type": document.getElementById("searchType").value
    };
    
    let query = Object.keys(params)
               .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
               .join('&');
  
      navigate(`https://allps.io/search?${query}`);
    }

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const queryParam = queryParams.get('query');
      const typeParam = queryParams.get('type');
  
      if (queryParam) setSearchTerm(queryParam);
      if (typeParam) setSelectedType(typeParam);
    }, [location]);

  return (
    <div className={`flex flex-col justify-center border-black border-b ${className}`}>
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-2" />
        <form onSubmit={handleSubmit} className="flex flex-grow">
          <input type="text" value={searchTerm} onChange={handleInputChange} className="flex-grow" />
          {typeof searchTypes !== "undefined" && (
            <select name="searchType" id="searchType" value={selectedType} onChange={handleSelectChange} className="ml-2">
              {searchTypes.map((option, index) => (
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
