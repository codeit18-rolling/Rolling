import { memo } from "react";
import { cn } from "../../utils";
import BadgeEmoji from "../Badge/BadgeEmoji";

const DropdownEmoji = ({ data }) => {
  return (
    <>
      <div className={cn("flex")}>
        <BadgeEmoji />
      </div>
    </>
  );
};
export default memo(DropdownEmoji);
