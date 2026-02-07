export default function JoinButton({ joined, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm text-blue-600 hover:underline"
    >
      {joined ? "✅ Joined" : "🚀 Join Challenge"}
    </button>
  );
}
