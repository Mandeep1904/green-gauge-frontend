function SortToggle({ sort, setSort }) {
  return (
    <button
      onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
      className="px-4 sm:px-5 py-2.5 rounded-xl bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
    >
      <svg 
        className={`w-4 h-4 flex-shrink-0 transition-transform ${sort === "desc" ? "rotate-180" : ""}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
      <span className="hidden sm:inline">
        {sort === "asc" ? "Price: Low → High" : "Price: High → Low"}
      </span>
      <span className="sm:hidden">
        {sort === "asc" ? "Low → High" : "High → Low"}
      </span>
    </button>
  );
}

export default SortToggle;