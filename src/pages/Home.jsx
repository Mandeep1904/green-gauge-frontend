import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

 function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Navbar />

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Choose Green,
            </span>
            <br />
            <span className="text-white">Live Clean</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8">
            Discover sustainable, eco-friendly alternatives for your daily essentials. 
            Better for you, better for the planet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-green-600/30 transition-all transform hover:scale-105"
          >
            Explore Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {/* Feature 1 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">100% Natural</h3>
            <p className="text-zinc-400">
              All products are made from natural, organic ingredients without harmful chemicals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Certified Safe</h3>
            <p className="text-zinc-400">
              Verified and certified eco-friendly products that are safe for your family.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
            <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Best Prices</h3>
            <p className="text-zinc-400">
              Compare prices and find the best deals on sustainable products.
            </p>
          </div>
        </div>

        {/* CATEGORIES PREVIEW */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Explore Our Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Toothpastes", emoji: "🦷", color: "from-blue-600 to-cyan-600" },
              { name: "Shampoos", emoji: "🧴", color: "from-purple-600 to-pink-600" },
              { name: "Soaps", emoji: "🧼", color: "from-yellow-600 to-orange-600" },
              { name: "Hair Oils", emoji: "💆", color: "from-green-600 to-emerald-600" },
            ].map((cat) => (
              <Link
                key={cat.name}
                to="/products"
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center group"
              >
                <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform`}>
                  {cat.emoji}
                </div>
                <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 backdrop-blur-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Change?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join thousands of people choosing sustainable products for a healthier lifestyle and a greener planet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Shopping
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
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

export default Home;