function FilterDetailSection({ title, options, selectedOptions, onSelect }) {
  return (
    <div className="flex w-full border-b-2 border-gray-300 p-4 last:border-0">
      <div className="flex justify-center w-1/12 mt-2 font-bold">{title}</div>
      <div className="flex w-11/12 flex-wrap">
        {options.map((option) => (
          <div className="flex items-center justify-center w-1/5 p-2">
            <button key={option} className={`w-full text-center whitespace-nowrap rounded-lg transition-colors ${selectedOptions[option] ? "text-black" : "font-light text-gray-400"}`} onClick={() => onSelect(option)}>
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterDetailSection;
