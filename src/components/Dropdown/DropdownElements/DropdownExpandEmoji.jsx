import { memo } from "react";
import { cn } from "../../../utils";
import BadgeEmoji from "../../Badge/BadgeEmoji";

const DropdownExpandEmoji = ({ allEmojis }) => {
  return (
    <div className={"absolute right-px tablet:top-12 mobile:top-9 z-50"}>
      <div
        className={cn(
          "desktop:w-[312px] bg-white",
          "tablet:w-[248px] tablet:p-[24px]",
          "mobile:w-[203px] p-4",
          "border border-gray-dropdownBorder rounded-lg",
          "drop-shadow-dropdownBorder"
        )}
      >
        <div className="flex flex-wrap gap-[10px]">
          {allEmojis.map((emojiData) => {
            return (
              <BadgeEmoji
                key={emojiData.id}
                reactions={emojiData}
                style={
                  "tablet:w-fit tablet:h-[38px] mobile:w-[49px] mobile:h-[28px]"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(DropdownExpandEmoji);
