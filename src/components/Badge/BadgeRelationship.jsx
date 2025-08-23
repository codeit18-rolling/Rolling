import { cn } from "../../utils";

const RELATIONSHIP_BG = {
  지인: "bg-beige-100",
  동료: "bg-purple-100",
  가족: "bg-green-100",
  친구: "bg-blue-100",
};

const RELATIONSHIP_TEXT = {
  지인: "text-beige-500",
  동료: "text-purple-600",
  가족: "text-green-500",
  친구: "text-blue-500",
};

const RelationshipBadge = ({ relationship }) => {
  return (
    <div
      className={cn(
        "inline-flex rounded-[4px] text-14 px-[8px]",
        RELATIONSHIP_BG[relationship]
      )}
    >
      <span className={cn("text-14", RELATIONSHIP_TEXT[relationship])}>
        {relationship}
      </span>
    </div>
  );
};

export default RelationshipBadge;
