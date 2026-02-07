import { Link } from "react-router-dom";

export default function QuestionCard({ question }) {
  return (
    <div className="flex gap-6 border-b py-6">

      {/* LEFT STATS */}
      <div className="text-center w-28 text-sm text-gray-600 space-y-1">
        <p>{question.votes} votes</p>
        <p>{question.answers} answers</p>
        <p>{question.views} views</p>
      </div>

      <div className="flex-1">

        <Link
          to={`/questions/${question.id}`}
          className="text-blue-700 font-medium hover:underline mb-2 inline-block"
        >
          {question.title}
        </Link>

        <div className="flex flex-wrap gap-2 mt-2">
          {question.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
