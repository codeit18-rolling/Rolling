import { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import EmojiPicker from "emoji-picker-react";
import { useToggle } from "../../hooks/useToggle";
import { cn } from "../../utils";

/**
 * 이미지를 추가할 수 있는 드롭다운
 * @author <hwitae>
 * @param {React.SetStateAction} setEmojiList 이모지 드롭다운 리스트를 변경하기 위한 setter 함수
 */
export const DropdownAddEmoji = ({ setEmojiList }) => {
  const { isOpen, onClickToggle } = useToggle();

  const onClickAddEmoji = (emojiData) => {
    console.log(emojiData);
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
              className={"bg-black tablet:block mobile:hidden"}
            />
            <Icon
              iconName={"add_24"}
              iconSize={"ic-20"}
              className={"bg-black tablet:hidden mobile:block"}
            />
            <p className="tablet:block mobile:hidden">추가</p>
          </div>
        </Button>
        <div
          className="absolute right-5 tablet:top-12 mobile:top-9 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <EmojiPicker
            className="drop-shadow-dropdownBorder"
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
