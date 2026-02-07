import TagCard from "./TagCard";

export default function TagGrid({ tags, followedTags, onToggleFollow }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {tags.map((tag) => (
        <TagCard
          key={tag.name}
          tag={tag}
          isFollowed={followedTags.includes(tag.name)}
          onToggleFollow={onToggleFollow}
        />
      ))}
    </div>
  );
}
