import SearchBar from "components/Header/searchBar";
import Logo from "components/logo";

function MainHeader({ searchTypes }) {
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
        >
          모든 문제 보기
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
