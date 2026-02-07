import ChallengeCard from "../components/ChallengeCard";

const CHALLENGES = [
  {
    id: 1,
    title: "Mystery Alphabet Decoder",
    difficulty: "Intermediate",
    votes: 71,
    views: 5000,
    tags: ["javascript", "strings"],
  },
  {
    id: 2,
    title: "Array Rotation Puzzle",
    difficulty: "Beginner",
    votes: 42,
    views: 3200,
    tags: ["arrays"],
  },
  {
    id: 3,
    title: "Valid Parentheses Checker",
    difficulty: "Beginner",
    votes: 98,
    views: 8800,
    tags: ["stack", "logic"],
  },
  {
    id: 4,
    title: "Debounce Function",
    difficulty: "Advanced",
    votes: 130,
    views: 12000,
    tags: ["javascript", "performance"],
  },
  {
    id: 5,
    title: "SQL Rank Query",
    difficulty: "Intermediate",
    votes: 64,
    views: 4100,
    tags: ["sql"],
  },
];

export default function Challenges() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold mb-2">Challenges</h1>
      <p className="text-gray-600 mb-6">
        Test your skills, join challenges, and learn from the community.
      </p>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CHALLENGES.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
          />
        ))}
      </div>
   
    </div>
  );
}
