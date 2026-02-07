export default function StackAdsFeatures() {
  const features = [
    {
      title: "Intent-based targeting",
      desc: "Reach developers based on what they are solving right now.",
    },
    {
      title: "Question-level placement",
      desc: "Your ad appears next to relevant questions and answers.",
    },
    {
      title: "Developer trust signals",
      desc: "Ads include real usage stats and transparency badges.",
    },
    {
      title: "Human + AI reviewed",
      desc: "Every ad is verified for relevance and usefulness.",
    },
  ];

  return (
    <section className="px-12 py-20 bg-slate-50">
      <h2 className="text-4xl font-bold mb-12">
        Built for developers, not impressions
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
