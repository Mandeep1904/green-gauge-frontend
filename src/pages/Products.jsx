import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../api/products.api";
import SortToggle from "../components/SortToggle";
import ViewToggle from "../components/ViewToggle";
import ProductTable from "../components/ProductTable";
import ProductCards from "../components/ProductCards";
import Navbar from "../components/Navbar";

 function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("toothpastes");
  const [sort, setSort] = useState("asc");
  const [view, setView] = useState("card");
  const [loading, setLoading] = useState(true);

  // Category display names
  const categoryNames = {
    toothpastes: "Toothpastes",
    shampoos: "Shampoos",
    soaps: "Soaps",
    hairoils: "Hair Oils"
  };

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      setLoading(true);
      try {
        const res = await fetchProductsByCategory(category);

        if (isMounted) {
          setProducts(res.data[category] || []);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setProducts([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, [category]);

  const sortedProducts = [...products].sort((a, b) =>
    sort === "asc"
      ? (a.price ?? Infinity) - (b.price ?? Infinity)
      : (b.price ?? -Infinity) - (a.price ?? -Infinity)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* NAVBAR */}
      <Navbar category={category} setCategory={setCategory} />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-12">
        {/* CATEGORY HEADER */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl mb-4">
            <span className="text-green-400 text-sm font-medium">Current Category</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white font-semibold">{categoryNames[category]}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {categoryNames[category]}
            </span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Discover sustainable and eco-friendly {categoryNames[category].toLowerCase()} for your daily routine
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <SortToggle sort={sort} setSort={setSort} />
            <ViewToggle view={view} setView={setView} />
          </div>
          
          <div className="sm:ml-auto text-sm text-zinc-500">
            {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* PRODUCTS DISPLAY */}
        <div>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
                <p className="text-zinc-400">Loading products...</p>
              </div>
            </div>
          ) : sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🌱</div>
              <p className="text-xl text-zinc-400">No products found in this category</p>
            </div>
          ) : view === "table" ? (
            <ProductTable products={sortedProducts} />
          ) : (
            <ProductCards products={sortedProducts} />
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-sm text-zinc-500">
            <span className="font-semibold text-green-500">GreenGauge</span> • Built for learning & transparency
          </div>
          <div className="text-xs text-zinc-600 mt-2">
            Promoting eco-friendly products for a sustainable future 🌍
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Products;