import ChatRoomCard from "./ChatRoomCard";

export default function RecommendedRooms() {
  const recommendedRooms = [
    {
      id: 101,
      name: "PHP",
      description: "Support group for those afflicted with PHP.",
      lastMessageMinutes: 540,
      users: 70,
      activityScore: 60,
    },
    {
      id: 102,
      name: "C",
      description: "Low-level programming discussions.",
      lastMessageMinutes: 1140,
      users: 55,
      activityScore: 50,
    },
    {
      id: 103,
      name: "Lounge <C++>",
      description: "Casual discussion for C++ developers.",
      lastMessageMinutes: 1320,
      users: 40,
      activityScore: 45,
    },
    {
      id: 104,
      name: "Rust",
      description: "Systems programming with Rust.",
      lastMessageMinutes: 2880,
      users: 35,
      activityScore: 48,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
        ❤️ Recommended for you
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Rooms based on your watched tags
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendedRooms.map((room) => (
          <ChatRoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
