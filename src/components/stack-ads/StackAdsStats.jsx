export default function StackAdsStats() {
  const stats = [
    {
      value: "82%",
      label: "of developers return multiple times every month to solve problems",
    },
    {
      value: "62%",
      label: "of developers influence or make technology purchase decisions",
    },
    {
      value: "Millions",
      label: "of developers reached monthly inside real workflows",
    },
  ];

  return (
    <section className="px-12 py-20 bg-white">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-orange-500 text-white p-10 rounded-xl
                       hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-4xl font-bold">{s.value}</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-95">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
