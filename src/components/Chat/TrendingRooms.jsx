export default function TrendingRooms({ rooms = [] }) {
  if (!rooms.length) return null;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">🔥 Trending Rooms</h2>

      <div className="flex gap-2 flex-wrap">
        {rooms.map((room) => (
          <span
            key={room.id}
            className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700"
          >
            {room.name}
          </span>
        ))}
      </div>
    </div>
  );
}
