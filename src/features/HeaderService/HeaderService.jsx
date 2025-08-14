import { memo } from "react";
import { cn } from "../../utils";
import {
  CardListMockData,
  MESSAGES_DATA,
  REACTIONS_DATA,
} from "../../MockData";
import Writers from "../../components/Writers/Writers";
import DropdownEmoji from "../../components/Dropdown/DropdownEmoji";
import { DropdownAddEmoji } from "../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./HeaderServiceElements/ShareButton";

const HeaderService = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[68px] bg-white z-50">
        <div
          className={cn(
            "flex items-center h-[42px]",
            "desktop:w-[1200px]",
            "tablet:w-[768px]"
          )}
        >
          <p className="flex-1 text-gray-800 text-28 font-bold leading-[42px] tablet:block mobile:hidden">
            To.{CardListMockData[0].name}
          </p>
          <div className="desktop:block tablet:hidden">
            <Writers messages={MESSAGES_DATA} />
          </div>
          <div className="flex items-center h-[28px] pl-7 border-r desktop:block mobile:hidden"></div>
          <div className="pl-5">
            <DropdownEmoji reactionData={REACTIONS_DATA} />
          </div>
          <DropdownAddEmoji />
          <div className="flex items-center h-[28px] pl-[13px] border-r"></div>
          <div className="pl-[13px]">
            <ShareButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HeaderService);
