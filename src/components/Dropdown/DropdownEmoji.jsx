import { memo, useState } from "react";
import { cn } from "../../utils";
import BadgeEmoji from "../Badge/BadgeEmoji";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import DropdownButton from "./DropdownElements/DropdownButton";
import DropdownExpandEmoji from "./DropdownElements/DropdownExpandEmoji";
import { useToggle } from "../../hooks/useToggle";

/**
 * 이모지 리액션을 모아둔 드롭다운 리스트
 * @author <hwitae>
 * @param {Object{}} reactionData API로 받아온 reactions 데이터
 * @param {boolean} dropdown 드롭다운 아이콘 표기 여부
 */
const DropdownEmoji = ({ reactionData = {}, dropdown = true }) => {
  const { reactionCount = 0, results = [] } = reactionData;
  const { isOpen, onClickToggle } = useToggle();

  /**
   * 가장 많은 리액션을 받은 항목 최대 3개를 담는 배열
   */
  const preview = results.slice(0, 3);

  return (
    <>
      <div className={cn("flex items-center relative")}>
        <div
          className={cn(
            "flex justify-center gap-x-2 tablet:w-[246px] mobile:w-[215px]"
          )}
        >
          {preview.map((reaction) => {
            return (
              <BadgeEmoji
                key={reaction.id}
                reactions={reaction}
                style={
                  "tablet:w-fit tablet:h-[36px] mobile:w-[55px] mobile:h-[28px]"
                }
              />
            );
          })}
          {/* {dropdown && reactionCount > 2 && (
            
          )} */}
          <DropdownButton onClickOpen={onClickToggle} isOpen={isOpen} />
        </div>
        {isOpen && <DropdownExpandEmoji reactionList={results} />}
      </div>
    </>
  );
};
export default memo(DropdownEmoji);
