import { memo } from "react";
import { cn } from "../../utils";
import { REACTIONS_DATA } from "../../MockData";
import Writers from "../../components/Writers/Writers";
import DropdownEmoji from "../../components/Dropdown/DropdownEmoji";
import { DropdownAddEmoji } from "../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./HeaderServiceElements/ShareButton";

const HeaderService = ({ recipients }) => {
  return (
    <>
      <div
        className={cn(
          "flex justify-center bg-white z-50",
          "tablet:items-center tablet:h-[68px]",
          "mobile:h-[104px]"
        )}
      >
        <div
          className={cn(
            "justify-between",
            "desktop:w-[1248px] px-7",
            "tablet:flex-row tablet:w-[816px] tablet:items-center tablet:h-[42px]",
            "mobile:w-[360px] mobile:flex mobile:flex-col"
          )}
        >
          <p
            className={cn(
              "text-gray-800 font-bold leading-[42px] flex",
              "tablet:w-[227px] tablet:border-none tablet:h-[42px] tablet:text-28",
              "mobile:h-[52px] mobile:items-center mobile:border-b border-gray-200 mobile:text-18"
            )}
          >
            To.{recipients.name}
          </p>
          <div className="flex items-center justify-center">
            <div className="justify-start pr-7 desktop:block mobile:hidden">
              <Writers item={recipients} />
            </div>
            <div
              className={cn(
                "flex items-center h-[28px] border-r",
                "desktop:block",
                "mobile:hidden"
              )}
            ></div>
            <div
              className={cn(
                "flex items-center",
                "tablet:px-0",
                "mobile:px-[21px]"
              )}
            >
              <div className="desktop:pl-7">
                <DropdownEmoji reactionData={REACTIONS_DATA} />
              </div>
              <div className="flex items-center tablet:h-[0px] mobile:h-[52px]">
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
