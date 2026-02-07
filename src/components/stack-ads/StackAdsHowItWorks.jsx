export default function StackAdsHowItWorks() {
  return (
    <section className="px-10 py-20 bg-white">
      <h2 className="text-3xl font-bold mb-10">
        How Stack Ads work
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          "Choose audience",
          "Pick placements",
          "Launch campaign",
          "Measure impact"
        ].map((step, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <span className="text-orange-500 font-bold text-xl">
              0{i + 1}
            </span>
            <p className="mt-4 font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
