import { cn } from "../../../utils";

export const HomeSectionWrapper = ({ isReversed, children }) => {
  return (
    <div
      className={cn(
        "h-[352px] rounded-[20px] bg-surface mb-[30px]",
        "tablet:h-[440px]",
        "desktop:flex desktop:justify-between desktop:h-[324px]",
        { "desktop:flex-row-reverse desktop:justify-end": isReversed }
      )}
    >
      {children}
    </div>
  );
};
