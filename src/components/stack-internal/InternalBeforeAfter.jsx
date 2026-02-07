export default function InternalBeforeAfter() {
  return (
    <section className="bg-white px-12 py-24">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">
          Work smarter with Stack Internal
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* BEFORE */}
          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Before Stack Internal
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>❌ Answers scattered across Slack & docs</li>
              <li>❌ Same questions asked repeatedly</li>
              <li>❌ AI responses without verification</li>
              <li>❌ Knowledge lost when people leave</li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="border rounded-xl p-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              After Stack Internal
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✅ One trusted source of truth</li>
              <li>✅ Verified answers reused across teams</li>
              <li>✅ AI enhanced with human validation</li>
              <li>✅ Knowledge retained long-term</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
