import { memo } from "react";
import { cn } from "../../utils";
import {
  CardListMockData,
  MESSAGES_DATA,
  REACTIONS_DATA,
} from "../../MockData";
import Writers from "../../components/Writers/Writers";
import DropdownEmoji from "../../components/Dropdown/DropdownEmoji";
import { DropdownAddEmoji } from "../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./HeaderServiceElements/ShareButton";

const HeaderService = ({ recipients }) => {
  return (
    <>
      <div className="flex justify-center items-center h-[68px] bg-white z-50">
        <div
          className={cn(
            "flex items-center justify-between h-[42px]",
            "desktop:w-[1200px]",
            "tablet:w-[768px]",
            "mobile:w-[360px]"
          )}
        >
          <p
            className={cn(
              "w-[227px] text-gray-800 text-28 font-bold leading-[42px]",
              "tablet:block",
              "mobile:hidden"
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
            <div className="flex items-center tablet:px-0 mobile:px-[21px]">
              <div className="desktop:pl-7">
                <DropdownEmoji reactionData={REACTIONS_DATA} />
              </div>
              <div className="flex items-center">
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
