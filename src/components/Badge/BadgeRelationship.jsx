import { cn } from "../../utils";

const RELATIONSHIP_COLOR = {
  지인: "bg-beige-100 text-beige-500",
  동료: "bg-purple-100 text-purple-600",
  가족: "bg-green-100 text-green-500",
  친구: "bg-blue-100 text-blue-500",
};

const RelationshipBadge = ({ relationship }) => {
  const color = RELATIONSHIP_COLOR[relationship];

  return (
    <div
      className={cn(
        "inline-flex rounded-[4px] text-14 px-[8px] font-sans",
        RELATIONSHIP_COLOR[relationship]
      )}
    >
      {relationship}
    </div>
  );
};

export default RelationshipBadge;
