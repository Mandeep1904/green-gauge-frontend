import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              About GreenGauge
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Your trusted companion for discovering sustainable, eco-friendly products
          </p>
        </div>

        {/* MISSION SECTION */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-lg text-zinc-300 leading-relaxed">
            GreenGauge was created to make sustainable living accessible to everyone. We believe that choosing eco-friendly products shouldn't be difficult or expensive. Our platform helps you discover, compare, and choose products that are good for you and the planet.
          </p>
        </div>

        {/* WHY WE EXIST */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Why GreenGauge?</h2>
          </div>
          <div className="space-y-4 text-zinc-300">
            <p className="text-lg leading-relaxed">
              The market is flooded with products claiming to be "natural" or "eco-friendly," but it's hard to know which ones are genuine. GreenGauge cuts through the noise by:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Curating verified eco-friendly products from trusted brands</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Providing transparent pricing and product information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Making it easy to compare sustainable alternatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Helping you make informed decisions for a greener lifestyle</span>
              </li>
            </ul>
          </div>
        </div>

        {/* VALUES */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sustainability</h3>
            <p className="text-zinc-400">
              Every product we feature meets strict environmental and health standards.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparency</h3>
            <p className="text-zinc-400">
              Honest information about products, ingredients, and pricing.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Community</h3>
            <p className="text-zinc-400">
              Building a community of conscious consumers making a difference.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Green Movement
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Start your journey towards sustainable living today
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            Explore Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8">
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

export default About;