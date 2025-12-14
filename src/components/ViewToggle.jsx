function ViewToggle({ view, setView }) {
  return (
    <div className="inline-flex items-center gap-1 p-1 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800">
      <button
        onClick={() => setView("card")}
        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
          view === "card"
            ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
      >
        <span className="flex items-center gap-1.5 sm:gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="hidden sm:inline">Cards</span>
        </span>
      </button>
      <button
        onClick={() => setView("table")}
        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
          view === "table"
            ? "bg-green-600 text-white shadow-lg shadow-green-600/20"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
      >
        <span className="flex items-center gap-1.5 sm:gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="hidden sm:inline">Table</span>
        </span>
      </button>
    </div>
  );
}

export default ViewToggle;