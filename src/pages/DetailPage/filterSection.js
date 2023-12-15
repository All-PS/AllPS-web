import React, { useState } from "react";
import FilterDetailSection from "pages/DetailPage/filterDetailSection";
import Toggle from "components/toggle"

function FilterSection({ platforms, selectedPlatforms, difficulties, selectedDifficulties, showDifficulty, setShowDifficulty, categories, selectedCategories, showCategories, setShowCategories, onPlatformSelect, onDifficultySelect, onCategorySelect, className }) {
  const [filterDetailView, setFilterDetailView] = useState(false);

  return (
    <div className={`flex flex-col items-center mx-auto rounded-lg ${className}`}>
      <div className="flex justify-start items-center w-full pt-2 md:pt-0">
        <button onClick={() => setFilterDetailView(!filterDetailView)} className={`px-4 text-sm md:text-base transition-colors ${filterDetailView ? "border-black text-black" : "border-gray-400 text-gray-400"}`}>
          검색필터
        </button>
        <Toggle name="난이도" state={showDifficulty} setState={setShowDifficulty}></Toggle>
        <Toggle name="유형" state={showCategories} setState={setShowCategories}></Toggle>
      </div>
      <div className={`w-full text-sm md:text-base transition-max-height ease-in-out duration-500 overflow-y-hidden ${filterDetailView ? "max-h-[600px]" : "pb-2 max-h-0"}`}>
        {/* 필터링 선택창 */}
        <div className="flex flex-col w-full px-2 rounded-lg shadow-lg">
          {/* 플랫폼 선택 창 */}
          <FilterDetailSection title="플랫폼" options={platforms} selectedOptions={selectedPlatforms} onSelect={onPlatformSelect} />
          {/* 난이도 선택 창 */}
          <FilterDetailSection title="난이도" options={difficulties} selectedOptions={selectedDifficulties} onSelect={onDifficultySelect} />
          {/* 분류 선택 창 */}
          <FilterDetailSection title="분류" options={categories} selectedOptions={selectedCategories} onSelect={onCategorySelect} />
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
