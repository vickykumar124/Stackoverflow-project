export default function InternalKnowledgeFlow() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-blue-600 text-white p-6 rounded-xl">
        Question Asked
      </div>
      <div className="bg-purple-600 text-white p-6 rounded-xl">
        AI Suggests
      </div>
      <div className="bg-green-600 text-white p-6 rounded-xl">
        Human Verified
      </div>
      <div className="bg-orange-500 text-white p-6 rounded-xl">
        Reused by Team
      </div>
    </div>
  );
}
