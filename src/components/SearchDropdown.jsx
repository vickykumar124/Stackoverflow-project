export default function SearchDropdown({ query, data }) {
  if (!query) return null;

  const q = query.toLowerCase();

  const filterList = (list) =>
    list.filter((item) => item.toLowerCase().includes(q));

  const questions = filterList(data.questions);
  const frameworks = filterList(data.frameworks);
  const languages = filterList(data.languages);
  const tools = filterList(data.tools);

  return (
    <div className="absolute top-full left-0 w-full bg-white border rounded-md mt-1 shadow-lg z-50 p-4 space-y-4">

      {questions.length > 0 && (
        <Section title="Questions" items={questions} />
      )}

      {frameworks.length > 0 && (
        <Section title="Frameworks" items={frameworks} />
      )}

      {languages.length > 0 && (
        <Section title="Languages" items={languages} />
      )}

      {tools.length > 0 && (
        <Section title="Tools" items={tools} />
      )}

      {questions.length +
        frameworks.length +
        languages.length +
        tools.length === 0 && (
        <p className="text-gray-500 text-sm">No results found</p>
      )}
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold text-sm mb-2">{title}</h3>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
