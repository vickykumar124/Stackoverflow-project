export default function TagSort({ active, onChange }) {
  const btn = "px-4 py-2 text-sm";

  return (
    <div className="flex border rounded-md overflow-hidden">
      {["Popular", "Name", "New"].map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`${btn} ${
            active === item
              ? "bg-gray-100 font-semibold"
              : "hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
