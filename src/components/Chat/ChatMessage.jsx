export default function ChatMessage({ message }) {
  return (
    <div className="mb-3">
      <div className="text-xs text-gray-500">
        <strong>{message.user}</strong> · {message.time}
      </div>
      <div className="bg-white p-2 rounded shadow-sm text-sm">
        {message.text}
      </div>
    </div>
  );
}
