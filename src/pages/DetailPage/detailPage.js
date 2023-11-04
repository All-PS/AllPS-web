import React, { useState } from "react";
import Header from "components/Header/header";
import FilterSection from "pages/DetailPage/filterSection";
import ProblemsSection from "pages/DetailPage/problemsSection";
import PageSection from "pages/DetailPage/pageSection";

const platforms = ["백준", "프로그래머스", "코드포스", "코드트리", "알고스팟"];
const difficulties = ["브론즈", "실버", "골드", "플래티넘", "다이아"];
const categories = [["DP"], ["구현"], ["그리디"], ["완전탐색"], ["문자열"], ["백트래킹"], ["그래프탐색"], ["투포인터"], ["트리"], ["우선순위큐"], ["자료구조"], ["최단거리"], ["누적합"], ["이진탐색"], ["전처리"], ["수학"], ["재귀"], ["분할정복"], ["정렬"], ["위상정렬"], ["해싱"], ["기하학"], ["분리집합"], ["최소신장트리"], ["세그먼트트리"], ["비트마스킹"], ["유량"]];

function DetailPage({ searchOptions }) {
  const [selectedPlatforms, setSelectedPlatforms] = useState(platforms.reduce((acc, platform) => ({ ...acc, [platform]: true }), {}));
  const [selectedDifficulties, setSelectedDifficulties] = useState(difficulties.reduce((acc, difficulty) => ({ ...acc, [difficulty]: true }), {}));
  const [selectedCategories, setSelectedCategories] = useState(categories.reduce((acc, category) => ({ ...acc, [category]: true }), {}));
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [totalPages, setTotalPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="DetailPage">
      <Header searchOptions={searchOptions} className=""></Header>
      <div className="md:mt-10">
        <FilterSection platforms={platforms} selectedPlatforms={selectedPlatforms} 
            difficulties={difficulties} selectedDifficulties={selectedDifficulties} 
            showDifficulty={showDifficulty} setShowDifficulty={setShowDifficulty} 
            categories={categories} selectedCategories={selectedCategories} 
            showCategories={showCategories} setShowCategories={setShowCategories} 
            onPlatformSelect={handlePlatformSelect} onDifficultySelect={handleDifficultySelect}
            onCategorySelect={handleCategorySelect} className="max-w-[1200px]" />
        <ProblemsSection showDifficulty={showDifficulty} showCategories={showCategories} className="max-w-[1200px]"></ProblemsSection>
        <PageSection totalPages={totalPages} currentPage={currentPage} onPageChange={(i) => setCurrentPage(i)}></PageSection>
      </div>
    </div>
  );
}

export default DetailPage;
