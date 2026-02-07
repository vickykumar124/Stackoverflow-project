export default function SaveButton({ saved, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm text-gray-600 hover:text-black"
    >
      {saved ? "⭐ Saved" : "⭐ Save"}
    </button>
  );
}
