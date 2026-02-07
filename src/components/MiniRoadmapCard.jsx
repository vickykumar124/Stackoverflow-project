export default function MiniRoadmapCard({
  title,
  description,
  progress,
  color = "blue",
}) {
  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full bg-${color}-500`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{progress}% complete</span>
        <button className="text-blue-600 hover:underline">
          Continue →
        </button>
      </div>
    </div>
  );
}
