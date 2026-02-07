export default function DataLicensing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">

      <section>
        <h1 className="text-3xl font-bold">
          Data Licensing
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Trusted, high-quality technical knowledge powering AI, ML, and search systems.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded">
            Request access
          </button>
          <button className="border px-5 py-2 rounded">
            View sample data
          </button>
        </div>
      </section>


      <section>
        <h2 className="text-xl font-semibold mb-4">
          What you get
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="font-medium">Verified knowledge</h3>
            <p className="text-sm text-gray-600 mt-2">
              High-quality developer questions and answers reviewed by experts.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium">Clean datasets</h3>
            <p className="text-sm text-gray-600 mt-2">
              Structured, normalized data ready for training AI & ML models.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-medium">Continuous updates</h3>
            <p className="text-sm text-gray-600 mt-2">
              Fresh technical content added daily to stay relevant.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Best for
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">
            🤖 LLM training
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm">
            📊 AI research
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">
            🔍 Search relevance
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm">
            🧠 Knowledge graphs
          </span>
        </div>
      </section>

      
      <section className="border rounded-xl p-6 bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">
          Trusted by teams worldwide
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Used by AI startups, research institutions, and enterprise ML teams to
          build reliable and responsible AI systems.
        </p>

        <p className="text-sm text-gray-500 mt-3">
          🔄 Updated daily with new technical knowledge
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Ready to build with trusted data?
        </h2>
        <p className="text-gray-600 mb-5">
          Explore licensing options tailored to your organization.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded">
          Contact sales
        </button>
      </section>

    </div>
  );
}
