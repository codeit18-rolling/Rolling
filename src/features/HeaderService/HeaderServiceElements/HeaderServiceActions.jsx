import { memo } from "react";
import DropdownEmoji from "../../../components/Dropdown/DropdownEmoji";
import { DropdownAddEmoji } from "../../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./ShareButton";
import { cn } from "../../../utils";

/**
 * 헤더 서비스에서 action이 있는 부분을 모아둔 컴포넌트
 * @author <hwitae>
 * @param {Object[]} topReactions 이모지 배열
 * @returns
 */
const HeaderServiceActions = ({ topReactions = [] }) => {
  return (
    <>
      <div className="desktop:pl-7">
        <DropdownEmoji reactions={topReactions} />
      </div>
      <div className="flex items-center h-[52px] tablet:h-[0px]">
        <DropdownAddEmoji />
        <div
          className={cn(
            "flex items-center border-r h-[28px]",
            "tablet:pl-[13px]",
            "mobile:pl-[15px]"
          )}
        ></div>
        <div className="tablet:pl-[13px] mobile:pl-[15px]">
          <ShareButton />
        </div>
      </div>
    </>
  );
};
export default memo(HeaderServiceActions);
