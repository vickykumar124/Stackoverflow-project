export default function InternalConfidence() {
  return (
    <section className="bg-white px-12 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Know what to trust
          </h2>

          <p className="text-gray-600 mb-6">
            Stack Internal scores internal knowledge based on usage,
            verification, and human review—so teams trust answers,
            not guesses.
          </p>

          <ul className="space-y-3 text-sm">
            <li>✔ AI-assisted answers</li>
            <li>✔ Human verification</li>
            <li>✔ Usage-based confidence</li>
            <li>✔ Decay alerts for outdated content</li>
          </ul>
        </div>

        <div className="border rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">
            Example: Deployment Guide
          </p>

          <p className="font-semibold mb-3">
            Docker-based Node.js Deployment
          </p>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-green-500" style={{ width: "82%" }} />
          </div>

          <p className="text-xs text-gray-500">
            Confidence score: 82% · Last reviewed 9 days ago
          </p>
        </div>

      </div>
    </section>
  );
}
