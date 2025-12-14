function ProductCards({ products }) {
  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((p) => (
        <a
          key={p.id || p.url}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 flex flex-col"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative h-52 w-full bg-white/95 flex items-center justify-center p-4 overflow-hidden">
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="text-zinc-400 text-sm">No image available</div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* CONTENT */}
          <div className="p-4 flex flex-col flex-grow">
            {/* BRAND */}
            <div className="text-xs font-medium text-green-400 mb-2">
              {p.brand}
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-medium leading-snug text-zinc-200 line-clamp-2 mb-3 group-hover:text-white transition-colors">
              {p.title}
            </h3>

            {/* PRICE - PUSHED TO BOTTOM */}
            <div className="mt-auto pt-3 border-t border-zinc-800">
              {p.price === null ? (
                <span className="text-base font-bold text-red-500">
                  Unavailable
                </span>
              ) : p.price != null ? (
                <span className="text-2xl font-bold text-green-500">
                  ₹{p.price}
                </span>
              ) : (
                <span className="text-zinc-500">—</span>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ProductCards;