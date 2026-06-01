export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Domain Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Domain Prices Before<br />
          <span className="text-[#58a6ff]">GoDaddy Sees Your Searches</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          GoDaddy raises prices after you search. Our anonymous proxy monitoring watches domain prices in the background — so you buy at the real price, not the inflated one.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card stored on our servers.</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16 flex flex-wrap justify-center gap-3">
        {["Anonymous proxy requests", "Price change alerts", "Background monitoring", "No search fingerprint", "Email notifications", "Up to 50 domains"].map((f) => (
          <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to buy domains at fair prices</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor up to 50 domains",
              "Anonymous proxy checks every 6 hours",
              "Instant email price-change alerts",
              "Price history charts",
              "GoDaddy search fingerprint protection",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Does GoDaddy really raise prices based on searches?</h3>
            <p className="text-sm text-[#8b949e]">Yes. GoDaddy and other registrars use cookies and session data to detect repeated interest in a domain and can increase prices dynamically. Our tool checks prices through rotating anonymous proxies so your interest is never revealed.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How often are prices checked?</h3>
            <p className="text-sm text-[#8b949e]">Prices are checked every 6 hours via background jobs using anonymous proxy requests. You receive an email alert the moment a price change is detected on any domain in your watchlist.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. You can cancel at any time from your billing portal with no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Domain Price Tracker. Not affiliated with GoDaddy.
      </footer>
    </main>
  );
}
