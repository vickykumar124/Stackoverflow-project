import ChatRoomCard from "../components/Chat/ChatRoomCard";
import TrendingRooms from "../components/Chat/TrendingRooms";
import ChatStatsBar from "../components/Chat/ChatStatsBar";
import ChatFilters from "../components/Chat/ChatFilters";
import RecommendedRooms from "../components/Chat/RecommendedRooms";
import RecentlyActiveRooms from "../components/Chat/RecentlyActiveRooms";


export default function ChatExplore() {
  const rooms = [
    {
      id: 1,
      name: "Stack Overflow Lobby",
      description: "General discussion for all Stack Overflow users.",
      lastMessageMinutes: 3,
      users: 120,
      activityScore: 95,
    },
    {
      id: 2,
      name: "JavaScript",
      description: "Everything about JS, React, Node, etc.",
      lastMessageMinutes: 9,
      users: 80,
      activityScore: 88,
    },
    {
      id: 3,
      name: "Python",
      description: "Python discussions and help.",
      lastMessageMinutes: 30,
      users: 60,
      activityScore: 65,
    },
    {
      id: 4,
      name: "Android",
      description: "Android dev chat room.",
      lastMessageMinutes: 1,
      users: 50,
      activityScore: 90,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Explore Chat</h1>
      <p className="text-gray-600 mb-6">
        Find and explore communities on Stack Overflow.
      </p>

      <ChatStatsBar interests={["HTML","CSS","JavaScript", "React", "Node.js ", "MongoDB","Express.js"]} />

      <ChatFilters />

      <TrendingRooms rooms={rooms} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {rooms.map((room) => (
          <ChatRoomCard key={room.id} room={room} />
        ))}
      </div>
      <br/>
      <RecommendedRooms/>
      <RecentlyActiveRooms/>
    </div>
  );
}
