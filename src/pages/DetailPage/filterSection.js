import { useRecoilState } from "recoil";
import {
  selectedPlatformsState,
  showDifficultyState,
  showCategoriesState,
  selectedDifficultiesState,
  selectedCategoriesState,
} from "pages/DetailPage/state";
import React, { useState, useEffect } from "react";
import FilterDetailSection from "pages/DetailPage/filterDetailSection";
import Toggle from "components/toggle";

//showDifficulty,setShowDifficulty,showCategories,setShowCategories,
function FilterSection({
  platforms,
  // selectedPlatforms,
  difficulties,
  //selectedDifficulties,
  categories,
  //selectedCategories,
  onPlatformSelect,
  onDifficultySelect,
  onCategorySelect,
  className,
}) {
  const [filterDetailView, setFilterDetailView] = useState(false);
  const [showDifficultyFilter, setShowDifficultyFilter] = useState(true); // 난이도 필터의 표시 상태 추가
  // const [showAdvancedDifficulties, setShowAdvancedDifficulties] = useState(false); // 추가된 상태: 고급 난이도 표시 여부

  const [selectedPlatforms, setSelectedPlatforms] = useRecoilState(
    selectedPlatformsState
  );
  const [selectedDifficulties, setSelectedDifficulties] = useRecoilState(
    selectedDifficultiesState
  );
  const [selectedCategories, setSelectedCategories] = useRecoilState(
    selectedCategoriesState
  );

  const [showDifficulty, setShowDifficulty] =
    useRecoilState(showDifficultyState);
  const [showCategories, setShowCategories] =
    useRecoilState(showCategoriesState);

  const isAllPlatformsSelected =
    Object.values(selectedPlatforms).every(Boolean);

  const isAllDifficultiesSelected =
    Object.values(selectedDifficulties).every(Boolean);

  const isAllCategoriesSelected =
    Object.values(selectedCategories).every(Boolean);

  // const toggleAllPlatforms = () => {
  //   if (isAllPlatformsSelected) {
  //     console.log("모든 플랫폼 해제");
  //     const newSelectedPlatforms = Object.keys(selectedPlatforms).reduce(
  //       (acc, platform) => {
  //         return { ...acc, [platform.ko]: false };
  //       },
  //       {}
  //     );
  //     setSelectedPlatforms(newSelectedPlatforms);
  //   } else {
  //     console.log("모든 플랫폼 선택");
  //     const newSelectedPlatforms = Object.keys(selectedPlatforms).reduce(
  //       (acc, platform) => {
  //         return { ...acc, [platform.ko]: true };
  //       },
  //       {}
  //     );
  //     setSelectedPlatforms(newSelectedPlatforms);
  //   }
  // };
  const toggleAllPlatforms = () => {
    const newSelectedPlatforms = platforms.reduce((acc, platform) => {
      return { ...acc, [platform.ko]: !isAllPlatformsSelected };
    }, {});
    setSelectedPlatforms(newSelectedPlatforms);
  };
  // const toggleAllDifficulties = () => {
  //   if (isAllDifficultiesSelected) {
  //     console.log("모든 난이도 해제");
  //     const newSelectedDifficulties = Object.keys(selectedDifficulties).reduce(
  //       (acc, difficulties) => {
  //         return { ...acc, [difficulties.ko]: false };
  //       },
  //       {}
  //     );
  //     setSelectedDifficulties(newSelectedDifficulties);
  //   } else {
  //     console.log("모든 난이도 선택");
  //     const newSelectedDifficulties = Object.keys(selectedDifficulties).reduce(
  //       (acc, difficulties) => {
  //         return { ...acc, [difficulties.ko]: true };
  //       },
  //       {}
  //     );
  //     setSelectedDifficulties(newSelectedDifficulties);
  //   }
  // };
  const toggleAllDifficulties = () => {
    const newSelectedDifficulties = difficulties.reduce((acc, difficulty) => {
      return { ...acc, [difficulty.ko]: !isAllDifficultiesSelected };
    }, {});
    setSelectedDifficulties(newSelectedDifficulties);
  };

  // const toggleAllCategories = () => {
  //   if (isAllCategoriesSelected) {
  //     console.log("모든 분류 해제");
  //     const newSelectedCategories = Object.keys(selectedCategories).reduce(
  //       (acc, category) => {
  //         return { ...acc, [category.ko]: false };
  //       },
  //       {}
  //     );
  //     setSelectedCategories(newSelectedCategories);
  //   } else {
  //     console.log("모든 분류 선택");
  //     const newSelectedCategories = Object.keys(selectedCategories).reduce(
  //       (acc, category) => {
  //         return { ...acc, [category.ko]: true };
  //       },
  //       {}
  //     );
  //     setSelectedCategories(newSelectedCategories);
  //   }
  // };
  const toggleAllCategories = () => {
    const newSelectedCategories = categories.reduce((acc, category) => {
      return { ...acc, [category.ko]: !isAllCategoriesSelected };
    }, {});
    setSelectedCategories(newSelectedCategories);
  };

  // 난이도 선택 상태가 변경될 때마다 전체 선택 상태 업데이트
  // useEffect(() => {
  //   setIsAllDifficultiesSelected(
  //     selectedDifficulties.length === difficulties.length
  //   );
  // }, [selectedDifficulties, difficulties]);

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

        <Toggle
          name="난이도"
          state={showDifficulty}
          setState={setShowDifficulty}
        ></Toggle>

        <Toggle
          name="유형"
          state={showCategories}
          setState={setShowCategories}
        ></Toggle>

        {/* <Toggle
          name="난이도 보기"
          state={showAdvancedDifficulties}
          setState={setShowAdvancedDifficulties}
        /> */}
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
            onTitleClick={toggleAllPlatforms} // 핸들러 추가
          />
          {/* 난이도 선택 창 */}
          {showDifficultyFilter && ( // 난이도 필터의 표시 여부에 따라 렌더링 제어
            <FilterDetailSection
              title="난이도"
              //options={filterAdvancedDifficulties(difficulties)}
              options={difficulties}
              selectedOptions={selectedDifficulties}
              onSelect={onDifficultySelect}
              onTitleClick={toggleAllDifficulties}
            />
          )}
          {/* 분류 선택 창 */}
          <FilterDetailSection
            title="분류"
            options={categories}
            selectedOptions={selectedCategories}
            onSelect={onCategorySelect}
            onTitleClick={toggleAllCategories}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
