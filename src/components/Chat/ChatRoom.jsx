import { useParams } from "react-router-dom";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function ChatRoom() {
  const { id } = useParams();

  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hello 👋", time: "2m ago" },
    { user: "Bob", text: "Welcome!", time: "1m ago" },
  ]);

  function sendMessage(text) {
    setMessages([
      ...messages,
      { user: "You", text, time: "now" },
    ]);
  }

  return (
    <div className="max-w-4xl mx-auto border rounded-lg h-[80vh] flex flex-col">
      <div className="border-b p-4 font-semibold">
        💬 Chat Room #{id}
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((m, i) => (
          <ChatMessage key={i} message={m} />
        ))}
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
}
