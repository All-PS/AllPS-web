import React, { useState } from "react";
import logo from "assets/images/logo.png";
import Dropdown from "./dropdowns";
import Logo from "components/logo";
import SearchBar from "components/Header/searchBar";

function SearchComponent() {
  const [selectedMenu, setSelectedMenu] = useState("문제명");

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };
  // 검색 옵션 예시
  const searchOptions = [
    { value: "문제명", label: "문제명" },
    { value: "문제번호", label: "문제번호" },
  ];

  return (
    <div className="flex flex-col w-full items-center ">
      {/* 로고 */}
      <img
        src={logo}
        alt="로고"
        className="mt-12 md:mt-48 mb-24 md:mb-40 w-52 md:w-64 h-auto"
      />

      {/* 검색창 */}

      <div className="flex items-center w-3/5 border-solid pb-2 border-black mb-40 md:mb-48 ">
        <SearchBar
          searchOptions={searchOptions}
          className="w-full mt-20 md:mt-0"
        ></SearchBar>
      </div>
    </div>
  );
}

export default SearchComponent;
