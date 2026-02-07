import { useEffect, useState } from "react";

const WEEK_KEY = "weekly_challenge_progress";
const WEEK_TIME_KEY = "weekly_challenge_start";

const TOTAL_TARGET = 5; // questions to solve

function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  return Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
}

export default function WeeklyChallenge() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const savedWeek = localStorage.getItem(WEEK_TIME_KEY);
    const currentWeek = getWeekNumber();

    if (savedWeek !== String(currentWeek)) {
      localStorage.setItem(WEEK_TIME_KEY, currentWeek);
      localStorage.setItem(WEEK_KEY, "0");
      setCompleted(0);
    } else {
      const saved = localStorage.getItem(WEEK_KEY);
      setCompleted(saved ? Number(saved) : 0);
    }
  }, []);

  const handleComplete = () => {
    if (completed < TOTAL_TARGET) {
      const newValue = completed + 1;
      setCompleted(newValue);
      localStorage.setItem(WEEK_KEY, newValue);
    }
  };

  const progressPercent = Math.min(
    (completed / TOTAL_TARGET) * 100,
    100
  );

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="font-semibold text-lg mb-1">
        🏆 Weekly Challenge
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        Solve {TOTAL_TARGET} questions this week
      </p>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-green-500 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex justify-between items-center text-sm mb-3">
        <span className="text-gray-500">
          {completed}/{TOTAL_TARGET} completed
        </span>
        <span className="text-green-600 font-semibold">
          +50 XP
        </span>
      </div>

      <button
        onClick={handleComplete}
        disabled={completed >= TOTAL_TARGET}
        className={`w-full py-2 rounded-md text-sm font-semibold ${
          completed >= TOTAL_TARGET
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {completed >= TOTAL_TARGET
          ? "Challenge Completed 🎉"
          : "Mark One Question Done"}
      </button>
    </div>
  );
}
