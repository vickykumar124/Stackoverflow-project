import { Search } from "lucide-react";
import { useState } from "react";

const TAGS = [
  {
    name: "javascript",
    description:
      "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations.",
    questions: "2533300",
    today: 20,
    week: 101,
  },
  {
    name: "python",
    description:
      "Python is a dynamically typed, multi-purpose programming language designed to be quick to learn.",
    questions: "2222058",
    today: 36,
    week: 210,
  },
  {
    name: "java",
    description:
      "Java is a high-level object-oriented programming language.",
    questions: "1922806",
    today: 16,
    week: 82,
  },
  {
    name: "c#",
    description:
      "C# (pronounced 'see sharp') is a high-level programming language developed by Microsoft.",
    questions: "1627273",
    today: 17,
    week: 97,
  },
];

export default function TagsPage() {
  const [search, setSearch] = useState("");

  const filteredTags = TAGS.filter(tag =>
    tag.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* HEADER */}
      <h1 className="text-3xl font-semibold">Tags</h1>

      <p className="text-gray-600 mt-2 max-w-3xl">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>

      <button className="text-blue-600 text-sm mt-2 hover:underline">
        Show all tag synonyms
      </button>

      {/* SEARCH + SORT */}
      <div className="flex justify-between items-center mt-6">
        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by tag name"
            className="w-full border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-blue-500"
          />
        </div>

        <div className="flex border rounded-md overflow-hidden text-sm">
          <button className="px-4 py-2 bg-gray-100 font-semibold">
            Popular
          </button>
          <button className="px-4 py-2 hover:bg-gray-100">Name</button>
          <button className="px-4 py-2 hover:bg-gray-100">New</button>
        </div>
      </div>

      {/* TAG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {filteredTags.map((tag) => (
          <div
            key={tag.name}
            className="border rounded-md p-4 hover:shadow-sm"
          >
            <span className="inline-block bg-gray-100 text-sm px-2 py-1 rounded text-blue-600 font-medium">
              {tag.name}
            </span>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {tag.description}
            </p>

            <div className="text-xs text-gray-500 mt-3">
              <p>{tag.questions} questions</p>
              <p>
                {tag.today} asked today, {tag.week} this week
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
