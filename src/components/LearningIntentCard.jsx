export default function LearningIntentCard() {
  return (
    <section className="border rounded-lg p-4 mb-6 bg-white">
      <h3 className="font-semibold text-lg mb-3">
        🎯 Define your learning intent
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* WHAT */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            What do you want to learn?
          </label>
          <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm">
            <option>JavaScript</option>
            <option>React</option>
            <option>Node.js</option>
            <option>Data Structures</option>
            <option>System Design</option>
          </select>
        </div>

        {/* WHY */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Purpose
          </label>
          <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm">
            <option>Concept clarity</option>
            <option>Interview preparation</option>
            <option>Debugging help</option>
            <option>Project building</option>
          </select>
        </div>

        {/* OUTPUT */}
        <div>
          <label className="text-sm font-medium text-gray-600">
            Preferred output
          </label>
          <select className="mt-1 w-full border rounded-md px-3 py-2 text-sm">
            <option>Simple explanation</option>
            <option>Code example</option>
            <option>Step-by-step</option>
            <option>Real-world analogy</option>
          </select>
        </div>
      </div>
    </section>
  );
}