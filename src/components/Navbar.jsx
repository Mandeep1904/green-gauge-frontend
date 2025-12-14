import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ category, setCategory }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const categories = [
    { label: "Toothpastes", value: "toothpastes" },
    { label: "Shampoos", value: "shampoos" },
    { label: "Soaps", value: "soaps" },
    { label: "Hair Oils", value: "hairoils" },
  ];

  // Only show category selector on products page
  const isProductsPage = location.pathname === "/products";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight hover:scale-105 transition-transform">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Green
            </span>
            <span className="text-white">Gauge</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${
                location.pathname === "/" ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors ${
                location.pathname === "/about" ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`text-sm transition-colors ${
                location.pathname === "/products" ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
              }`}
            >
              Products
            </Link>

            {/* CATEGORY DROPDOWN - DESKTOP (only on products page) */}
            {isProductsPage && setCategory && (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-sm text-white border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  Category
                  <svg
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden backdrop-blur-xl bg-black/80 border border-white/10 shadow-2xl">
                    {categories.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => {
                          setCategory(c.value);
                          setDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                          category === c.value
                            ? "bg-green-600/20 text-green-400 border-l-2 border-green-400"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                  location.pathname === "/" 
                    ? "bg-green-600/20 text-green-400 font-medium" 
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                  location.pathname === "/about" 
                    ? "bg-green-600/20 text-green-400 font-medium" 
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                  location.pathname === "/products" 
                    ? "bg-green-600/20 text-green-400 font-medium" 
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              
              {/* CATEGORIES IN MOBILE (only on products page) */}
              {isProductsPage && setCategory && (
                <>
                  <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-2">
                    Categories
                  </div>
                  {categories.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => {
                        setCategory(c.value);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                        category === c.value
                          ? "bg-green-600/20 text-green-400 font-medium"
                          : "text-zinc-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;