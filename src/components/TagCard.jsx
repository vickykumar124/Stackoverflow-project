export default function TagCard({ tag, isFollowed, onToggleFollow }) {
  return (
    <div className="border rounded-md p-4 bg-white hover:shadow-sm">
      <span className="inline-block bg-gray-100 text-blue-600 text-sm px-2 py-1 rounded font-medium">
        {tag.name}
      </span>

      <p className="text-sm text-gray-600 mt-2">
        {tag.description}
      </p>

      <div className="text-xs text-gray-500 mt-3">
        <p>{tag.questions.toLocaleString()} questions</p>
        <p>
          {tag.today} asked today, {tag.week} this week
        </p>
      </div>

      {/* ⭐ FOLLOW BUTTON */}
      <button
        onClick={() => onToggleFollow(tag.name)}
        className="mt-3 text-xs text-blue-600 hover:underline"
      >
        {isFollowed ? "★ Following" : "☆ Follow"}
      </button>
    </div>
  );
}
