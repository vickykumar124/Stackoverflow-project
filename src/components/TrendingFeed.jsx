import { trendingSets } from "../Data/trendingData";

export default function TrendingFeed() {
  const daySeed = new Date().getDate();

  const todayIndex = daySeed % trendingSets.length;
  const trendingToday = trendingSets[todayIndex];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Trending Today</h2>

      <div className="grid grid-cols-4 gap-4">
        {trendingToday.map((item, i) => {
          const imageIndex = daySeed % item.images.length;
          const image = item.images[imageIndex];

          return (
            <div
              key={i}
              className="h-48 rounded-xl overflow-hidden relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                backgroundColor: "#666",
              }}
            >
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.subtitle}</p>
                <span className="text-xs opacity-75 mt-1">
                  {item.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
