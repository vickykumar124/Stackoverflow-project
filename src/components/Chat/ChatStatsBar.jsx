export default function ChatStatsBar({ interests = [] }) {
  return (
    <div className="bg-gray-100 p-3 rounded-md mb-4 text-sm">
      <span className="font-medium mr-2">Suggested topics:</span>
      {interests.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded mr-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
