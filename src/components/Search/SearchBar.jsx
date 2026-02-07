import { useState } from "react";
import useDebounce from "./useDebounce";
import SearchDropdown from "./SearchDropdown";

export default function SearchBar({ data }) {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query);

  const filteredResults = data.filter(item =>
    item.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search questions, tags, users…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {query && <SearchDropdown results={filteredResults} />}
    </div>
  );
}
