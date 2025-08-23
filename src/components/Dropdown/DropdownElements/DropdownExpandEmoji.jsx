import { memo, useRef } from "react";
import BadgeEmoji from "../../Badge/BadgeEmoji";
import EmojiMoreLoadButton from "../../../features/HeaderService/HeaderServiceElements/EmojiMoreLoadButton";
import { ExpandEmojiWrapper } from "./ExpandEmojiWrapper";

const DropdownExpandEmoji = ({
  fetchNextPage,
  allEmojiData = {},
  hasNextPage,
}) => {
  const dropdownRef = useRef(null);

  return (
    <ExpandEmojiWrapper>
      <div className="flex flex-wrap gap-[10px]" ref={dropdownRef}>
        {allEmojiData?.pages?.map((emojiData) => {
          return emojiData?.results.map((data) => {
            return (
              <BadgeEmoji
                key={data.id}
                reactions={data}
                style={
                  "tablet:w-fit tablet:h-[38px] mobile:w-[49px] mobile:h-[28px]"
                }
              />
            );
          });
        })}
      </div>
      {hasNextPage && <EmojiMoreLoadButton onClick={fetchNextPage} />}
    </ExpandEmojiWrapper>
  );
};

export default memo(DropdownExpandEmoji);
