import { memo, useState } from "react";
import { cn } from "../../utils";
import BadgeEmoji from "../Badge/BadgeEmoji";
import DropdownButton from "./DropdownElements/DropdownButton";
import DropdownExpandEmoji from "./DropdownElements/DropdownExpandEmoji";
import { useToggle } from "../../hooks/useToggle";

/**
 * 이모지 리액션을 모아둔 드롭다운 리스트
 * @author <hwitae>
 * @param {Object{}} reactionData API로 받아온 reactions 데이터
 * @param {boolean} dropdown 드롭다운 아이콘 표기 여부
 */
const DropdownEmoji = ({ reactions = [], allReactions = {} }) => {
  const { isOpen, onClickToggle } = useToggle();

  return (
    <>
      <div className={cn("flex items-center relative")}>
        <div className={cn("flex gap-x-2")}>
          {reactions.map((reaction) => {
            return (
              <BadgeEmoji
                key={reaction.id}
                reactions={reaction}
                style={"w-[50px] h-[28px] tablet:w-fit tablet:h-[36px]"}
              />
            );
          })}
          {allReactions?.count > 3 ? (
            <DropdownButton onClickOpen={onClickToggle} isOpen={isOpen} />
          ) : (
            <div className="w-[20px]"></div>
          )}
        </div>
        {isOpen && <DropdownExpandEmoji allEmojis={allReactions?.results} />}
      </div>
    </>
  );
};
export default memo(DropdownEmoji);
