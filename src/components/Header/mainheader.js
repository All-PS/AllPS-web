import React, { useState } from "react";
import logo from "assets/images/logo.png"; // 로고의 경로를 적절하게 수정해주세요.
import Dropdown from "./dropdowns";
function SearchComponent() {
  const [selectedMenu, setSelectedMenu] = useState("문제명");

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
  };

  return (
    <div className="flex flex-col items-center pb-32 min-h-screen">
      {/* 로고 */}
      <img
        src={logo}
        alt="로고"
        className="mt-12 md:mt-48 mb-24 md:mb-40 w-52 md:w-64 h-auto"
      />

      {/* 검색창 */}
      <div className="flex items-center w-3/5 border-solid border-b pb-3 border-black mb-40 md:mb-48 max-w-[900px]">
        {/* 검색 아이콘 */}
        <i className="fa-solid fa-magnifying-glass mx-2"></i>

        {/* 텍스트박스 */}
        <input
          type="text"
          className="p-0 w-full border-0 px-4 text-2xl font-semibold focus:ring-0"
        />

        {/* 드롭다운 메뉴 */}
        <div className="relative inline-block text-left">
          <Dropdown></Dropdown>
          {/*<button
            type="button"
            className="bg-gray inline-flex w-28 justify-center gap-x-1.5 px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <p id="current-menu-name">{selectedMenu}</p>
            {/* SVG 코드는 원래 HTML 코드에서 가져왔습니다.}
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button> */}
          <div className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
            <div className="py-1">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                onClick={() => handleMenuClick("문제명")}
              >
                문제명
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                onClick={() => handleMenuClick("문제번호")}
              >
                문제번호
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
