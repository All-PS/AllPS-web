import React, { useState } from "react";

const SearchBar = ({ className, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch && onSearch(searchTerm);
    };

    return (
        <div className={`flex items-center border-solid border-b border-black pb-3 ${className}`}>
            <i className="fa-solid fa-magnifying-glass mx-2"></i>
            <form onSubmit={handleSubmit} className="flex flex-grow">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="p-0 flex-grow border-0 px-4 text-2xl font-semibold focus:ring-0"
                />
                {/* 드롭다운 메뉴 */}
            </form>
        </div>
    )
};

export default SearchBar;
