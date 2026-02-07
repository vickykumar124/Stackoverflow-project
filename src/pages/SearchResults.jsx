import { searchData } from "../Data/searchData";

export default function SearchResults({ query }) {
  if (!query) return null;

  const q = query.toLowerCase();

  const questions = searchData.questions.filter(item =>
    item.toLowerCase().includes(q)
  );

  const frameworks = searchData.frameworks.filter(item =>
    item.toLowerCase().includes(q)
  );

  const languages = searchData.languages.filter(item =>
    item.toLowerCase().includes(q)
  );

  return (
    <div className="mt-4 max-w-3xl mx-auto">

      {questions.length > 0 && (
        <>
          <h2 className="font-semibold mb-2">Questions</h2>
          {questions.map((q, i) => (
            <div key={i} className="border p-3 rounded mb-2">
              {q}
            </div>
          ))}
        </>
      )}

      {frameworks.length > 0 && (
        <>
          <h2 className="font-semibold mt-4 mb-2">Frameworks</h2>
          {frameworks.map((f, i) => (
            <span key={i} className="inline-block border px-3 py-1 mr-2 rounded">
              {f}
            </span>
          ))}
        </>
      )}

      {languages.length > 0 && (
        <>
          <h2 className="font-semibold mt-4 mb-2">Languages</h2>
          {languages.map((l, i) => (
            <span key={i} className="inline-block border px-3 py-1 mr-2 rounded">
              {l}
            </span>
          ))}
        </>
      )}

    </div>
  );
}
