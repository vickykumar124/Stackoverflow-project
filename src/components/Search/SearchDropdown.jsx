export default function SearchDropdown({ results }) {
  if (!results.length) {
    return (
      <div className="absolute w-full bg-white border mt-1 rounded-md p-3 text-gray-500">
        No results found
      </div>
    );
  }

  return (
    <div className="absolute w-full bg-white border mt-1 rounded-md shadow-lg z-50">
      {results.map((item, index) => (
        <div
          key={index}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          🔍 {item}
        </div>
      ))}
    </div>
  );
}
