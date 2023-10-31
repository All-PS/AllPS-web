import React from "react";
import Logo from "components/logo";
import SearchBar from "components/Header/searchBar";

const Header = ({ className, searchOptions }) => {
  return (
    <div className={`flex w-full justify-between px-10 md:px-20 py-8 md:py-8 border-b-2 border-black ${className}`}>
      <Logo type="light"></Logo>
      <SearchBar searchOptions={searchOptions}></SearchBar>
    </div>
  );
};

export default Header;
