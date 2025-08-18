import { cn } from "../../utils";

const HomeSection = ({
  point = "",
  title = "",
  subtitle = "",
  img = "",
  imgAlt = "",
  desktopLayout = "default",
}) => {
  const isReversed = desktopLayout === "reverse";

  return (
    <div
      className={cn(
        "h-[352px] rounded-[20px] bg-surface mb-[30px]",
        "tablet:h-[440px]",
        "desktop:flex desktop:justify-between desktop:h-[324px]",
        { "desktop:flex-row-reverse desktop:justify-end": isReversed }
      )}
    >
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
      <div
        className={cn(
          "flex mt-[50px] justify-center overflow-hidden",
          "tablet:mt-[36px]",
          "desktop:overflow-visible desktop:mt-0 desktop:py-[60px]"
        )}
      >
        <img
          src={img}
          alt={imgAlt}
          className={cn(
            "max-w-none w-[400px] object-cover",
            "tablet:w-[720px]",
            "desktop:h-[204px]"
          )}
        />
      </div>
    </div>
  );
};
export default HomeSection;
