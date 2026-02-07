import WeeklyChallenge from "../components/WeeklyChallenge";

import DailyPicks from "../components/DailyPicks";
import MiniRoadmapCard from "../components/MiniRoadmapCard";
import TechRadar from "../components/TechRadar";

export default function Home() {
  return (
    <main className="flex-1 py-6 px-6 max-w-[1200px] mx-auto">

      {/* HERO */}
      <section className="mb-6">
        <h1 className="text-2xl font-bold">
          Hey Vicky Kumar, what do you want to learn today?
        </h1>

        <p className="text-gray-600 mt-1">
          Get instant answers with AI Assist, grounded in community-verified knowledge.
        </p>

        <div className="mt-4 relative">
          <textarea
            rows="3"
            className="w-full border rounded-md p-4 resize-none"
            placeholder="Start a chat with AI Assist..."
          />
          <button className="absolute bottom-3 right-3 bg-blue-600 text-white px-3 py-2 rounded-md">
            ↑
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Reputation</h3>
          <p className="text-2xl mt-2">1</p>
        </div>

        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Badge progress</h3>
          <p className="text-sm mt-2">Informed – 0/1</p>
        </div>

        <div className="border rounded-md p-4">
          <h3 className="font-semibold">Watched tags</h3>
          <button className="mt-2 text-blue-600 border px-3 py-1 rounded">
            Customize your feed
          </button>
        </div>
      </section>


      <DailyPicks />

    
      <div className="mt-8">
        <TechRadar />
      </div>

     
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-1">
          Your Learning Roadmap
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Track your progress and continue learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MiniRoadmapCard
            title="Frontend Developer"
            description="HTML, CSS, JavaScript, React, performance & best practices"
            progress={35}
          />

          <MiniRoadmapCard
            title="Backend Developer"
            description="Node.js, Express, MongoDB, Authentication & APIs"
            progress={20}
          />

          <MiniRoadmapCard
            title="DSA & Problem Solving"
            description="Arrays, Strings, Trees, Graphs, Recursion"
            progress={10}
          />
        </div>
      </section>
<section className="mt-10">
  <WeeklyChallenge />


</section>
    </main>
  );
}
