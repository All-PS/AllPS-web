import React, { useState } from "react";
import Header from "components/Header/header";
import SearchFilter from "pages/DetailPage/searchFilter";
import ProblemList from "pages/DetailPage/problemList";

const platforms = ["백준", "프로그래머스", "코드포스", "코드트리", "알고스팟"];
const difficulties = ["브론즈", "실버", "골드", "플래티넘", "다이아"];
const categories = ["DP", "구현", "그리디", "완전탐색", "문자열", "백트래킹", "그래프 탐색", "투 포인터", "트리", "우선순위 큐", "자료구조", "최단거리", "누적합", "이진탐색", "전처리", "수학"];

function DetailPage({ searchOptions }) {
  const [selectedPlatforms, setSelectedPlatforms] = useState(platforms.reduce((acc, platform) => ({ ...acc, [platform]: false }), {}));
  const [selectedDifficulties, setSelectedDifficulties] = useState(difficulties.reduce((acc, difficulty) => ({ ...acc, [difficulty]: false }), {}));
  const [selectedCategories, setSelectedCategories] = useState(categories.reduce((acc, category) => ({ ...acc, [category]: false }), {}));

  const handlePlatformSelect = (platform) => {
    setSelectedPlatforms((prevState) => ({ ...prevState, [platform]: !prevState[platform] }));
  };
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulties((prevState) => ({ ...prevState, [difficulty]: !prevState[difficulty] }));
  };
  const handleCategorySelect = (category) => {
    setSelectedCategories((prevState) => ({ ...prevState, [category]: !prevState[category] }));
  };

  return (
    <div className="DetailPage w-full">
      <Header searchOptions={searchOptions}></Header>
      <SearchFilter platforms={platforms} selectedPlatforms={selectedPlatforms} difficulties={difficulties} selectedDifficulties={selectedDifficulties} categories={categories} selectedCategories={selectedCategories} onPlatformSelect={handlePlatformSelect} onDifficultySelect={handleDifficultySelect} onCategorySelect={handleCategorySelect} />
      <ProblemList></ProblemList>
    </div>
  );
}

export default DetailPage;
