const picks = [
  {
    title: "Master JavaScript Closures",
    desc: "Understand scope, closures, and real-world use cases.",
    tag: "JavaScript",
  },
  {
    title: "React useEffect Deep Dive",
    desc: "Learn dependency arrays and common mistakes.",
    tag: "React",
  },
  {
    title: "Node.js Authentication Basics",
    desc: "JWT, cookies, and session-based auth explained.",
    tag: "Backend",
  },
];

export default function DailyPicks() {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold mb-2">
        Daily Learning Picks
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Curated topics to improve your skills today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {picks.map((item, index) => (
          <div
            key={index}
            className="border rounded-md p-4 hover:shadow transition"
          >
            <h3 className="font-semibold mb-1">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              {item.desc}
            </p>

            <span className="inline-block text-xs bg-gray-100 px-2 py-1 rounded">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
