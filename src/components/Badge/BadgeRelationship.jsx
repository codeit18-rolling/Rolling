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
        "inline-flex rounded-[4px] text-14 px-[8px]",
        RELATIONSHIP_COLOR[relationship]
      )}
    >
      <span className="font-normal text-14 leading-5 tracking-[-0.05em]">
        {relationship}
      </span>
    </div>
  );
};

export default RelationshipBadge;
