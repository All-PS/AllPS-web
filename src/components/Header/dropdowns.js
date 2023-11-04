import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropdownSelect() {
  const [selectedOption, setSelectedOption] = useState("문제명");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative inline-block text-left w-56">
      <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="w-full appearance-none bg-transparent outline-none"
        >
          <option value="문제명">문제명</option>
          <option value="문제번호">문제번호</option>
        </select>
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
