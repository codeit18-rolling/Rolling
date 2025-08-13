import { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import EmojiPicker from "emoji-picker-react";

/**
 * 이미지를 추가할 수 있는 드롭다운
 * @author <hwitae>
 * @param {React.SetStateAction} setEmojiList 이모지 드롭다운 리스트를 변경하기 위한 setter 함수
 */
export const DropdownAddEmoji = ({ setEmojiList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onClickAddEmoji = (emojiData) => {
    console.log(emojiData);
  };

  return (
    <>
      <div className="relative" onClick={onClickOpen}>
        <Button
          btnStyle={"outlined"}
          className={"w-[88px] h-[36px] text-base font-medium rounded-md"}
          btnSize={"btn-36"}
        >
          <div className="flex gap-x-1">
            <Icon iconName={"add_24"} className={"bg-black"} />
            <p>추가</p>
          </div>
        </Button>
        <div className="absolute tablet:top-12 mobile:top-9 right-5">
          <EmojiPicker
            className=" drop-shadow-dropdownBorder"
            open={isOpen}
            onEmojiClick={onClickAddEmoji}
          />
        </div>
      </div>
    </>
  );
};
