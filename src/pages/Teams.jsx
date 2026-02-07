import BusinessHero from "../components/BusinessHero";
import WhyTeamsChooseUs from "../components/WhyTeamsChooseUs";

export default function Teams() {
  return (
    <div>
      
      <BusinessHero />

      <WhyTeamsChooseUs />

    
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">How it works</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="p-6 border rounded-xl">Ask</div>
          <div className="p-6 border rounded-xl">AI Suggests</div>
          <div className="p-6 border rounded-xl">Human Verifies</div>
          <div className="p-6 border rounded-xl">Team Reuses</div>
        </div>
      </section>

     
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Knowledge health dashboard
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Get visibility into what your team knows, what’s trusted, and what needs attention.
          </p>

          <div className="grid grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border">
              🟢 <h3 className="font-semibold mt-2">Verified answers</h3>
              <p className="text-sm text-gray-500 mt-1">
                Reviewed and approved by experts
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              🟡 <h3 className="font-semibold mt-2">Needs review</h3>
              <p className="text-sm text-gray-500 mt-1">
                Content flagged as outdated
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              🔁 <h3 className="font-semibold mt-2">Most reused</h3>
              <p className="text-sm text-gray-500 mt-1">
                Answers helping the whole team
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              🆕 <h3 className="font-semibold mt-2">Unanswered</h3>
              <p className="text-sm text-gray-500 mt-1">
                Questions waiting for review
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bring your team’s knowledge together
        </h2>
        <p className="text-gray-600 mb-6">
          Stop answering the same questions again and again.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded">
          Start with your team
        </button>
      </section>
    </div>
  );
}
