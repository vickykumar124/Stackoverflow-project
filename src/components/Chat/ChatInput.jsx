import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="border-t p-3 flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2 text-sm"
        placeholder="Type message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Send
      </button>
    </div>
  );
}
