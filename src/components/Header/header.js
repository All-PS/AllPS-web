import React from "react";
import Logo from "components/logo";
import SearchBar from "components/Header/searchBar";

const Header = ({ className, searchOptions }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between w-full border-black border-b-2 p-10 ${className}`}
    >
      <Logo type="light" className=""></Logo>
      <SearchBar
        searchOptions={searchOptions}
        className="w-[400px] mt-20 md:mt-0"
      ></SearchBar>
    </div>
  );
};

export default Header;
