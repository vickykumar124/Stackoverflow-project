export default function StackAdsHero() {
  return (
    <section className="bg-slate-100 px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        {/* Small label (like Stack uses) */}
        <span className="inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded mb-4">
          Stack Ads
        </span>

        <h1 className="text-5xl font-bold max-w-xl">
          Reach developers where it matters —
          in their daily workflow
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          Stack Ads connects your brand to developers based on what
          they are building right now — not cookies or guesswork.
        </p>
      </div>

      {/* RIGHT LOGO + ILLUSTRATION */}
      <div className="relative h-[340px]">

        {/* CENTRAL LOGO */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-white shadow-xl rounded-2xl p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
            SO
          </div>
          <span className="font-semibold text-gray-800">
            Stack Ads
          </span>
        </div>

        {/* FLOW CARDS */}
        <div className="absolute top-0 left-0 bg-white shadow-lg rounded-xl p-4 w-56">
          <p className="font-semibold text-sm">Developer Question</p>
          <span className="text-xs text-gray-500">
            High intent content
          </span>
        </div>

        <div className="absolute top-24 right-0 bg-orange-500 text-white shadow-lg rounded-xl p-4 w-56">
          <p className="font-semibold text-sm">Contextual Ad</p>
          <span className="text-xs opacity-90">
            Matches tech stack
          </span>
        </div>

        <div className="absolute bottom-0 left-16 bg-blue-600 text-white shadow-lg rounded-xl p-4 w-56">
          <p className="font-semibold text-sm">Developer Action</p>
          <span className="text-xs opacity-90">
            Click → Conversion
          </span>
        </div>

      </div>
    </section>
  );
}
