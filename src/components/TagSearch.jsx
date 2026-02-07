import { Search } from "lucide-react";

export default function TagSearch({ value, onChange }) {
  return (
    <div className="relative w-72">
      <Search
        size={16}
        className="absolute left-3 top-2.5 text-gray-400"
      />
      <input
        type="text"
        placeholder="Filter by tag name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
