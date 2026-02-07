import { useState } from "react";
import Footer from "../components/Footer";

import TagSearch from "../components/TagSearch";
import TagSort from "../components/TagSort";




const TAGS = [
  {
    name: "javascript",
    description:
      "For questions about programming in ECMAScript (JavaScript/JS).",
    questions: 2533300,
    today: 20,
    week: 101,
  },
  {
    name: "python",
    description:
      "Python is a dynamically typed, multi-purpose programming language.",
    questions: 2222058,
    today: 36,
    week: 210,
  },
  {
    name: "java",
    description:
      "Java is a high-level object-oriented programming language.",
    questions: 1922806,
    today: 16,
    week: 82,
  },
];

export default function Tags() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Popular");

  // 🔹 filter
  let filteredTags = TAGS.filter((tag) =>
    tag.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔹 sort
  if (sort === "Name") {
    filteredTags.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sort === "New") {
    filteredTags.sort((a, b) => b.today - a.today);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="text-3xl font-semibold">Tags</h1>

      <p className="text-gray-600 mt-2">
        A tag is a keyword or label that categorizes your question with other,
        similar questions.
      </p>

      {/* 🔹 SEARCH + SORT */}
      <div className="flex justify-between items-center mt-6">
        <TagSearch value={search} onChange={setSearch} />
        <TagSort active={sort} onChange={setSort} />
      </div>

      {/* 🔹 TAG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {filteredTags.map((tag) => (
          <div
            key={tag.name}
            className="border rounded-md p-4 bg-white hover:shadow-sm"
          >
            <span className="inline-block bg-gray-100 text-blue-600 text-sm px-2 py-1 rounded font-medium">
              {tag.name}
            </span>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {tag.description}
            </p>

            <div className="text-xs text-gray-500 mt-3">
              <p>{tag.questions.toLocaleString()} questions</p>
              <p>
                {tag.today} asked today, {tag.week} this week
              </p>
            </div>
          </div>
        ))}


      </div>
      <br/>
<TagSearch/>
 <br/> 
<TagSort />
   <br/>
      <Footer />
    </div>
  );
}
