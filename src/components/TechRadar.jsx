import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const radarData = [
  { name: "React", status: "up" },
  { name: "Next.js", status: "upStrong" },
  { name: "MongoDB", status: "stable" },
  { name: "Node.js", status: "up" },
  { name: "Docker", status: "down" },
];

const getIcon = (status) => {
  if (status === "upStrong")
    return <TrendingUp className="text-green-600" size={16} />;
  if (status === "up")
    return <TrendingUp className="text-green-500" size={16} />;
  if (status === "down")
    return <TrendingDown className="text-red-500" size={16} />;
  return <Minus className="text-gray-400" size={16} />;
};

export default function TechRadar() {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
        🔥 Tech Radar
        <span className="text-xs text-gray-500">(Today)</span>
      </h3>

      <ul className="space-y-2">
        {radarData.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-700">{tech.name}</span>
            {getIcon(tech.status)}
          </li>
        ))}
      </ul>
    </div>
  );
}
