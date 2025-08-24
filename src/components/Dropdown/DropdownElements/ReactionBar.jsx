import { memo } from "react";
import BadgeEmoji from "../../Badge/BadgeEmoji";
import DropdownButton from "./DropdownButton";
import { cn } from "../../../utils";

/**
 * 이모지 + 드롭다운 리스트 버튼 컴포넌트
 * @author <hwitae>
 * @param {Object[]} reactions 가장 많이 받은 이모지 리스트
 * @param {Object{}} allReactions 모든 이모지 리스트
 * @param {function} onClickOpen 모든 이모지를 보여주는 드롭다운 토글 함수
 * @param {boolean} isOpen 이모지 드롭다운의 열림/닫힘 상태
 * @returns
 */
const ReactionBar = ({
  reactions = [],
  allReactions = {},
  onClickOpen,
  isOpen,
}) => {
  return (
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
      <DropdownButton
        className={cn(
          !(allReactions?.count > 3) &&
            "opacity-0 invisible pointer-events-none"
        )}
        onClickOpen={onClickOpen}
        isOpen={isOpen}
      />
    </div>
  );
};

export default memo(ReactionBar);
