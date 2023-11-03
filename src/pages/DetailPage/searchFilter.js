import React, { useState } from "react";

function SearchFilter({ platforms, selectedPlatforms, difficulties, selectedDifficulties, categories, selectedCategories, onPlatformSelect, onDifficultySelect, onCategorySelect, className }) {
  const [filterDetailView, setFilterDetailView] = useState(false);

  const handleFilterEditBtn = (e) => {
    setFilterDetailView(!filterDetailView);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full max-w-screen-lg justify-between min-w-[512px]">
        <div className="flex-shrink">
          <button onClick={handleFilterEditBtn} className="flex items-center justify-center p-4 mt-8">
            <p className={filterDetailView ? "text-black" : "text-gray-400"}>필터편집</p>
          </button>
        </div>
        <div className="flex-grow"></div>
        {/* <div className="overflow-x-auto flex items-center"></div> */}
      </div>
      {filterDetailView && (
        <div className="flex-col w-full border border-black mx-4 text-xs max-w-screen-lg min-w-[512px]">
          {/* <!-- 플랫폼 선택 창 --> */}
          <div className="flex w-full p-8 border-b-2 border-gray">
            <div className="w-1/12">플랫폼</div>
            <div className="flex w-11/12">
              {platforms.map((platform) => (
                <div className="flex items-center justify-center w-1/5">
                  <button key={platform} className={`${selectedPlatforms[platform] ? "text-black" : "text-gray-400"}`} onClick={() => onPlatformSelect(platform)}>
                    {platform}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* 난이도 선택 창 */}
          <div className="flex w-full p-8 border-b-2 border-gray">
            <div className="w-1/12">난이도</div>
            <div className="flex w-11/12">
              {difficulties.map((difficulty) => (
                <div className="flex items-center justify-center w-1/5">
                  <button key={difficulty} className={`${selectedDifficulties[difficulty] ? "text-black" : "text-gray-400"}`} onClick={() => onDifficultySelect(difficulty)}>
                    {difficulty}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* 분류 선택 창 */}
          <div className="flex w-full p-8 border-b-2 border-gray">
            <div className="w-1/12">분류</div>
            <div className="w-11/12 flex flex-wrap">
              {categories.map((category, index) => (
                <React.Fragment key={category}>
                  {index % 5 === 0 && index !== 0 && <div className="w-full flex my-2"></div>}
                  <div className="flex items-center justify-center w-1/5">
                    <button className={`${selectedCategories[category] ? "text-black" : "text-gray-400"}`} onClick={() => onCategorySelect(category)}>
                      {category}
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
