function Toggle({ name, state, setState }) {
  return (
    <div className="flex gap-2 px-2">
        <div className="text-sm">{name}</div>
      <label className="relative cursor-pointer">
        <input type="checkbox" checked={state} onChange={() => setState(!state)} className="sr-only peer" />
        <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}

export default Toggle;
