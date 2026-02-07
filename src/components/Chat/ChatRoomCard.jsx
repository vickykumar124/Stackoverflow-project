import { Link } from "react-router-dom";

export default function ChatRoomCard({ room }) {
  return (
    <Link to={`/chat/${room.id}`}>
      <div className="border rounded-md p-4 bg-white hover:shadow cursor-pointer">
        <h3 className="font-semibold text-lg text-blue-600">
          {room.name}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          {room.description}
        </p>

        <p className="text-xs text-gray-500 mt-2">
          Last message {room.lastMessageMinutes}m ago · {room.users} users
        </p>
      </div>
    </Link>
  );
}
