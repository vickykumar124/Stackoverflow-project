export default function Blog() {
  return (
    <>
      {/* MAIN BLOG LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="col-span-2">
          <div className="space-y-2 text-sm">
            <div className="bg-orange-500 text-white px-3 py-2 rounded cursor-pointer">
              Everything
            </div>
            <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
              Productivity
            </div>
            <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
              AI / ML
            </div>
            <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
              Open Source
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="col-span-7 space-y-6">

          {/* BLOG CARD 1 */}
          <div className="border rounded-xl p-5 relative hover:shadow-md transition">
            <span className="absolute top-3 right-3 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              🔥 Trending
            </span>

            <p className="text-xs text-gray-500">
              ⭐ DECEMBER 26, 2025 · 🔄 Updated 3 days ago
            </p>

            <h2 className="text-xl font-semibold mt-2">
              AI vs Gen Z: How AI has changed the career pathway
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              👥 For: Students · Junior Developers
            </p>

            <p className="mt-2 text-sm italic text-gray-500">
              Why read this: If you’re confused or worried about AI replacing entry-level jobs.
            </p>

            <p className="text-gray-600 mt-2">
              How AI is reshaping junior developer careers.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
              <span>⏱ 5 min read</span>
              <span>💬 9 comments</span>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                Beginner
              </span>
            </div>

            <button className="mt-3 text-sm text-blue-600 hover:underline">
              🎧 Listen to this article
            </button>
          </div>

          {/* BLOG CARD 2 */}
          <div className="border rounded-xl p-5 hover:shadow-md transition">
            <p className="text-xs text-gray-500">
              ⭐ DECEMBER 25, 2025 · 🔄 Updated 1 week ago
            </p>

            <h2 className="text-xl font-semibold mt-2">
              Whether AI is a bubble or revolution
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              👥 For: Developers · Tech Leaders
            </p>

            <p className="mt-2 text-sm italic text-gray-500">
              Why read this: Understand AI’s long-term impact beyond hype.
            </p>

            <p className="text-gray-600 mt-2">
              Will software survive the AI disruption?
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
              <span>⏱ 4 min read</span>
              <span>💬 4 comments</span>
              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                Intermediate
              </span>
            </div>

            <button className="mt-3 text-sm text-blue-600 hover:underline">
              🎧 Listen to this article
            </button>
          </div>

        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="col-span-3">
          <h3 className="font-semibold mb-1">Recommended for you</h3>
          <p className="text-xs text-gray-500 mb-3">
            Based on your interest in AI & ML
          </p>

          <div className="border rounded p-3 mb-3 hover:bg-gray-50 cursor-pointer">
            <p className="font-medium">
              Is 30+ year old honey ok to eat?
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Eat first, ask questions later.
            </p>
          </div>

          <div className="border rounded p-3 hover:bg-gray-50 cursor-pointer">
            <p className="font-medium">
              Fastest way to make thousands of files
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Let your kid play on your PC.
            </p>
          </div>
        </aside>
      </div>

      {/* 🔽 BOTTOM UNIQUE SECTIONS */}
      <div className="bg-gray-50 py-12 mt-10">
        <div className="max-w-5xl mx-auto px-4 space-y-10">

          {/* WHAT READERS ARE LEARNING */}
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-3">
              📘 What readers are learning this week
            </h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>AI hiring trends for 2026</li>
              <li>Skills junior developers still need</li>
              <li>How to avoid AI hype traps</li>
            </ul>
          </div>

          {/* THINKING QUESTION */}
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2">
              🧠 One question to think about
            </h3>
            <p className="text-gray-700 italic">
              If AI can code, what should humans focus on learning next?
            </p>
          </div>

          {/* BEFORE YOU LEAVE */}
          <div className="bg-white p-6 rounded-xl border text-center">
            <h3 className="text-lg font-semibold mb-2">
              👋 Before you leave…
            </h3>
            <p className="text-gray-600 mb-4">
              Stay ahead with curated AI & developer insights.
            </p>
            <button className="bg-black text-white px-5 py-2 rounded">
              Subscribe for updates
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
