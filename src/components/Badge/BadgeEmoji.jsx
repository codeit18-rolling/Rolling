import { memo } from "react";
import { cn } from "../../utils";

/**
 * @author <hwitae>
 * @param {Object{}} reactions emoji와 count가 들어있는 객체
 */
const EmojiBadge = ({ reactions }) => {
  const { emoji, count } = reactions;

  return (
    <>
      <div
        className={cn(
          "h-[36px] bg-black/60 rounded-[32px]",
          "flex justify-center items-center gap-x-0.5",
          "px-[14px]"
        )}
      >
        <div
          className={cn(
            "text-base font-normal leading-[26px] tracking-[-0.01em]"
          )}
        >
          {emoji}
        </div>
        <p
          className={cn(
            "text-white text-base m-0 leading-[26px] font-normal tracking-[-0.01em]"
          )}
        >
          {count}
        </p>
      </div>
    </>
  );
};

export default memo(EmojiBadge);
