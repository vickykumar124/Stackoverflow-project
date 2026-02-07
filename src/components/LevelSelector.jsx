import { useEffect, useState } from "react";

const LEVELS = [
  {
    name: "Beginner",
    desc: "Simple explanation with examples",
  },
  {
    name: "Intermediate",
    desc: "Best practices, why & common mistakes",
  },
  {
    name: "Advanced",
    desc: "Internals, performance & edge cases",
  },
];

export default function LevelSelector({ onLevelChange }) {
  const [activeLevel, setActiveLevel] = useState("Beginner");

  // Load saved level
  useEffect(() => {
    const saved = localStorage.getItem("ai_level");
    if (saved) setActiveLevel(saved);
  }, []);

  // Save & notify parent
  const handleSelect = (level) => {
    setActiveLevel(level);
    localStorage.setItem("ai_level", level);
    onLevelChange?.(level);
  };

  return (
    <div className="mt-4">
      {/* BUTTONS */}
      <div className="flex gap-3">
        {LEVELS.map((lvl) => (
          <button
            key={lvl.name}
            onClick={() => handleSelect(lvl.name)}
            className={`px-4 py-2 rounded-md border text-sm transition
              ${
                activeLevel === lvl.name
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:bg-gray-100"
              }`}
            title={lvl.desc}
          >
            {lvl.name}
          </button>
        ))}
      </div>

      {/* HELPER TEXT */}
      <p className="text-xs text-gray-500 mt-2">
        Selected level: <strong>{activeLevel}</strong>
      </p>

      {/* INTERMEDIATE SPECIAL FEATURE */}
      {activeLevel === "Intermediate" && (
        <div className="mt-3 text-sm text-blue-700 bg-blue-50 border border-blue-200 p-3 rounded">
          🔍 <strong>Intermediate mode enabled:</strong>  
          Best practices, common mistakes, and “why this approach” will be shown.
        </div>
      )}
    </div>
  );
}
