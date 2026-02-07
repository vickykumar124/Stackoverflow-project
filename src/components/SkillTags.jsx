export default function SkillTags({ tags = [] }) {
  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {tags.map((tag) => (
        <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
          #{tag}
        </span>
      ))}
    </div>
  );
}
