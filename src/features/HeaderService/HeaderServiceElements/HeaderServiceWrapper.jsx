import { cn } from "../../../utils";

/**
 * HeaderServiceWrapper Component
 * @author <hwitae>
 */
export const HeaderServiceWrapper = ({ children }) => {
  return (
    <div
      className={cn(
        "flex justify-center h-[104px] z-50",
        "tablet:items-center tablet:h-[68px]"
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          "w-full mx-auto max-w-[1248px]",
          "tablet:flex-row tablet:items-center tablet:h-[42px] tablet:px-[24px] tablet:gap-10"
        )}
      >
        {children}
      </div>
    </div>
  );
};
