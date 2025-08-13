import { memo, useState } from "react";
import { cn } from "../../utils";
import BadgeEmoji from "../Badge/BadgeEmoji";
import Icon from "../Icon/Icon";

/**
 * 이모지 리액션을 모아둔 드롭다운 리스트
 * @author <hwitae>
 * @param {Object{}} reactionData API로 받아온 reactions 데이터
 */
const DropdownEmoji = ({ reactionData }) => {
  const { count, results } = reactionData;

  /**
   * 가장 많은 리액션을 받은 항목 최대 3개를 담는 배열
   */
  const preview = results.sort((a, b) => b.count - a.count).slice(0, 3);

  /**
   * 드롭다운 열림/닫힘 상태
   */
  const [isOpen, setIsOpen] = useState(true);

  /**
   * 버튼 클릭시 드롭다운 열림/닫힘 상태를 변경한다.
   */
  const onClickOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={cn("flex items-center relative")}>
        <div className={cn("flex justify-center gap-x-2 w-[208px]")}>
          {preview.map((reaction) => {
            return <BadgeEmoji key={reaction.id} reactions={reaction} />;
          })}
        </div>
        {count > 3 && (
          <div
            className={cn("flex items-center w-[36px]")}
            onClick={onClickOpen}
          >
            <Icon
              iconName="arrow_down"
              iconSize="ic-24"
              className={cn("bg-black cursor-pointer")}
            />
          </div>
        )}
        {isOpen && (
          <div className={cn("absolute top-12 right-px")}>
            <div
              className={cn(
                "tablet:w-[312px] tablet:h-[134px] p-[24px] bg-white",
                "mobile:w-[248px] h-[134px]",
                "border border-gray-dropdownBorder rounded-lg",
                "drop-shadow-dropdownBorder"
              )}
            >
              <div className={cn("flex flex-wrap gap-2.5")}>
                {results.map((reaction) => {
                  return <BadgeEmoji key={reaction.id} reactions={reaction} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default memo(DropdownEmoji);
