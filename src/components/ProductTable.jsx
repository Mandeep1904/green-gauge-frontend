function ProductTable({ products }) {
  // Helper function to get currency symbol based on URL
  const getCurrencySymbol = (url) => {
    if (url.includes('amazon.com')) return '$';
    if (url.includes('amazon.in') || url.includes('amzn.in')) return '₹';
    if (url.includes('amazon.co.uk')) return '£';
    if (url.includes('amazon.de') || url.includes('amazon.fr')) return '€';
    return '₹'; // default
  };

  return (
    <div>
      {/* SCROLL HINT FOR MOBILE */}
      <div className="sm:hidden mb-2 text-xs text-zinc-500 text-center">
        👆 Swipe to see all columns
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-zinc-800/80 border-b border-zinc-700">
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-4 sm:px-6 py-4 text-right text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Link
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">
              {products.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-zinc-800/40 transition-colors group"
                >
                  {/* PRODUCT */}
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <div className="text-xs text-zinc-400">N/A</div>
                        )}
                      </div>

                      <div className="text-xs sm:text-sm text-zinc-300 group-hover:text-white transition-colors line-clamp-2 max-w-xs sm:max-w-md">
                        {p.title}
                      </div>
                    </div>
                  </td>

                  {/* BRAND */}
                  <td className="px-4 sm:px-6 py-4">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-green-400 border border-zinc-700">
                      {p.brand}
                    </span>
                  </td>

                  {/* PRICE */}
                  <td className="px-4 sm:px-6 py-4 text-right">
                    {p.price === null || !p.available ? (
                      <span className="text-sm font-semibold text-red-500">
                        Unavailable
                      </span>
                    ) : p.price != null ? (
                      <span className="text-base sm:text-lg font-bold text-green-500">
                        {getCurrencySymbol(p.url)}{p.price}
                      </span>
                    ) : (
                      <span className="text-zinc-500">—</span>
                    )}
                  </td>

                  {/* LINK */}
                  <td className="px-4 sm:px-6 py-4 text-center">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs font-medium bg-green-600 hover:bg-green-500 text-white transition-colors whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">View Product →</span>
                      <span className="sm:hidden">View →</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;