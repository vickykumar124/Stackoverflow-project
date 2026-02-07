

import JoinButton from "./JoinButton";
import SaveButton from "./SaveButton";
import DifficultyBadge from "./DifficultyBadge";
import SkillTags from "./SkillTags";

export default function ChallengeCard({
  challenge,
  isJoined,
  isSaved,
  onJoin,
  onSave,
}) {
  return (
    <div className="border rounded-md p-4 bg-white">
      
      <h3 className="text-lg font-semibold">
        {challenge.title}
      </h3>

      {/* Difficulty badge */}
      <DifficultyBadge level={challenge.difficulty} />

      {/* Votes & views */}
      <div className="text-xs text-gray-500 mt-2">
        {challenge.votes} votes · {challenge.views} views
      </div>

      {/* Skill tags */}
      <SkillTags tags={challenge.tags} />

      {/* Action buttons */}
      <div className="flex gap-4 mt-3">
        <JoinButton
          joined={isJoined}
          onClick={() => onJoin(challenge.id)}
        />

        <SaveButton
          saved={isSaved}
          onClick={() => onSave(challenge.id)}
        />
      </div>
  <JoinButton/>
  <SaveButton/>
  <DifficultyBadge/>
  <SkillTags/>

    </div>
  );
}
