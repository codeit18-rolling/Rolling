import { memo } from "react";
import { cn } from "../../utils";
import { REACTIONS_DATA } from "../../MockData";
import Writers from "../../components/Writers/Writers";
import DropdownEmoji from "../../components/Dropdown/DropdownEmoji";
import { DropdownAddEmoji } from "../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./HeaderServiceElements/ShareButton";

/**
 * 헤더 밑 부분에 표출되는 헤더 서비스 컴포넌트
 * @author <hwitae>
 * @param {Object{}} recipients
 */
const HeaderService = ({ recipients }) => {
  return (
    <>
      <div
        className={cn(
          "flex justify-center h-[104px] bg-white z-50",
          "tablet:items-center tablet:h-[68px]"
        )}
      >
        <div
          className={cn(
            "justify-between flex flex-col",
            "w-full mx-auto max-w-[1248px]",
            "tablet:flex-row tablet:items-center tablet:h-[42px] tablet:px-[24px]"
          )}
        >
          <p
            className={cn(
              "h-[52px] flex items-center border-b border-gray-200",
              "text-18 px-5 text-gray-800 font-bold leading-[42px]",
              "tablet:w-[227px] tablet:border-none tablet:h-[42px] tablet:text-28"
            )}
          >
            To.{recipients.name}
          </p>
          <div className={cn("flex items-center justify-center")}>
            <div className="justify-start pr-7 hidden desktop:block mobile:hidden">
              <Writers item={recipients} />
            </div>
            <div
              className={cn(
                "hidden items-center h-[28px] border-r",
                "desktop:block"
              )}
            ></div>
            <div
              className={cn(
                "flex items-center px-5 w-full justify-between",
                "tablet:px-0 tablet:justify-center tablet:w-fit",
                ""
              )}
            >
              <div className="desktop:pl-7">
                <DropdownEmoji reactionData={recipients} />
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
        </div>
      </div>
    </>
  );
};

export default memo(HeaderService);
