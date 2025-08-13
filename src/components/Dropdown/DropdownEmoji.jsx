import { memo, useState } from "react";
import { cn } from "../../utils";
import BadgeEmoji from "../Badge/BadgeEmoji";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

/**
 * 이모지 리액션을 모아둔 드롭다운 리스트
 * @author <hwitae>
 * @param {Object{}} reactionData API로 받아온 reactions 데이터
 */
const DropdownEmoji = ({ reactionData = {}, dropdown = true }) => {
  const { count = 0, results = [] } = reactionData;

  /**
   * 가장 많은 리액션을 받은 항목 최대 3개를 담는 배열
   */
  const preview = results.sort((a, b) => b.count - a.count).slice(0, 3);

  /**
   * 드롭다운 열림/닫힘 상태
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * 버튼 클릭시 드롭다운 열림/닫힘 상태를 변경한다.
   */
  const onClickOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={cn("flex items-center relative")}>
        <div
          className={cn(
            "flex justify-center gap-x-2 tablet:w-[208px] mobile:w-[177px]"
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
        </div>
        {dropdown && count > 3 && (
          <div
            className={cn("flex items-center w-[36px]")}
            onClick={onClickOpen}
          >
            <Icon
              iconName="arrow_down"
              iconSize="ic-24"
              className={cn("bg-black cursor-pointer", isOpen && "rotate-180")}
            />
          </div>
        )}
        {isOpen && (
          <div className={cn("absolute tablet:top-12 mobile:top-9 right-px")}>
            <div
              className={cn(
                "desktop:w-[312px] desktop:h-[134px] bg-white",
                "tablet:w-[248px] tablet:h-[134px] tablet:p-[24px]",
                "mobile:w-[203px] mobile:h-[98px] p-4",
                "border border-gray-dropdownBorder rounded-lg",
                "drop-shadow-dropdownBorder"
              )}
            >
              <div className={cn("flex flex-wrap gap-[10px]")}>
                {results.map((reaction) => {
                  return (
                    <BadgeEmoji
                      key={reaction.id}
                      reactions={reaction}
                      style={
                        "tablet:w-fit tablet:h-[38px] mobile:w-[49px] mobile:h-[28px]"
                      }
                    />
                  );
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
