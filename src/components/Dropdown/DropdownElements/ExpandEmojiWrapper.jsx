import { cn } from "../../../utils";

/**
 * 이모지 전부 표시하는 부분 Wrapper
 * @author <hwitae>
 */
export const ExpandEmojiWrapper = ({ children }) => {
  return (
    <div className={"absolute right-px tablet:top-12 mobile:top-9 z-50"}>
      <div
        className={cn(
          "desktop:w-[312px] bg-white",
          "tablet:w-[248px] tablet:p-[24px]",
          "mobile:w-[203px] p-4",
          "border border-gray-dropdownBorder rounded-lg",
          "drop-shadow-dropdownBorder"
        )}
      >
        {children}
      </div>
    </div>
  );
};
