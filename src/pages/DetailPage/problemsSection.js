import React, { useEffect, useRef } from 'react';

function ProblemsSection({ className, showDifficulty, showCategories }) {
  const problems = [
    {
      difficulty: "bronze5",
      title: "Problem",
      source: "Source",
      types: ["세그먼트트리", "Type 2", "Type 2", "Type 2", "Type 2"],
    },
    {
      difficulty: "gold3",
      title: "이름이 매우매우매우매우매우매우매우매우매우매우매우매우매우매우 길어요",
      source: "출처가 매우매우매우매우매우매우매우매우매우매우매우매우매우매우 길어요",
      types: ["세그먼트트리", "Type 2", "Type 2", "Type 2", "Type 2"],
    }
  ];

  return (
    <div className={`flex flex-col rounded-2xl text-sm md:text-base mx-auto ${className}`}>
      <table className="w-full text-left bg-white border-black border-b-2 divide-y divide-black">
        <thead className="w-full h-14 font-bold bg-gray-50">
          <tr className="w-full">
            <th className="w-16 whitespace-nowrap py-2 px-4">난이도</th>
            <th className="whitespace-nowrap py-2 px-4">제목</th>
            <th className="whitespace-nowrap py-2 px-4">출처</th>
            <th className="w-20 md:w-48 whitespace-nowrap py-2 px-4">유형</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {problems.map((problem, index) => (
            <tr key={index} className="">
              <td className="px-4">
                <div className="-16">{showDifficulty && <img src={`${process.env.PUBLIC_URL}/tier/${problem.difficulty}-sample.png`} className="object-cover h-10 w-auto" />}</div>
              </td>
              <td className="py-6 px-4">
                <div className="w-[140px] sm:w-[215px] md:w-[200px] lg:w-[350px] truncate ...">{problem.title}</div>
              </td>
              <td className="py-6 px-4">
                <div className="w-[140px] sm:w-[215px] md:w-[200px] lg:w-[350px] truncate ...">{problem.source}</div>
              </td>
              <td className="flex gap-4 w-12 md:w-24 whitespace-nowrap text-sm py-5 px-4">
                {showCategories && (
                  <div className="md:hidden">
                    <div className="relative group">
                      <div className="px-3 py-1 bg-gray-200 rounded-full">+{problem.types.length}</div>
                      <div className="absolute z-10 left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100">{problem.types.join(", ")}</div>
                    </div>
                  </div>
                )}
                {showCategories && (
                  <div className="w-32">
                  <div className="hidden md:flex md:gap-2">
                    {problem.types.map((type, index) =>
                      index === 0 ? (
                        <div className="px-3 py-1 bg-gray-200 rounded-full">{type}</div>
                      ) : index === 1 ? (
                        <div className="relative group">
                          <div className="px-3 py-1 bg-gray-200 rounded-full">+{problem.types.length - 1}</div>
                          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 translate-y-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100">{problem.types.slice(1).join(", ")}</div>
                        </div>
                      ) : null
                    )}
                  </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemsSection;
