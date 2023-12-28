// state.js
import { atom } from "recoil";

export const platforms = [
  "백준",
  "프로그래머스",
  "코드포스",
  "코드트리",
  "알고스팟",
];
export const difficulties = [
  "브론즈",
  "실버",
  "골드",
  "플래티넘",
  "다이아",
  "브론즈5",
  "실버5",
  "골드5",
  "플래티넘5",
  "다이아5",
  "브론즈4",
  "실버4",
  "골드4",
  "플래티넘4",
  "다이아4",
  "브론즈3",
  "실버3",
  "골드3",
  "플래티넘3",
  "다이아3",
  "브론즈2",
  "실버2",
  "골드2",
  "플래티넘2",
  "다이아2",
  "브론즈1",
  "실버1",
  "골드1",
  "플래티넘1",
  "다이아1",
];
export const categories = [
  "DP",
  "구현",
  "그리디",
  "완전탐색",
  "문자열",
  "백트래킹",
  "그래프탐색",
  "투포인터",
  "트리",
  "우선순위큐",
  "자료구조",
  "최단거리",
  "누적합",
  "이진탐색",
  "전처리",
  "수학",
  "재귀",
  "분할정복",
  "정렬",
  "위상정렬",
  "해싱",
  "기하학",
  "분리집합",
  "최소신장트리",
  "세그먼트트리",
  "비트마스킹",
  "유량",
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
