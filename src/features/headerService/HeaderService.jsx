import { memo } from "react";
import { cn } from "../../utils";
import { MESSAGES_DATA, REACTIONS_DATA } from "../../MockData";
import Writers from "../../components/Writers/Writers";
import DropdownEmoji from "../../components/Dropdown/DropdownEmoji";

const HeaderService = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[68px] bg-white">
        <div className={cn("flex items-center desktop:w-[1200px] h-[42px]")}>
          <Writers messages={MESSAGES_DATA} />
          <div className="flex items-center h-[28px] pl-7 border-r"></div>
          <DropdownEmoji reactionData={REACTIONS_DATA} />
        </div>
      </div>
    </>
  );
};

export default memo(HeaderService);
