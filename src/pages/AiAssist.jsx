

import DebugBox from "../components/DebugBox";
import LearningIntentCard from "../components/LearningIntentCard";
import LevelSelector from "../components/LevelSelector";
export default function AiAssist() {
  return (
    <main className="flex-1 flex flex-col items-center px-6 py-16">

      {/* HEADING */}
      <h1 className="text-3xl font-normal text-center">
        Hi Vicky Kumar,
        <br />
        <span className="font-semibold">
          What would you like to learn today?
        </span>
      </h1>

      {/* INPUT BOX */}
      <div className="relative w-full max-w-3xl mt-8">
        <textarea
          rows="4"
          placeholder="Ask me anything"
          className="w-full border rounded-lg p-4 pr-16 resize-none text-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        {/* SEND BUTTON */}
        <button className="absolute right-4 bottom-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
          ↑
        </button>
      </div>

      {/* FOOTER TEXT */}
      <p className="text-xs text-gray-600 mt-4 text-center max-w-3xl">
        By using AI Assist, you agree to Stack Overflow’s{" "}
        <span className="text-blue-600 cursor-pointer">Terms of Service</span>{" "}
        and{" "}
        <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
        Powered with the help of OpenAI.
        <br />
        For help or feedback,{" "}
        <span className="text-blue-600 cursor-pointer">contact us</span>{" "}
        and reference this conversation ID: <span className="font-mono">boe17e02-41fa-4534-82e2-7d6eed749202</span>
      </p>
      <DebugBox />
<LevelSelector />
<LearningIntentCard />
    </main>
  );
}
