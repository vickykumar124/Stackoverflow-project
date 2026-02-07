import { trendingSets } from "../Data/trendingData";

export default function TrendingToday() {
  const todayIndex = new Date().getDate() % trendingSets.length;
  const trendingToday = trendingSets[todayIndex];

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Trending Today</h2>

      <div className="grid grid-cols-4 gap-4">
        {trendingToday.map((item, i) => (
          <div
            key={i}
            className="relative h-40 rounded-xl overflow-hidden text-white"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.subtitle}</p>
              <span className="text-xs text-gray-300">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
