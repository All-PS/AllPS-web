// state.js
import { atom } from "recoil";

// export const platforms = [
//   "백준",
//   "프로그래머스",
//   "코드포스",
//   "코드트리",
//   "알고스팟",
// ];
export const platforms = [
  { en: "baekjoon", ko: "백준" },
  { en: "programmers", ko: "프로그래머스" },
  { en: "codeforce", ko: "코드포스" },
  { en: "codetree", ko: "코드트리" },
  { en: "algospot", ko: "알고스팟" },
];
// export const difficulties = [
//   "브론즈5",
//   "실버5",
//   "골드5",
//   "플래티넘5",
//   "다이아5",
//   "브론즈4",
//   "실버4",
//   "골드4",
//   "플래티넘4",
//   "다이아4",
//   "브론즈3",
//   "실버3",
//   "골드3",
//   "플래티넘3",
//   "다이아3",
//   "브론즈2",
//   "실버2",
//   "골드2",
//   "플래티넘2",
//   "다이아2",
//   "브론즈1",
//   "실버1",
//   "골드1",
//   "플래티넘1",
//   "다이아1",
// ];
export const difficulties = [
  { en: "bronze 5", ko: "브론즈5" },
  { en: "silver 5", ko: "실버5" },
  { en: "gold 5", ko: "골드5" },
  { en: "platinum 5", ko: "플래티넘5" },
  { en: "diamond 5", ko: "다이아5" },
  { en: "bronze 4", ko: "브론즈4" },
  { en: "silver 4", ko: "실버4" },
  { en: "gold 4", ko: "골드4" },
  { en: "platinum 4", ko: "플래티넘4" },
  { en: "diamond 4", ko: "다이아4" },
  { en: "bronze 3", ko: "브론즈3" },
  { en: "silver 3", ko: "실버3" },
  { en: "gold 3", ko: "골드3" },
  { en: "platinum 3", ko: "플래티넘3" },
  { en: "diamond 3", ko: "다이아3" },
  { en: "bronze 2", ko: "브론즈2" },
  { en: "silver 2", ko: "실버2" },
  { en: "gold 2", ko: "골드2" },
  { en: "platinum 2", ko: "플래티넘2" },
  { en: "diamond 2", ko: "다이아2" },
  { en: "bronze 1", ko: "브론즈1" },
  { en: "silver 1", ko: "실버1" },
  { en: "gold 1", ko: "골드1" },
  { en: "platinum 1", ko: "플래티넘1" },
  { en: "diamond 1", ko: "다이아1" },
];
// export const categories = [
//   "DP",
//   "구현",
//   "그리디",
//   "완전탐색",
//   "문자열",
//   "백트래킹",
//   "그래프탐색",
//   "투포인터",
//   "트리",
//   "우선순위큐",
//   "자료구조",
//   "최단거리",
//   "누적합",
//   "이진탐색",
//   "전처리",
//   "수학",
//   "재귀",
//   "분할정복",
//   "정렬",
//   "위상정렬",
//   "해싱",
//   "기하학",
//   "분리집합",
//   "최소신장트리",
//   "세그먼트트리",
//   "비트마스킹",
//   "유량",
// ];
export const categories = [
  { en: "Dynamic Programming", ko: "DP" },
  { en: "Implementation", ko: "구현" },
  { en: "Greedy", ko: "그리디" },
  { en: "Complete Search", ko: "완전탐색" },
  { en: "String", ko: "문자열" },
  { en: "Backtracking", ko: "백트래킹" },
  { en: "Graph Search", ko: "그래프탐색" },
  { en: "Two Pointers", ko: "투포인터" },
  { en: "Tree", ko: "트리" },
  { en: "Priority Queue", ko: "우선순위큐" },
  { en: "Data Structure", ko: "자료구조" },
  { en: "Shortest Path", ko: "최단거리" },
  { en: "Cumulative Sum", ko: "누적합" },
  { en: "Binary Search", ko: "이진탐색" },
  { en: "Preprocessing", ko: "전처리" },
  { en: "Math", ko: "수학" },
  { en: "Recursion", ko: "재귀" },
  { en: "Divide and Conquer", ko: "분할정복" },
  { en: "Sorting", ko: "정렬" },
  { en: "Topological Sorting", ko: "위상정렬" },
  { en: "Hashing", ko: "해싱" },
  { en: "Geometry", ko: "기하학" },
  { en: "Disjoint Set", ko: "분리집합" },
  { en: "Minimum Spanning Tree", ko: "최소신장트리" },
  { en: "Segment Tree", ko: "세그먼트트리" },
  { en: "Bitmasking", ko: "비트마스킹" },
  { en: "Flow", ko: "유량" },
];
export const selectedPlatformsState = atom({
  key: "selectedPlatformsState",
  default: platforms.reduce(
    (acc, platform) => ({ ...acc, [platform]: false }),
    {}
  ),
});

export const selectedDifficultiesState = atom({
  key: "selectedDifficultiesState",
  default: difficulties.reduce(
    (acc, difficulty) => ({ ...acc, [difficulty]: false }),
    {}
  ),
});

export const selectedCategoriesState = atom({
  key: "selectedCategoriesState",
  default: categories.reduce(
    (acc, category) => ({ ...acc, [category]: false }),
    {}
  ),
});

export const totalPagesState = atom({
  key: "totalPagesState",
  default: 1,
});

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const problemsState = atom({
  key: "problemsState",
  default: [],
});

export const showDifficultyState = atom({
  key: "showDifficultyState",
  default: false,
});

export const showCategoriesState = atom({
  key: "showCategoriesState",
  default: false,
});
