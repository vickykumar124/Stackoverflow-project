export default function ChatFilters() {
  return (
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
        All
      </button>
      <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
        Active
      </button>
      <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
        Popular
      </button>
      <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">
        New
      </button>
    </div>
  );
}
