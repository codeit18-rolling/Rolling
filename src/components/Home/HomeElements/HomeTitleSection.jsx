import { cn } from "../../../utils";

export const HomeTitleSection = ({ point, title, subtitle, isReversed }) => {
  return (
    <div
      className={cn(
        "pt-6 px-6 tablet:px-10 tablet:pt-10",
        "desktop:pt-[60px] desktop:px-[60px]",
        { "desktop:pl-0": isReversed }
      )}
    >
      <div
        className={cn(
          "bg-purple-600 w-fit px-3 py-1 rounded-[50px]",
          " text-[14px] font-bold text-white leading-[20px] -tracking-[0.005em]",
          "tablet:py-[6px]"
        )}
      >
        Point. {point}
      </div>
      <div className="flex flex-col mt-4 gap-1 tablet:gap-2">
        <p
          className={cn(
            "text-18 font-bold leading-[28px] -tracking-[0.01em]",
            "tablet:text-24 tablet:leading-9"
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-[15px] font-normal leading-[22px] -tracking-[-0.01em] text-gray-500",
            "tablet:text-[18px] tablet:leading-7"
          )}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
