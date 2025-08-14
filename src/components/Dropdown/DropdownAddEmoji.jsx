import { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import EmojiPicker from "emoji-picker-react";
import { useToggle } from "../../hooks/useToggle";

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
          className={"w-[88px] h-[36px] text-base font-medium"}
          btnSize={"btn-36"}
        >
          <div className="flex gap-x-1">
            <Icon iconName={"add_24"} className={"bg-black"} />
            <p>추가</p>
          </div>
        </Button>
        <div
          className="absolute right-5 tablet:top-12 mobile:top-9"
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
