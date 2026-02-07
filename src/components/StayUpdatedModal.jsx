   import { useEffect } from "react";
   export default function StayUpdatedModal({ onClose }) {

 useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);



  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

    
      <div className="relative bg-white w-full max-w-xl h-full p-8 z-50 overflow-y-auto">

        <h2 className="text-2xl font-bold mb-2">Stay updated</h2>

        <p className="text-gray-600 mb-6">
          Subscribe to receive Stack Overflow Business content around
          knowledge sharing, collaboration, and AI.
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Work email *</label>
            <input className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="text-sm font-medium">Company *</label>
            <input className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="text-sm font-medium">Country *</label>
         <select className="w-full border px-3 py-2 rounded">
  {[
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    "South Africa",
    "UAE",
    "Singapore",
    "Nepal",
    "Sri Lanka",
    "Bangladesh"
  ].map(country => (
    <option key={country}>{country}</option>
  ))}
</select>

          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            I would like to receive marketing communications
          </label>

          <button className="w-full bg-black text-white py-3 rounded-full">
            Receive updates
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
