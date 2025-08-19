import { memo } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import EmojiPicker from "emoji-picker-react";
import { useToggle } from "../../hooks/useToggle";
import { cn } from "../../utils";
import { postEmoji } from "../../service/Emoji/postEmoji";

/**
 * 이미지를 추가할 수 있는 드롭다운
 * @author <hwitae>
 */
const DropdownAddEmoji = ({ postId, setIsUpdated }) => {
  const { isOpen, onClickToggle } = useToggle();

  /**
   * 이모지 클릭 시 이모지 등록 요청을 보낸다.
   * @param {Object{}} emojiData 이모지 클릭시 주어지는 객체
   */
  const onClickAddEmoji = async (emojiData) => {
    if (!emojiData) return;

    const reactionData = {
      emoji: emojiData.emoji,
      type: "increase",
    };

    await postEmoji(postId, reactionData);
    setIsUpdated(true);
  };

  return (
    <>
      <div className="relative" onClick={onClickToggle}>
        <Button
          btnStyle={"outlined"}
          className={cn(
            "text-base font-medium",
            "tablet:w-[88px] tablet:h-[36px]",
            "mobile:h-[32px]"
          )}
          btnSize={"btn-icon-36"}
        >
          <div className="flex gap-x-1">
            <Icon
              iconName={"add_24"}
              className={"bg-black hidden tablet:block"}
            />
            <Icon
              iconName={"add_24"}
              iconSize={"ic-20"}
              className={"bg-black block tablet:hidden"}
            />
            <p className="hidden tablet:block">추가</p>
          </div>
        </Button>
        <div
          className={cn(
            "absolute z-50 -right-12 top-10",
            "tablet:top-12 tablet:right-5"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <EmojiPicker
            className="drop-shadow-dropdownBorder z-50"
            open={isOpen}
            width={307}
            height={393}
            onEmojiClick={onClickAddEmoji}
            reactionsDefaultOpen={true}
          />
        </div>
      </div>
    </>
  );
};

export default memo(DropdownAddEmoji);
