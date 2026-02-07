import ChatRoomCard from "./ChatRoomCard";

export default function RecentlyActiveRooms() {
  const recentRooms = [
    {
      id: 201,
      name: "Charcoal Test SO",
      description:
        "Test results from various unofficial Charcoal clients.",
      lastMessageMinutes: 1,
      users: 5,
      activityScore: 99,
    },
    {
      id: 202,
      name: "New Answers to Old Questions HQ",
      description:
        "Where new answers to old questions are logged.",
      lastMessageMinutes: 20,
      users: 12,
      activityScore: 92,
    },
    {
      id: 203,
      name: "Challenge Accepted",
      description:
        "Discussion related to coding challenges.",
      lastMessageMinutes: 49,
      users: 8,
      activityScore: 85,
    },
    {
      id: 204,
      name: "Discussion on answer by Peter Cordes",
      description:
        "Imported from a comment discussion.",
      lastMessageMinutes: 120,
      users: 6,
      activityScore: 70,
    },
    {
      id: 205,
      name: "Stack Overflow Lobby",
      description:
        "General chat room for all Stack Overflow users.",
      lastMessageMinutes: 180,
      users: 120,
      activityScore: 88,
    },
    {
      id: 206,
      name: "SOCVR Request Graveyard",
      description:
        "Archive for SOCVR action requests.",
      lastMessageMinutes: 300,
      users: 15,
      activityScore: 65,
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
        🔥 Recently active
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Rooms that have had activity within the last 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentRooms.map((room) => (
          <ChatRoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}
