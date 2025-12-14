function CategoryTabs({ categories, category, setCategory }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((c) => (
        <button
          key={c.value}
          onClick={() => setCategory(c.value)}
          className={`px-4 py-1.5 rounded-full text-sm capitalize transition
            ${
              c.value === category
                ? "bg-green-600 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs