import React from "react";
import SearchBar from "components/Header/searchBar";
import Logo from "components/logo";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기

function MainHeader({ searchTypes }) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleAllQuestionsClick = () => {
    navigate("/search"); // '/search' 경로로 네비게이션
  };
  return (
    <div className="flex flex-col w-full items-center ">
      {/* 로고 */}
      <Logo className="mt-12 md:mt-48 mb-24 md:mb-40 w-52 md:w-64 h-auto"></Logo>
      {/* 검색창 */}
      <div className="flex items-center w-3/5 border-solid pb-2 border-black mb-40 md:mb-4 ">
        <SearchBar
          searchTypes={searchTypes}
          className="w-full mt-20 md:mt-0"
        ></SearchBar>
      </div>
      {/* 모든문제버튼 */}
      <div className="flex justify-center items-center w-3/5 border-solid pb-3 border-black mb-40 md:mb-36 max-w-[900px]">
        <button
          type="button"
          class="w-3/5 bg-black text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
          onClick={handleAllQuestionsClick} // 버튼 클릭 이벤트 핸들러
        >
          모든 문제 보기
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
