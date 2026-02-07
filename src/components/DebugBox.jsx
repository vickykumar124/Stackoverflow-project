export default function DebugBox() {
  return (
    <div className="border rounded-md p-4 mt-4">
      <h3 className="font-semibold mb-2">🐞 Debug Mode</h3>

      <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
        <li>❌ Missing dependency array causes infinite re-render</li>
        <li>⚠️ API call inside render is bad practice</li>
        <li>✅ Always clean up side effects</li>
      </ul>
    </div>
  );
}
