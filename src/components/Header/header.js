import React from "react";
import Logo from "components/Logo/logo";
import SearchBar from "components/SearchBar/searchBar";

const Header = ({ className }) => {
  return (
    <div className={`flex w-full justify-between px-10 md:px-20 py-8 md:py-8 border-b-2 border-black ${className}`}>
      <Logo type="light"></Logo>
      <SearchBar></SearchBar>
    </div>
  );
};

export default Header;
