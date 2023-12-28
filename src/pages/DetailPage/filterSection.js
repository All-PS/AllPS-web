import React, { useState, useEffect } from "react";
import FilterDetailSection from "pages/DetailPage/filterDetailSection";
import Toggle from "components/toggle";

function FilterSection({
  platforms,
  selectedPlatforms,
  difficulties,
  selectedDifficulties,
  showDifficulty,
  setShowDifficulty,
  categories,
  selectedCategories,
  showCategories,
  setShowCategories,
  onPlatformSelect,
  onDifficultySelect,
  onCategorySelect,
  className,
}) {
  const [filterDetailView, setFilterDetailView] = useState(false);
  const [showDifficultyFilter, setShowDifficultyFilter] = useState(true); // 난이도 필터의 표시 상태 추가
  // const [showAdvancedDifficulties, setShowAdvancedDifficulties] = useState(false); // 추가된 상태: 고급 난이도 표시 여부

  // 고급 난이도 표시하기 토글 상태
  const [showAdvancedDifficulties, setShowAdvancedDifficulties] =
    useState(false);

  const [isAllDifficultiesSelected, setIsAllDifficultiesSelected] =
    useState(false);

  // 난이도 선택 상태가 변경될 때마다 전체 선택 상태 업데이트
  useEffect(() => {
    setIsAllDifficultiesSelected(
      selectedDifficulties.length === difficulties.length
    );
  }, [selectedDifficulties, difficulties]);

  // 난이도 전체 선택/해제 토글
  const toggleAllDifficulties = () => {
    if (isAllDifficultiesSelected) {
      onDifficultySelect([]);
    } else {
      onDifficultySelect(difficulties);
    }
  };
  // 고급 난이도 필터링
  const filterAdvancedDifficulties = (difficulties) => {
    if (showAdvancedDifficulties) {
      return difficulties;
    }
    return difficulties.filter((difficulty) =>
      ["브론즈", "실버", "골드", "플래티넘", "다이아"].includes(difficulty)
    );
  };

  // 고급 난이도를 필터링하는 함수
  // const filterAdvancedDifficulties = (difficulties) => {
  //   if (showAdvancedDifficulties) {
  //     return difficulties;
  //   }
  //   return difficulties.filter((difficulty) =>
  //     ["브론즈", "실버", "골드", "플래티넘", "다이아"].includes(difficulty)
  //   );
  // };
  // // 난이도 전체 선택/해제 토글
  // const toggleAllDifficulties = () => {
  //   if (selectedDifficulties.length === difficulties.length) {
  //     // 모든 난이도가 선택되어 있다면, 모두 해제
  //     onDifficultySelect([]);
  //   } else {
  //     // 그렇지 않다면, 모든 난이도를 선택
  //     onDifficultySelect(difficulties);
  //   }
  // };

  return (
    <div
      className={`flex flex-col items-center mx-auto rounded-lg ${className}`}
    >
      <div className="flex justify-start items-center w-full pt-2 md:pt-0">
        <button
          onClick={() => setFilterDetailView(!filterDetailView)}
          className={`px-4 text-sm md:text-base transition-colors ${
            filterDetailView
              ? "border-black text-black"
              : "border-gray-400 text-gray-400"
          }`}
        >
          검색필터
        </button>

        {/* <Toggle
          name="난이도"
          state={showDifficulty}
          setState={setShowDifficulty}
        ></Toggle> */}

        <Toggle
          name="난이도 전체 선택"
          state={isAllDifficultiesSelected}
          setState={toggleAllDifficulties}
        ></Toggle>

        {/* <button
          onClick={toggleAllDifficulties} // 난이도 전체 선택/해제 버튼 이벤트 핸들러
          className="px-4 text-sm md:text-base"
        >
          난이도{" "}
          {selectedDifficulties.length === difficulties.length
            ? "해제"
            : "전체 선택"}
        </button> */}

        {/* <Toggle
          name="유형"
          state={showCategories}
          setState={setShowCategories}
        ></Toggle> */}

        {/* <button
          onClick={() => setShowDifficultyFilter(!showDifficultyFilter)}
          className="px-4 text-sm md:text-base"
        >
          난이도 필터 {showDifficultyFilter ? "접기" : "펼치기"}
        </button>{" "} */}
        {/* 고급 난이도 표시하기 토글 */}
        <Toggle
          name="난이도 보기"
          state={showAdvancedDifficulties}
          setState={setShowAdvancedDifficulties}
        />
        {/* 난이도 필터 토글 버튼 추가 */}

        {/* <button
          onClick={() => setShowAdvancedDifficulties(!showAdvancedDifficulties)}
          className="px-4 text-sm md:text-base"
        >
          고급 난이도 {showAdvancedDifficulties ? "숨기기" : "표시하기"}
        </button> */}
      </div>
      <div
        className={`w-full text-sm md:text-base transition-max-height ease-in-out duration-500 overflow-y-hidden ${
          filterDetailView ? "max-h-[600px]" : "pb-2 max-h-0"
        }`}
      >
        {/* 필터링 선택창 */}
        <div className="flex flex-col w-full px-2 rounded-lg shadow-lg">
          {/* 플랫폼 선택 창 */}
          <FilterDetailSection
            title="플랫폼"
            options={platforms}
            selectedOptions={selectedPlatforms}
            onSelect={onPlatformSelect}
          />
          {/* 난이도 선택 창 */}
          {showDifficultyFilter && ( // 난이도 필터의 표시 여부에 따라 렌더링 제어
            <FilterDetailSection
              title="난이도"
              options={filterAdvancedDifficulties(difficulties)}
              selectedOptions={selectedDifficulties}
              onSelect={onDifficultySelect}
            />
          )}
          {/* 분류 선택 창 */}
          <FilterDetailSection
            title="분류"
            options={categories}
            selectedOptions={selectedCategories}
            onSelect={onCategorySelect}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
