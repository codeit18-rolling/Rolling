import { memo } from "react";
import { cn } from "../../../utils";
import BadgeEmoji from "../../Badge/BadgeEmoji";
import EmojiMoreLoadButton from "../../../features/HeaderService/HeaderServiceElements/EmojiMoreLoadButton";
import { ExpandEmojiWrapper } from "./ExpandEmojiWrapper";

const DropdownExpandEmoji = ({ allEmojis = [] }) => {
  return (
    <ExpandEmojiWrapper>
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
      <EmojiMoreLoadButton />
    </ExpandEmojiWrapper>
  );
};

export default memo(DropdownExpandEmoji);
