import { memo } from "react";
import DropdownEmoji from "../../../components/Dropdown/DropdownEmoji";
import Writers from "../../../components/Writers/Writers";
import { DropdownAddEmoji } from "../../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./ShareButton";
import { cn } from "../../../utils";

/**
 * 작성자, 이모지, 이모지 추가, 공유 버튼을 모아둔 컴포넌트
 * @author <hwitae>
 * @param {Object{}} recipients
 * @returns
 */
export const HeaderServiceContents = ({ recipients }) => {
  return (
    <div className={cn("flex items-center justify-center")}>
      <div className="justify-start pr-7 hidden desktop:block mobile:hidden">
        <Writers item={recipients} />
      </div>
      <div
        className={cn("hidden items-center h-[28px] border-r", "desktop:block")}
      ></div>
      <div
        className={cn(
          "flex items-center px-5 w-full justify-between",
          "tablet:px-0 tablet:justify-center tablet:w-fit"
        )}
      >
        <div className="desktop:pl-7">
          <DropdownEmoji reactions={recipients.topReactions} />
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
      </div>
    </div>
  );
};

export default memo(HeaderServiceContents);
